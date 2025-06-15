/**
 * Tuple
 * 
 * JS에서는 존재 x
 */
let iveTopMembers: string[] = ['안유진', '장원영', '레이'];
// 일반적인 리스트 선언

let numberAndStringTuple: [number, string] = [
    23, 
    '코드팩토리',
]
// number, string type을 차례로 1번씩만 입력하게 강제할 수 있다.

numberAndStringTuple.push('아이유');
// type을 강제했지만 push로는 리스트에 추가된다.
console.log(numberAndStringTuple);

// 이런 상황을 방지하기 위해 readonly(읽기만 가능) 사용
let unmodifiableTuple: readonly [number, string] = [
    23, '코드팩토리',
]
// unmodifiableTuple.push(); 
// 읽기만 가능하므로 err


/**
 * Tuple 유추하기
 */
let actresses = ['김고은', '박소담', '전여빈'];
// string[] 형태임

let actressesTuple = ['김고은', '박소담', '전여빈'] as const;
// const 캐스팅을 이용해 actressesTuple이 readonly type으로 바뀜
// type에 []안에 값도 정확히 등록됨
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const;

let stringArray: string[] = [
    ...actressesTuple,
    ...actressesTupleConst,
    // ...[1, 2, 3] > err
    // string[]에 숫자를 추가했기 때문
]


/**
 * Named Tuple
 */
// 튜플에 이름짓기 
// name: type
const namedTuple: [name: string, age: number] = [
    '코드팩토리',
    32,
]
// type에 지은 이름도 narrowing에 반영


/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['아이유', '유예나'];
const typle2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1; > err
// let tuple4: [number, number, number] = tuple2; > err
let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = [
    '장원영',
    '안유진'
]

let stringArr: string[] = ive;
// ive는 Array[]에 들어갈 구체적인 타입을 명시해 주었고,
// stringArr은 []의 전체적인 타입을 명시해 주었기 때문에
// 알맞은 선언이다.
// 하지만 반대로 할당을 불가능하다.

let stringArr: string[] = ive;
// let ive2: [string, string] = stringArr; > err
// string값이 두개만 들어있다는 보장이 없어서 err가 나타남
// 구체적인 타입에서 덜 구체적인 타입으론 할당이 가능하지만
// 덜 구체적인 타입에서 구체적인 타입으로 할당은 불가능\


/**
 * Multi Dimensional Tuple
 */
const tuple2D: [name: string, age: number][] = [
// 2D Tuple 배열이 구조가 헷갈리기 쉬운데
// string과 number로 구성된 tuple이 여러개가 있다고 이해하면 된다.
    ['코드팩토리', 32],
    ['아이유', 31],
    ['김고은', 30],
]