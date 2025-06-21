/**
 * Generic 함수에서 사용하기
 * 
 * 
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test');
// 위의 코드에서 타입 유추해주기 > Generic

function genericWhatValue<T>(value: T) {
// generic type T를 받고 type으로 T를 사용할 수 있다.
    return value;
    // 반환하는 type이 T
}

const genericResult1 = genericWhatValue<string>('123');
// 변수 할당과정에서 type 명시하도록 미룰 수 있다.


// generic으로 type 유추하는법 
const genericResult2 = genericWhatValue('123');
// <> 값을 명시해주지 않으면 type을 '123'을 반환
let genericResult3 = genericWhatValue('123');
// const가 아닌 let을 사용하면 string 반환



// generic 여러개 사용
function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z) {
    return {
        x,
        y,
        z,
    }
}
const multipleGenericResult = multipleGenerics<number, boolean, string>(
    123,
    true,
    '123',
);



const multipleGenericResult2 = multipleGenerics(
    // generic을 없애도 유추되서 적용된다.
    123,
    true,
    '123',
);



// tuple
function getTuple<X, Y>(val1: X, val2: Y) {
    return [val1, val2] as const;
}
const tuple = getTuple(true, 100);


// constructor

class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
class Car {
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string) {
        this.brand = brand;
        this.codeName = codeName;
    }
}

// !!!!!!!!!!!!!!!!!!

function instantiator<T extends { new (...args: any[]) : {}}>(constructor: T, ...args: any[]) {
// T type을 generic을 선언하여, constructor에서 파라미터를
// 무한대로 받아서 constructor를 실행하면 인스턴스화되어 객체 타입이 반환될 것이다.
    return new constructor(...args);
}

console.log(instantiator(Idol, '아이유', 23));
console.log(instantiator(Car, 'BMW', 1111));