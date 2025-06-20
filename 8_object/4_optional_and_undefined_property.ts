/**
 * Optional and Undefined Property
 */
interface Dog {
    name: string;
    age: number;
    // 종을 모르면 undefined
    breed?: string;
}

const byulE: Dog = {
    name: '별이',
    age: 12,
    breed: '미니핀',
}

const ori: Dog = {
    name: '오리',
    age: 3,
}


// optional(?)로 변수를 선언했을때 값을 입력하지 않는 것과
// 값을 undefined로 선언해버리는 것과의 차이

// undefined
interface Cat {
    name: string;
    age: number;
    breed: string | undefined;
}

const nabi: Cat = {
    name: '나비',
    age: 7,
    breed: undefined,
    // option로 만들어주지 않으면
    // property의 값을 undefined여도 무조건 기입해주어야함.
    // 따라서 optional은 프로퍼티에 값을 입력해도 되는지 안되는지에 해당
}