/**
 * Overloading
 */
/**
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 세개를 받는 함수
 */
function stringOrStrings(members: string): string;
function stringOrStrings(member1: string, member2: string, member3: string): string;
// function stringOrStrings(member: string): number; => err
// 다른 타입을 반환하여 오버로딩하면 err

/**
 * 만약 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 string으로 입력받는다.
 * 예) '안유진, 장원영, 레이'
 * 
 * 만약 세개의 파라미터를 받는다면
 * 각각 아이돌을 각각의 파라미터의 값으로 입력한다.
 * 예) '안유진', '장원영', '레이'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string){
// member2와 member3는 값을 받지 않을수도 있으니 옵셔널(?)로
    if(member2 && member3) {
        return `아이브: ${memberOrMembers}, ${member2}, ${member3}`;
    } else {
        return `아이브: ${memberOrMembers}`;
    }
}

console.log(stringOrStrings('안유진, 장원영, 레이'));
console.log(stringOrStrings('안유진', '장원영', '레이'));
// 위의 방법으로 코딩하면 2개의 값을 받아도 else문이 실행되서
// 하나의 값밖에 출력되지 않는다.
// 무조건 하나 또는 세개의 값을 받기 위해선 Overloading을 써야한다.
// 가장 위의 방법으로 오버로딩을 정의하면
// console.log(stringOrStrings('안유진', '장원영')); => err
