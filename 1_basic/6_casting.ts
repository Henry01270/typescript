/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */
const codefactory = 'code factory';
const testNumber = 3;

console.log(codefactory.toUpperCase());
// console.log(testNumber.toUpperCase()); => err

let sampleNumber: any = 5;
// any는 어떤 타입도 가능하다
// console.log(sampleNumber.toUpperCase()); => 실행은 되지만 터미널 에러
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string));
// 캐스팅의 위험성
// 캐스팅을 해도 JS에서는 적용이 안되기 떄문에
// 결과적으로는 string으로 캐스팅해도 type값은 number로 출력된다.


let number = 5;

// console.log((number as any).toUpperCase()); => 터미널 err
// 보통 캐스팅할때는 구체화되거나 안정적인 type을 사용
// => string, boolean, unknown