/**
 * Generic in Promise
 */
const afterTwoSeconds = function () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 2000)
    });
}

const runner = async function() {
    const res = await afterTwoSeconds();
    console.log(res);
    // afterTwoSeconds string type을 resolve하고 있지만,
    // res 값은 unknown type이다.
}

runner();

// 이를 해결하기 위해
const afterOneSecond = function(): Promise<string> {
    // Promise에 string 타입을 반환
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('done');
        }, 1000)
    })

}

const runner2 = async function () {
    const res = await afterOneSecond();
    console.log(res);
    // res에서 string을 받는다.
}

runner2();



const runner3 = async function() {
    // 비동기 동기 함수를 떠나서 async를 붙이기만하면 Promise 유추
    return 'string return';
}