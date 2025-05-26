/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 * 
 * DONE -  요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩상태
 * INITIAL - 초기 상태
 */

/// 기본 작동구조
function runWork() {
    let state = 'INITIAL';

    try{
        state = 'LOADING';
        // 작업을 한다.

        state = 'DONE';
    }catch(e){
        state = 'ERROR';
    }finally{
        return state;
    }
}

console.log(runWork() === 'DONNE'); // 오타나 글자가 조금이라도 다른면
// false 반환

// => 해결을 위해 javascript만 사용했을때는
const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
    let state = initialState;

    try{
        state = loadingState;
        // 작업을 한다.

        state = doneState;
    }catch(e){
        state = errorState;
    }finally{
        return state;
    }
}
console.log(runWork2() === doneState);

//=> enum으로 표현하면

enum State {
    DONE = 'DONE',
    LOADING = 'LOADING',
    INITIAL = 'INITIAL',
    ERROR = 'ERROR',
}
// => enum 안에 있는 값을 정의하지 않으면
//  순서대로 0, 1, 2, 3... 의 값을 가짐

function runWork3() {
    let state = State.INITIAL;

    try{
        state = State.LOADING;
        // 작업을 한다.

        state = State.DONE;
    }catch(e){
        state = State.ERROR;
    }finally{
        return state;
    }
}
console.log('----enum----');
console.log(runWork3() === State.DONE);
console.log(runWork3())
