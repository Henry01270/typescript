/**
 * Problems with Array in JS
 */
const number = [1, '2', 3, '4', 5];
// TS의 경우 자동으로 union으로 인식하지만
// JS의 경우 Array에 아무런 조치 없이 값을 그대로 받는다.

let strings: string[] = ['1', '2', '3'];
// TS에서 type을 지정해주면
// strings.push(1); > err
// 다른 타입을 입력할 때 err를 반환하는것이 TS의 목적

// 동시에 사용하게 하기 위해선
let stringsOrNumbersArray: (string | number)[] = [1, '2', 3];

// number나 string만 가능하게 하기 위해선
let stringArrNumberArr: string[] | number[] = [
    1, 2, 3,
];
stringArrNumberArr = [
    '1', '2', '3',
];

// (주의) string 또는 numberArray
let stringOrNumberArr: string | number[] = [
    1, 2, 3,
];
stringOrNumberArr = '3'; 

let boolsArr = [true, false, true];
// boolean Array로 자동유추
boolsArr.push(false);
// boolsArr.push(1); > err


const onlyString = ['1', '2', '3'];
const onlyNumbers = [1, 2, 3];
for (let i = 0; i < onlyString.length; i++) {
    let item = onlyString[i];
}

for (let item of onlyNumbers) {
    
}
let number3 = onlyNumbers[0];

let number4 = onlyNumbers[999];
// TS는 index의 길이를 신경쓰지 않으므로 유의
// 실제 실행하면 해당 index는 존재하지 않으므로 undefined가 나오지만
// TS에서는 number로 narrowing한다.