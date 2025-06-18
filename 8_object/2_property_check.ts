/**
 * Property Check
 * 
 * 초과 속성 검사
 */
type TName = {
    name: string;
}

type TAge = {
    age: number;
}

const iu = {
    name: '아이유',
    age: 30,
}

// const iu: TName = {
//     name: '아이유',
//     age: 30
// }
// age 프로퍼티가 초과되므로 err

const testName: TName = iu;
const testAge: TAge = iu;
// 위 방식으로 선언하면
// 초과 property로 인해 err가 나야한다고 생각되지만
//  err가 나지 않음

// 이미 선언이 되어 있는 객체의 변수를 다른 변수로 옮길땐 
// 객체의 타입을 보게 된다.
// 따라서 narrowing 방식으로 동작
// 하지만 빌드타임에서는 초과된 프로퍼티도 잡음

