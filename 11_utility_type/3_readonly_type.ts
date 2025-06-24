/**
 * Readonly Type
 */

interface Cat {
    name: string;
    age: number;
}

const nyaong: Cat = {
    name: '냐옹이',
    age: 8,
}

nyaong.name = '코드팩토리';

const bori: Readonly<Cat> = {
    name: '보리',
    age: 7,
}

// bori.name = '아이유';
// > err Readonly로 선언하면 property 수정 불가능

// TS에만 존재하는 용어이므로 JS runtime 해버리면 err를 잡지못함
// Js에서도 잡게 하기 위해선,

Object.freeze(bori);
// 실제로 readonly랑 섞어서 쓰는 경우가 많다.