/**
 * Inheritance
 */

class Parent {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    dance() {
        console.log(`parent: ${this.name}이 춤을 춥니다.`);
    }
}

class Child extends Parent {
    age: number;

    constructor(name: string, age: number) {
        super(name);

        this.age = age;
    }

    sing() {
        console.log(`child : ${this.name}이 노래를 부릅니다.`);
    }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance();
// codefactory.sing();

ahri.dance();
ahri.sing();



let person: Parent;
person = codefactory;
person = ahri;
// ahri는 codefactory의 자식 클래스이므로 상속이 가능하다.

let person2: Child;
person2 = ahri;
// person2 = codefactory; > err 부모는 자식타입이 될 수 없다.


/**
 * optional property를 유의하자
 * (부모가 자식타입이 될수도 있다.)
 */
class Parent2 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}
class Child2 extends Parent2 {
    age?: number;

    constructor(name: string, age?: number) {
        super(name);
        this.age = age
    }
}
const cf2 = new Parent2('코드팩토리');
const ahri2 = new Child2('아리', 20);

let child: Child2;
child = ahri2;

child = cf2;
// 추가된 property인 age가 oprional 이기 때문에,
// 부모가 자식타입이 되어버린다. 유의!!