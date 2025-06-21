/**
 * readonly property
 */
class Idol {
    readonly name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const yuJin = new Idol('안유진', 23);

yuJin.age = 32;
// 프로퍼티 변경가능
// yuJin.name = '코드팩토리';
// 불러오는건 가능하지만 값 변경은 불가능