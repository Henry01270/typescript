/**
 * Class as Type and Value
 * 
 * class가 type과 value로 동시에 사용하는 상황
 */
class Dog {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

let ori = new Dog('오리');
// ori는 Dog type으로 지정한적이 없지만 Dog type으로 명시됨.
console.log(ori.bark());

// ori = '오리'; > err

// 하지만 특수한 객체로는 바꿀 수 있다.
ori = {
    name: '별이',
    bark() {
        return `${this.name}가 짖습니다.`;
    }
}

console.log(ori);