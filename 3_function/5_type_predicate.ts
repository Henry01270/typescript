/**
 * Type Predicate
 * 타입을 구분하는 함수
 * 
 * Type Predicate에서는 반환타입을 'input is type' 형태로 만드는것이 중요하다.
 * if문을 통해서 narrowing을 했을때 정확한 타입을 유추할 수 있다.
 * 
 * 일반 타입을 반환하면 정확한 type을 유추하지 못한다.
 */
function isNumber(input: any): input is number{
// 무엇이든 입력했을때 값을 받기 위함으로 any 사용이 적절하다.
    return typeof input === 'number';
}
console.log(isNumber(10));
// 위의 방식을 통해 Type Predicate를 한다.

function isNumberRetBool(input: any): boolean{
    return typeof input === 'number';
}
// 위의 방식으로 함수를 정의하면 함수 밖에서 선언한 값의 타입이 바뀌지 않는다.
let number: any = 5;

if(isNumberRetBool(number)) {
    number;
    // number를 any type으로 인식한다.
}

if(isNumber(number)) {
    number;
    // number를 number type으로 인식한다.
}

///////////////////////////

interface Doge {
    name: string;
    age: number;
}

interface Cat {
    name: string;
    breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge {
    return (animal as Doge).age !== undefined;
    // return 에서 animal 값을 Doge로 캐스팅해서 age값을 확인해서
    // undefined가 아닐때를 구하여 Doge로 판별
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: '도지',
    age: 32,
} : {
    name: '오리',
    breed: '코리안 길냥이',
}
// 테스트

if(isDoge(doge)) {
    doge;
    // doge type
    // type predicate를 통해 Doge type으로 판별
} else {
    doge;
    // Cat type
    // random 함수의 의해 Doge가 아닐경우 Cat type임
}

