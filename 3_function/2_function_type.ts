/**
 * Function Type
 */
type Mapper = (x: string) => string;
// callback 타입 지정

const runner = (callback: Mapper) => {
    return ['안유진', '장원영', '레이'].map(
        callback,
    );
}

console.log(runner((x) => `아이브 멤버: ${x}`));



type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumebrs: MultiplyTwoNumbers = (x, y) => {
    return x + y;
}

/**
 * Interface로 함수 타입 선언하기
 */

interface MultiplyTwoNumebrs {
    (x: number, y: number): number;
    // interface에서는 arraw(=>) 대신 콜론(:) 사용
}

const multiplyTwoNumbers3: MultiplyTwoNumbers = (x, y) => {
    return x * y;
}