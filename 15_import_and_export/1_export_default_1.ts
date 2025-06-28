/**
 * Export
 * 
 * export default는 파일당 1개만 존재할 수 있음
 */

class IdolModel {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}


const number = 12;
// export default number;


interface ICat {
    name: string;
    breed: string;
}

export default {
    IdolModel,
    number,
    // interface는 TS type이기 떄문에 객체에 넣을 수 없다.
}
// export default는 1번만 가능하기 때문에 위와 같이 객체를 반환하여 넘겨줄 수 있다.