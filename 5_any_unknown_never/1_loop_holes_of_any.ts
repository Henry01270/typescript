/**
 * Loopholes of Any
 */
let number: number;

number = 10;

// number.toUpperCase(); > err
// 숫자에는 UpperCase를 할 수 없음

(number as any).toUpperCase();
// number를 any로 캐스팅하면 UpperCase를 해도 err가 나지 않음
// 하지만 자바스크립트로 컴파일하는 과정중에 런타임에서 err가 남
// 따라서 any를 남발하거나 마음대로 캐스팅해서는 안됨.

const multiplyTwo = (x: number, y: number) => {
    return x * y;
}
// 두 값을 받아 곲하는 함수 만들기
let args1: any = '코드팩토리';
let args2: any = true;

multiplyTwo(args1, args2);
// any로 캐스팅한 값은 엉뚱한 값이 들어가도 코드 작성중 err가 나지 않는다.
// 따라서 any 캐스팅은 권장 x

let iu: any = {name: '아이유', age: 30};
// iu. 했을때 어떤 프로퍼티도 자동완성으로 등장하지 않는다.
// any로 선언하면 TS가 iu 프로퍼티 내용을 전혀 알지 못한다.

// 따라서 object도 any로 캐스팅해서는 안된다.


const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x, y);
}

const callback = (x: number, y: number) => {
    // 구조적으로 문제는 없지만,
    // callback type을 any로 놓았기 때문에 y값을 없애버리면
    // 그냥 y가 없어진 5라는 값이 나온다.
    return x * y;
}

callbackRunner(5, 4, callback);

/**
 * 따라서 any 타입은 err를 반환하지 않기에 리팩터링할때 
 * 위험요소가 굉장히 크기 때문에 권장하지 않는다.
 */