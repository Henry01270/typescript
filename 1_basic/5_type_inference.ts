/**
 * Type Inference
 * 
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;

// booleanType = 'false'; => err 
// boolean타입으로 ts가 추론했기 때문에 string값 입력 불가

const constStringType = 'const string';
const constStringType2 : 'const string' = 'const string';
const constBooleanType = true;
// String Literal Types => 정해진 string만 입력할 수 있다.
// constStringType의 type이 입력한 'const string'인 상태

let yuJin = {
    name: '안유진',
    age: 2003,   
}

const yuJin2 = {
    name: '안유진',
    age: 2003,
}
yuJin2.name = '코드팩토리' as const;
console.log(yuJin2);
// const 객체 안에 들어간 내용은 SLT가 적용X
// 각 변수마다 직접 캐스팅 해주어야함

const yuJin3 = {
    name: '안유진' as const,
    age: 2003 as const,
}
// yuJin3.name = '코드팩토리'; => err

console.log(yuJin3.name);
console.log(yuJin2.name);

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5', '6'];
// union형태 => numbersAndString의 type은  = string | number

numbers.push(6);
// numbers.push('6'); => err

const number = numbers[0];
const nos = numbersAndString[0];
// nos의 type은 string | number
const nos2 = numbersAndString[6];
// ts는 초과한 index를 가져왔는지 알 지 못한다.

// tuple
const twoNumbers = [1, 3] as const;
// readonly는 수정할 수 없는 타입이라는 뜻

// twoNumbers[0] = 10; => err
// twoNumbers.push(100); => err
const first = twoNumbers[0];
// const first2 = twoNumbers[3]; => err
// tuple은 초과한 index를 바로 잡아낸다.