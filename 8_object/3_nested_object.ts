/**
 * Nested Object
 * 
 * 객체안에 객체를 넣는다.
 */

// 객체를 한번에 생성하기

type NestedPerson = {
    identity: {
        name: string;
        age: number;
    },
    nationality: string;
}

const codefactory: NestedPerson = {
    identity: {
        name: '코드팩토리',
        age: 32,
    },
    nationality: '한국인',
}


// 객체를 분리해서 생성하기

type TPerson = {
    identity: TPersonIdentity,
    nationality: string;
}
type TPersonIdentity = {
    name: string;
    age: number;
}
const iu: TPerson = {
    identity: {
        name: '아이유',
        age: 32,
    },
    nationality: '한국인',
}

// 분리하는게 에러코드를 확인할 때 유리하다



// nested object를 interface로 선언하면,
interface IPerson {
    identity: IPersonIdentity;
    nationality: string;
}
interface IPersonIdentity {
    name: string;
    age: number;
}
const yujin: TPerson = {
    identity: {
        name: '안유진',
        age: 22,
    },
    nationality: '한국인',
}