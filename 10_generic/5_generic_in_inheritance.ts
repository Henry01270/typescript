/**
 * Generic in Inheritance
 */

class BaseCache<T>{
    data: T[] = [];
}

class StringCache extends BaseCache<string>{}

const stringCache = new StringCache();
stringCache.data;

class GenericChild<T, Message> extends BaseCache<T>{
    message?: Message;

    constructor(message?: Message) {
        super();
        this.message = message;
    }
}

const genericChild = new GenericChild<string, string>('error');
genericChild.data;
genericChild.message;


/**
 * Generic의 inheritance
 */
interface BaseGeneric {
    name: string;
}

class Idol<T extends BaseGeneric> {
    // generic을 extends하면,
    // BaseGeneric에 name property가 있는 형태를 무조건 따라야 한다.

    information: T;

    constructor(information: T) {
        this.information = information;
    }
}

const yujin = new Idol({
    // name property을 지우면 err가 난다.
    // > 구조를 강조할 수 있다.
    name: '안유진',
    age: 23,
});


/**
 * keyof 함께 사용하기
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */
const testObj = {
    a: 1,
    b: 2,
    c: 3,
}

function objectParser<O, K extends keyof O>(obj: O, key: K) {
    // K는 O라는 객체의 key값들의 union을 포함하는 구조로 강조한다는 뜻이다.
    // K는 무조건 a, b, c가 되어야 한다.
    return obj[key];
}

const val = objectParser(testObj, 'a');



/**
 * Ternary
 * 1 === 2 ? true : false
 */
class Idol2 {
    type?: string;
}
class FemaleIdol extends Idol2 {
    type: 'Female Idol' = 'Female Idol';
}
class MaleIdol extends Idol2 {
    type: 'Male Idol' = 'Male Idol';
}
type SpecificIdol<T extends Idol2> = T extends MaleIdol ? 
    MaleIdol : FemaleIdol;
// Idol2를 extends한 T generic에서
// T가 MaleIdol을 extends하면 MaleIdol, 아니면 FemaleIdol을 반환.

// 사용법
const idol2: SpecificIdol<FemaleIdol> = new FemaleIdol();
// idol2가 SpecificIdol type의 Ternary를 거쳐 맞는 Idol type반환