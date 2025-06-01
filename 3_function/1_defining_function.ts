/**
 * defining Function
 */

// -- 기존 JS --
// function printName(name) {
//     console.log(name);
// }
// => TS에서는 이렇게 선언하지 않는다.

function printName(name: string) {
    console.log(name);
}

function returnTwoCouples(person1: string, person2?: string) {
    return `${person1}과 ${person2}은 사귀고 있습니다.`;
}

console.log(returnTwoCouples('아이유', '코드팩토리'));
// returnTwoCouples('아이유', 1); => err
// 타입을 잘못 입력하면 바로 err

/**
 * Optional Parameter
 */
function multiplyOrReturn(x: number, y?: number) {
    if (y) {
        return x * y;
    } else {
        return x;
    }
}

console.log(multiplyOrReturn(10, 20));
console.log(multiplyOrReturn(10));

function multiplyOrReturn2(x: number, y: number = 20) {
    return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: string[]) {
// ...args => argument를 무한대로 받을 수 있다.
    return args.map((x) => `너무좋아 ${x}`);
}

console.log(getInfiniteParameters('아이유', '아이브', '블랙핑크'));
// console.log(getInfiniteParameters(1, 2, 3)); => err

/**
 * Return Type
 */
function addTwoNumebrs(x: number, y: number) {
    return x + y;
}
addTwoNumebrs(10, 20);
// return 값이 number type으로 TS가 유추한다.

function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '랜덤';
}
randomNumber();
// 이하동문

function subtractTwoNumbers(x: number, y: number): number{
// 반환타입을 지정하기 위해선 파라미터 끝에 : number 삽입
    return x - y;
}

const subtractTwoNumbersArrow = (x: number, y: number) : number =>  {
    return x - y;
}
// Arrow 함수 형태의 type선언

/**
 * 특수 반환 타입
 * 
 * void / never
 */

function doNotReturn(): void{
    console.log('저는 반환을 하지 않아요.');
    // return 3; => err
}
// void 반환 타입
doNotReturn();

function neverEndingLoop() : never {
    while(true) {

    }
}
// 함수가 never 타입이면 함수가 끝나지 않는 형태로 만들어야 한다.
// ex) while loog

// throwError(); => 실행하면 컴 멈춤

function throwError() : never{
    throw Error();
}