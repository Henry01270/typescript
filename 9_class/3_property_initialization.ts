/**
 * Property Initialization (프로퍼티 초기화)
 */

class Person {
    // 일반적인 필수값 선언법
    name: string;

    // 초기값 제공 선언법
    age: number = 23;
    // 초기값을 제공해서 constructor에 추가하지 않아도 됨
    
    // optional 값 선언법
    pet?: string;
    // optional로 선언하면 constructor에 추가하지 않아도 됨

    // type of undefined 선언법
    petAge: number | undefined;

    constructor(name: string,) {
        this.name = name;
    }
}

class RouteStack {
    stack!: string[];
    // property에 !를 넣어서 초기화가 보장이 되었다고 넣어 줄 수있다.

    constructor() {
        this.initialize();
    }

    initialize() {
        this.stack = [];
        // initialize에서 stack변수를 사용했기에 초기화가 보장된다고 가정
    }
}

const routeStack = new RouteStack();
console.log(routeStack);
