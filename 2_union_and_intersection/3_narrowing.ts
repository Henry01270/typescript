/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미한다.
 */

let numberOrString: number | string = 'Code Factory';
numberOrString;
// type을 유추

const decimal = 12.34567;
console.log(decimal.toFixed(2));
// toFixed는 숫자만큼 반올림

// numberOrString.toFixed(2);
// string type으로 narrowing 되었기 떄문에 err

/**
 * Narrowing의 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instace of Narrowing
 * 7) discrimated union Narrowing (차별된 유니온 내로잉)
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numbOrString: number | string = '아이유';

numbOrString.toString();


// (2) typeof Narrowing
numberOrString = Math.random() > 0.5 ? 1123 : '아이유';
// Math.random(); 0~1 사이의 랜덤값 반환

if(typeof numbOrString === 'string') {
    numbOrString;
    // if문에 의해 string type으로 내로잉된것을 확인할 수 있다.
} else {
    numbOrString;
    // else문에 의해 string이 아닌 type으로 내로잉된것을 확인할 수 있다.
}


// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];

if(nullOrString) {
    nullOrString;
    // string으로 유추
} else {
    nullOrString;
    // null로 유추
}


// (4) Equality Narrowing
let numbOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if(numbOrString2 === stringOrBool2) {
    numbOrString2;
    stringOrBool2;
    // 두 값 모두 string type인 경우를 유추하여 string 반환
} else {
    numbOrString2;
    stringOrBool2;
    // 두 값 모두 string type인 경우를 배제하여
    // numbOrString2는  string | number,
    // stringOrBool2는 string | boolean type 으로 유추
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ?
    1123: Math.random() > 0.5 ? '안유진': null;

if (typeof numberOrStringOrNull === 'number') {
    numberOrStringOrNull;
} else {
    numberOrStringOrNull;
}


// (5) in operator Narrowing
interface Human {
    name: string;
    age: number;
}

interface Dog{
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 23,
}

let dog: Dog = {
    name: '오리',
    type: 'Yorkshire Terrier',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? 
    human : dog;

if ('type' in humanOrDog) {
// in 키워드를 통해 존재하는 키 값을 찾을 수 있다.
    humanOrDog;
    // type 키워드는 Dog밖에 없기에 Dog로 유추
} else {
    humanOrDog;
}


// (6) instance of Narrowing
let dateOrString: Date | string = Math.random() > 0.5 ?
    new Date() : '코드팩토리';

if (dateOrString instanceof Date) {
// dateOrString이 Date 클래스의 인스턴스인지 판별
    dateOrString;
} else {
    dateOrString;
}

// (7) Discriminated Union Narrowing
interface Animal {
    type: 'dog' | 'human';
    height?: number;
    // human에만 height값이 적용되도록 ? 입력 (권장 x)
    breed?: string;
    // breed는 dog에만
}

let animal: Animal = Math.random() > 0.5 ?
{
    type: 'human',
    height: 177,
} : {
    type: 'dog',
    breed: 'Yorkshire Terrier',
};

if (animal.type === 'human') {
    animal.height;
    // ?를 했기때문에 number | undefined이다.
} else {
    animal.breed;
    animal.height;
    // 이하동문
}

// 아래는 권장방법 
interface Human2 {
    type: 'human',
    height: number;
}

interface Dog2 {
    type: 'dog',
    breed: string;
}

interface Fish2 {
    type: 'fish';
    length: number;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
{
    type: 'human',
    height: 177,
} : Math.random() > 0.5 ? {
    type: 'dog',
    breed: 'Yorkshire Terrier',
} : {
    type: 'fish',
    length: 12,
};

if (humanOrDog2.type === 'human') {
    humanOrDog2;
} else {
    humanOrDog2;
}

// 결론: union으로 타입을 묶는게 훨씬 정확하다.

// (8) Exhuastiveness Checking
switch(humanOrDog2.type) {
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    default:
        humanOrDog2;
        // 어떤 값도 되지 못하기 때문에 never type

        // const _check : never = humanOrDog2;
        // never type에 asign이 가능한것을 이용하여 체크
        // fish2 타입을 추가해서 err뜸
        break;
}
