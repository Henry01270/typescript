/**
 * ./ (현재위치)
 * ../ (상위폴더)
 */

// 1에서 생성한 IdolModel class 불러오기
import Example from "./1_export_default_1";

// const iu = new IdolModel('아이유', 23);
// console.log(iu);


// console.log(IdolModel);


// const cat: IdolModel = {
//     name: '냥냥이',
//     breed: '스코티시폴드',
// };


const yuJin = new Example.IdolModel('안유진', 23);

console.log(yuJin);
console.log(Example.number);