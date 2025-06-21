/**
 * Generic in interface
 */
// 어떤 데이터든 들어가게 하고싶은데 타입체크도 하고 싶을 때 사용
interface Cache<T> {
    data: T[];
    // data에 T를 넣는다면 generic에 추가한 type으로 고정
    lastUpdate: Date;
}

const cach1: Cache<string> = {
    data: ['data1', 'data2'],
    lastUpdate: new Date(),
}

const cache2: Cache<number> = {
    // 이 경우엔 generic 생략이 안된다.
    data: [123, 456],
    lastUpdate: new Date(),
}

interface DefaultGeneric<T = string> {
    // generic에 default값을 설정할 수 있다.
    data:T[];
}

const cach3: DefaultGeneric<number> = {
    // interface에서 선언된 generic type을 재정의해서 사용할 수 있다.
    data: [123, 456],
}