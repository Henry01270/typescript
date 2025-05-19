/**
 * Types
 */
let helloText: string = 'hello';
// helloText = true; => err

/**
 * 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVar: bigint = BigInt(999999);
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
let anyVar: any;
anyVar = 100;
anyVar = '코드팩토리';
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBolean: boolean = anyVar;

// unknown - 알수없는 타입
let unknownType: unknown;
unknownType = 100;
unknownType = '코드팩토리';
unknownType = true;

// let testNumber2: number = numknownType; => err
// let testString2: string = numknownType; => err
// let testBolean2: boolean = numknownType; => err
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;

// any, unknown 타입 모두 모든 타입을 할당 가능하지만 unknown은 
// 타른 타입에 저장 불가능 (unknown이나 any타입만 가능)


// never - 어떠한 값도 저장되거나 반환되지 않을때 사용
// let neverType: never = null; => err
// let neverType: never = undefined; => err
// let neverType: never = 'test'; => err

/**
 * 리스트 타입
 */
const koreanGirlGroup : string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList: boolean[] = [true, false, false, true];
