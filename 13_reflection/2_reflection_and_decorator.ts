/**
 * Reflection and Decorator
 */
import 'reflect-metadata';

const restrictParamValueKey = Symbol('restrictParamValue');
// Symbol은 프로그램이 실행하는 동안 restrictParamValueKey 변수와 
// 같은 값은 존재할 수 없게 한다.

interface RestrictionInfo<T> {
    // T type은 restricedValues와 같은 값
    index: number;
    restrictedValues: T[];
}

function RestrictParamValue<T>(restrictedValues: T[]) {
// 특정 타입의 조합을 다룰땐 generic이 유리하다.
    return (target: any, propertyKey: string, index: number) => {
        const prevMeta = Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey) ?? [];
        // sing 메서드에 메타데이터를 저장하여, 다른 메타 데이터들과 겹치지 않게 함.
        // sing 메서드에 데코레이팅하면 target은 idol.prototype 된다.
        // propertyKey는 메서드의 이름
        // ?? [] 만약 저장된게 없다면 리스트 반환

        const info: RestrictionInfo<T> = {
            index,
            restrictedValues,
            // RestrictParamValue로 #(태그)를 한 값에 들어가 있는 값들을
            // 파라미터 값에 들어가 있는 값들을 전부다 
            // 몇번째 파라미터인가 해서 제한된 값들을 정리를 해놓을 수 있다.


        }

        // ?? []로 제한된 값들도 쌓아놓아야 한다.
        Reflect.defineMetadata(restrictParamValueKey, [
            ...prevMeta,
            info,
        ], target, propertyKey)

        console.log(Reflect.getOwnMetadata(restrictParamValueKey, target, propertyKey));
    }
}

function ValidatedMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(
        restrictParamValueKey,
        target,
        propertyKey
    ) ?? [];

    const original = descriptor.value;

    descriptor.value = function(...args: any) {
        const invalids = metas.filter(
            (x) => !x.restrictedValues.includes(args[x.index])
            // RestrictParamValue에 존재하지 않는 경우만 필터
        );

        if(invalids.length > 0) {
            throw Error(`잘못된 값입니다. ${invalids.map(x => args[x.index]).join(', ')}`);
            // 잘못된 값들을 표시
        }

        return original.apply(this, args);
    }
}

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // style에는 '신나게' | '열정적으로'
    // style : '신나게' | '열정적으로' 라고 작성하면, TS에서만 제약되고
    // 실제 런타임에선 문제가 일어나지 않는다.

    // TS에서만 제약하지 않고 JS 런타임에서도 제약이 가능하게 하귀 위해선
    @ValidatedMethod
    sing(@RestrictParamValue(['신나게', '열정적으로']) style: string,
    @RestrictParamValue([1, 2, 3]) ranking: number) {
    // RestrictParamValue 태그를 사용해서 1, 2, 3만 가능하도록 제한
        return `${this.name}이 ${style} 노래를 부릅니다.`;
    }
}

const yuJin = new Idol('안유진', 23);

console.log('----sing----');
console.log(yuJin.sing('신나게', 1));
console.log(yuJin.sing('열정적으로', 2));

// console.log(yuJin.sing('기분나쁘게', 4));
// > throw Error: 잘못된 값입니다. 4, 기분나쁘게