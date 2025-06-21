/**
 * Abstract class
 * 
 *  추상클래스: 인스턴스화를 하지 못하게 함
 */

abstract class ModelWithId{
    id: number;

    constructor(id: number) {
        this.id = id;
    }
}

// const ModelWithId = new ModelWithId(123);
// > err abstract class는 집적적인 선언이 불가능하다.

class Product extends ModelWithId {
    // Product는 ModelWithId의 모든 property들을 상속받을 수 있다.
}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod {
    abstract shout(name: string): string;
    // abstract는 class에만 한정되지 않는다.
}

class Person extends ModelWithAbstractMethod {
    shout(name: string): string {
        // shout치고 enter키를 누르면 자동완성됨
        return 'shout';
    }
}