/**
 * Import
 */
import {IdolModel, rose, number, ICat} from './2_export_1';
// import 할 값의 명칭을 정확히 적어주어야 한다.

const iu = new IdolModel('아이유', 32);
console.log(iu);
console.log(rose);
console.log(number);

const cat: ICat = {
    name: '냥냥이',
    age: 12,
}
console.log(cat);
