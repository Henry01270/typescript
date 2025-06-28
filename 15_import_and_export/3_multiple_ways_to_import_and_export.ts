/**
 * Multiple ways to Import and Export
 */
// import { IdolModel as IM, rose, number, ICat } from "./2_export_1";
// as로 import 명칭 바꿔주기 > 기존 명칭 사용불가

// console.log(new IM('아이유', 32));


// import * as allTogether from './2_export_1';
// *(와일드카드) - 파일에서 모든 것들을 다 불러옴
// console.log(allTogether.number);


// import cf, {rose, number} from './2_export_1';
// console.log(cf);
// console.log(rose);


/**
 * baseUrl : 절대경로
 *  tsconfig.json > baseUrl 사용
 */
// baseUrl
import { IdolModel } from "15_import_and_export/2_export_1";
