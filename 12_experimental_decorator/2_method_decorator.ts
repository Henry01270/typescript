/**
 * method decorator
 * 
 * 메서드에 데코레이팅하기
 */
class Idol {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    @TestMethodDecorator
    @Configurable(false)
    // 기본 ture값인 configurable을 factory형태로 데코레이팅하여 false로 바꾼다.
    @MethodCallLogger('PROD')
    dance() {
        return `${this.name}가 춤을 춥니다.`;
    }
}

// target - static method에 데코레이팅을 할 경우 생성자 함수
//        - instance method에 데코레이팅을 할 경우 인스턴스에 prototype
// propertyKey - 메서드의 이름
// descript - property descriptor

function TestMethodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('LogCall');
    console.log('--- target ---');
    console.log(target);
    console.log('--- propertyKey ---');
    console.log(propertyKey);
    console.log('--- descriptor ---');
    console.log(descriptor);
}

const rose = new Idol('로제');
// 메서드에서도 선언될 때 한번만 실행된다.
console.log('---- run dance ----');
console.log(rose.dance());


// factory 형태로 선언
function Configurable(configurable: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = configurable;
    }
}
console.log(Object.getOwnPropertyDescriptors(Idol.prototype));
// Idol class의 dance() 메서드에 Descriptor를 불러와
// configurable이 false로 변경되었는지 확인


// 이방식은 주로 value 값을 바꿀때 더많이 사용된다.
// ex)
function MethodCallLogger(env: string) {
// 함수가 불릴때마다 로그를 남기도록 만들기
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            console.log(`[${env}] running function : ${propertyKey}`)

            const result = originalMethod.apply(this, ...args);
            // apply로 원하는 딕스컨텍스트로 
            // 원하는 아규멘트들을 넣어서 함수를 실행할 수 있다.

            return result;
        }
    } 
}

console.log(rose.dance());