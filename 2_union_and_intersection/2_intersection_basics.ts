/**
 * Intersection
 * 
 * Union이 Or의 개념이라면
 * Intersection은 And의 개념
 * 
 * 선언한 프로퍼티를 추가하면
 * 추가한 모든 프로퍼티에 해당하는 값을 입력해주어야함
 */
 interface Human{
    name: string;
    age: number;
 }

 interface Contacts{
    phone: string;
    adress: string;
 }

 type HumanAndContacts = Human & Contacts;

 let humanAndContacts: HumanAndContacts = {
    name: '코드팩토리',
    age: 32,
    phone: '01012341234',
    adress: '서울시',
 };
 

 type NumberAndString = number & string;
 // primitive 타입을 intersection으로 만들어버리면 never 타입으로 변경된다.

 // let numberAndString: NumberAndString = null;
 // => 어떤 값을 넣어도 err