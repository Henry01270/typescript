/**
 * Class Decorator
 */

// experimental decorator를 사용하기 위해서는 
// tsconfig.json에서
// "experimentalDecorators": true,  "emitDecoratorMetadata": true,      
// 를 활성화 시켜주어야 한다.

@Test
// 클래스 위에 @로 데코레이터를 입력하면,
// 파라미터로 데코레이팅을 한 대상 클래스를 받아볼 수 있다.
@Frozen
@LogTest('PROD')
@ChangeClass
class idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function) {
    console.log(constructor);
}

// 응용
function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
// 얼리고 싶은 클래스 위에 데코레이팅하여 클래스를 정지할 수 있다.

const yuJin = new idol('안유진', 23);

console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));
// yuJin의 prototype이 얼어있는지 여부 확인



// 데코레이팅 함수가 실행될 때, 파라미터를 넘겨주기 위해선
// decorator factory를 사용한다.
function LogTest(env: string) {
    return function(constructor: Function) {
        console.log(`[${env}] ${constructor}가 실행됐습니다.`);
    };
}
// @LogTest()


console.log('-------------------');

const wonYoung = new idol('장원영', 22);
console.log(wonYoung);

// 따라서 클래스에 데코레이터를 입력하면,
// 클래스의 선언이 실행될 때, 딱 한번만 실행된다.


// 데코레이션한 클래스를 변경하는법
function ChangeClass<T extends {new (...args:any[]): {}}> (constructor: T) {
// new를 사용해서 인스턴스화 할 수 있는 constructor로 선언하기
    return class extends constructor {
        groupName = '아이브';

        constructor(...params: any[]) {
            super(...params);

            console.log('constructor instantiated')
        }
    }
}

// 데코레이션을 통해 groupName property 덮어쓰기 가능