/**
 * Visibility Keyword
 * 
 * 1) public (기본값) - 어디서든 접근이 가능하다.
 * 2) protected - 현재 클래스 및 하위(자식) 클래스에서 접근 가능하다.
 * 3) private - 현재 클래스 내부에서만 접근 가능하다.
 */
class PropertyTestParent {
    public publicProperty = 'public property';
    protected protectedProperty = 'public property';
    private privateProperty = 'public property';


    #jsPrivateProperty = 'js private property';
    // 자바 스크립트에 존재하는 문법

    test() {
        this.publicProperty;
        this.protectedProperty;
        this.privateProperty;
        this.#jsPrivateProperty;
    }
}


class PropertyTestChild extends PropertyTestParent {
    test() {
        this.publicProperty;
        this.protectedProperty;
        // this.privateProperty; > err
        // this.#jsPrivateProperty; > err
    }
}


const instance = new PropertyTestChild();

instance.publicProperty;
instance.test();
// 나머진 불러오기가 안됨.