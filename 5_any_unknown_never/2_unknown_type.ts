/**
 * Unknown Type
 * 
 * 잘 사용 x
 * any 타입과 비슷하지만 덜 관대한 타입이다.
 */
let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = [];
anyValue = {};
// any type은 굉장히 관대하다.

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = [];
unknownValue = {};
// unknown도 어떤 값이든 입력 가능하지만 할당에서 차이가 있다.

let anyType: any = anyValue;
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] =  anyValue;
let objectType: {} = anyValue;
// 어떤 type의 값을 선언하든지 
// 그 값에는 any 타입의 다른 변수값을 할당을 할 수가 있다.

let anyType: any = unknownValue;
let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue; > err
// let arrayType: string[] =  unknownValue; > err
// let objectType: {} = unknownValue; > err
// unknown은 any 혹은 unknown type의 변수에만 할당이 가능하다.
// primitive type 변수에는 err

// anyValue.toUpperCase();
// anyValue.name;
// new anyValue();
// 실제 런타임에서는 err나지만 코드 작성 환경에선 err을 잡지 않는다.

// unknownValue.toUpperCase(); > err
// unknownValue.name; > err
// new unknownValue();
// unknown은 타입을 알 수 없으므로 err 반환한다.

function isString(target: unknown) : target is string{
    return typeof target =='string';
}

let testVal: unknown;

if(isString(testVal)){
    testVal;
    // unknown으로 선언해도 string으로 잘 유추된다.
}
// 좀 더 상세한 타입으로 any보단 유리하다.


/**
 * Union Type
 */
type uOrString = unknown | string; // => unknown 타입으로 흡수된다.
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type UOrAny = unknown | any; 
// unknown과 any를 union으로 선언하면 any type으로 흡수된다.

/**
 * Intersection Type
 */
type uAndString = unknown & string; // primitive 타입으로 흡수된다.
type uAndBoolean = unknown & boolean;
type uAndAny = unknown & any; 
// 특이하게 unknown이 아닌 any로 흡수된다.
// unknown과 Intersection을 하면 무조건 상대타입으로 흡수된다.


/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2; > err
// number1 - number2; > err
// 사칙연산 불가능

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;
// 등호 연산자만 가능