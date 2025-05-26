/**
 * Type and Interface
 */
/**
 * Type
 * 
 * 타입은 TS의 타입에 이름을 지어주는 역할을 한다.
 */
type NewStringType = string;

type NewNullType = null;

type NewNumberType = number;

type MaleOrFemale = 'male' | 'female';
// union : 'male' 또는 'female'로 지정

const stringVar: NewStringType = 'test';

/// java script는 웹에서 하나의 파일로 인식되기 때문에
/// 다른 파일에 같은 변수명으로 선언해도 충돌함
/// tsconfig에서 modulDetection을 'auto'에서 'force'로
/// 바꾸면 변수가 중복으로 인식되지 않는다.

/// 서버에서는 java script를 파일별로 
/// scorpe를 다르게 한다.

type IdolType = {
    name: string;
    year?: number;
}
const yuJin: IdolType = {
    name: '안유진',
    // year: 2002,
}

/**
 * Interface
 * 
 */

interface IdolInterface {
    name: string;
    year: number;
}
const yuJin2 : IdolInterface = {
    name: '안유진',
    year: 2002,
}



interface IdolIT{
    name: NewStringType;
    year: NewNumberType;
}
const yuJin3: IdolIT = {
    name: '안유진',
    year: 2002,
};




interface IdolOptional{
    name: string;
    year?: number;
}
const yuJin4: IdolOptional = {
    name: '안유진',
    // year: 2002,
}