/**
 * Extension
 */

interface IName {
    name: string;
}

interface IIdol extends IName {
// IName 클래스를 상속받아 name 프로퍼티를 상속함
    age: number
}

const idol: IIdol = {
    name: '안유진',
    age: 23,
}



type TName = {
    name: string;
}

type TIdol = TName & {
// type은 [type 자식클래스 = 부모클래스 & {}]로 상속
    age: number;
}

const idol2: TIdol = {
    name: '아이유',
    age: 29,
}


// type과 interface는 서로 섞어서 extends가 가능하다.
interface IIdol2 extends TName{
    age: number;
}

const idol3: IIdol2 = {
    name: '제니',
    age: 29,
}


type TIdol2 = IName & {
    age: number;
}

const idol4: TIdol2 = {
    name: '지수',
    age: 31,
}
// interface에서 상속받을땐 extends, type에서 상속받을땐 & 사용


/**
 * extending multiple
 * 
 * type과 interface에서 사용하는 extending은 
 * 여러개를 상속받을 수 있다.
 */
type DogName = {
    name: string;
}
type DogAge = {
    age: number;
}
type DogBreed = {
    breed: string;
}

type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '코드팩토리',
    age: 32,
    breed: 'Poodl',
}


interface CatName{
    name: string;
}
interface CatAge{
    age: number;
}
interface CatBreed{
    breed: string;
}
interface Cat extends CatName, CatAge, CatBreed{}

const cat: Cat = {
    name: '오리',
    age: 7, 
    breed: '코리안 냥냥이',
}

/**
 * Overriding
 */
type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string;
    // height 값을 number에서 string으로 오버라이딩
    width: number;
}

const rectangle: TRectangle = {
    height: ,
    width: 100,
}