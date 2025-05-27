/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합할 수 있는 수많은 방법중 하나이다.
 */

type StringOrBooleanType = string | boolean;

let StringOrBooleanType: StringOrBooleanType = '아이브';
StringOrBooleanType = true;

// StringOrBooleanType = undefined; => err

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL'; => err


/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 boolean으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고은',
    '박소담',
];

strListOrBooleanList = [
    true,
    false,
    false,
    true,
];

/*
strListOrBooleanList = [
    true,
    '아이유',
]; => err > string 또는 boolean으로 구성된 리스트여서 혼용 불가능
*/

// 해결방법
type StrOrNumberList = (string | number)[];

let stringOrNumberList = [
    1, 2, 3,
    '아이유',
    '레드벨벳',
];


/**
 * Interface로 사용하는 union
 */
interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: '최지호',
    age: 32,
    address: '대한민국',
}
console.log(animalOrHuman);
/// TS가 추론하여 Human type으로 반환

animalOrHuman = {
    name: '오리',
    age: 9,
}
console.log(animalOrHuman);
// console.log((animalOrHuman as Human).address);
// 존재하지 않는 값을 캐스팅으로 호출 가능하다. => 터미널에서 err

let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} = {
    name: '최지호',
    age: 32,
    address: '대한민국',
}
console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
    name: '오리',
    age: 9,
}
// console.log(animalOrHuman2.address); => err
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);



// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
    name: '코드팩토리',
    age: 32,

    breed: 'Yorkshire Terrier',
    country: '영국',
}
// 서로 다른 타입에 들어가있는 값을 다 넣어도 에러나지 않음
// TS에서 union은 집합의 개념이다.

// 무언가 하나의 타입을 먼저 충족시켜야 그 타입에 초과되는 값이 
// 다른타입에서 부터 와도 가능하지만 타입이 한개도 충족하지 않으면 err
/**
 * const personOrCat: PersonOrCat = {
    name: '코드팩토리',

    breed: 'Yorkshire Terrier',
}
    => err
 */