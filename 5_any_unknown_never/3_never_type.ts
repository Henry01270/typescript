/**
 * Never Type
 */
// (1) 함수에서 에러를 던질 때
function throwError(): never {
    throw Error();
}

// (2) 무한 Loop
function infiniteLoop(): never {
    while(true) {

    }
}

// (3) 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// let neverType: never = 10; > err
// let neverType: never = undefined; > err
// let neverType: never = null; > err
// 어떤 값을 넣어도 err