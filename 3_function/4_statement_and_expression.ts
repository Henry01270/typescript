/**
 * Statement and Expression
 * 보통 Expression을 지향한다.
 */

// statement (문장)
function addTwoNumbers(x: number, y: number) {
    return x + y;
}

// expression (표현식) 
const addTwoNumbersExp = (x: number, y: number) => {
    return x + y;
}

/**
 * Statement
 */
function add(x: number, y: number) : number {
    return x + y;
}

function subtract(x: number, y: number) : number {
    return x + y;
}
// 타입을 중복해서 명시해야하므로 번거롭다.

/**
 * Expression
 */
type CalculationType = (x: number, y: number) => number;
// 타입을 명시해놓고 함수로 정의하여 깔끔하고 유리하다.

const add2 : CalculationType = function(x, y){
    return x + y;
}

const subtract2 : CalculationType = function(x, y){
    return x - y;
}