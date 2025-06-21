/**
 * Interface
 */
interface Animal {
    name: string;
    age: number;
    jump(): string;
}

// implements 받기 위해선 같은 property를 모두 선언해주어야 한다.
class Dog implements Animal {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    
    }
}

let ori: any = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal{
    return 'jump' in object;
}

if(instanceOfAnimal(ori)) {
    ori;
}


/**
 * 다중 인터페이스 구현
 */

interface Pet{
    legsCount: number;
    bark(): void
}

class Cat implements Animal, Pet{
    // Animal
    name: string;
    age: number;

    // pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    bark(): void {
        console.log('냐옹');
    }
}

// 위와 같은 방식으로
type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet {
    // Animal
    name: string;
    age: number;

    // pet
    legsCount: number;

    constructor(name: string, age: number, legsCount: number) {
        this.name = name;
        this.age = age;
        this.legsCount = legsCount;
    }

    jump(): string {
        return `${this.name}이 점프를 합니다.`;
    }

    bark(): void {
        console.log('냐옹');
    }
}



interface WrongInterface1 {
    name: string;
}

interface WrongInterface2 {
    name: number;
}

// class Person implements WrongInterface1, WrongInterface2 {
//     인터페이스의 중복되는 프로퍼티가 없는지 확인해야한다.
//     name: string; err
// }


// constructor가 있는 정의를 interface로 만드는법!!
//
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;

    }
}
// constructor의 형태를 type와 하는법
interface IdolCostructor {
    new (name: string, age: number): Idol;
}

// 사용법
function createIdol(constructor: IdolCostructor, name: string, age: number) {
    return new constructor(name, age);
    // return new Idol(name, age);와 같다.
}

console.log(createIdol(Idol, '아이유', 32));