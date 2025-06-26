/**
 * Reflection Metadata
 */
import 'reflect-metadata';

const iu = {
    name: '아이유',
    age: 32,
    nationality: 'korean',
}
console.log(iu);

/**
 * 파라미터의 정의
 * 
 * 1) 메타데이터의 키
 * 2) 메타데이터 키에 저장할 값
 * 3) 메타데이터를 저장할 객체
 * 4) 메타데이터를 저장할 객체의 프로퍼티
 * 
 * 4번은 필수가 아니다.(프로퍼티에도 저장이 가능.)
 * 
 * 메타데이터는? - 데이터에 대한 데이터
 */

Reflect.defineMetadata('test-meta', 123, iu);

console.log(iu);
// metadata는 실제 자바스크립트 코드내에서는 보이지 않는다.
// reflect 라이브러리를 사용해서 볼 수 있다.
console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('test-meta', 456, iu);
console.log(Reflect.getMetadata('test-meta', iu));

Reflect.defineMetadata('meta2', 789, iu);
console.log(Reflect.getMetadata('meta2', iu));
console.log(Reflect.getMetadata('test-meta', iu));
// 오브젝트 처럼 자원관리가 되는 것을 확인할 수 있다.


Reflect.defineMetadata('meta2', {name: '코드팩토리'}, iu);
console.log(Reflect.getMetadata('meta2', iu));
// 객체를 저장하는 것도 가능하다.

/**
 * 프로퍼티에 저장하기
 */
console.log('------------------property---------------');
Reflect.defineMetadata('object-meta', 999, iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));

// 삭제하기
// Reflect.deleteMetadata('object-meta', iu, 'name');
console.log(Reflect.getMetadata('object-meta', iu, 'name'));

// 메타데이터 존재하는지 확인
console.log(Reflect.hasMetadata('object-meta', iu, 'name'));

// 모든 키값 불러오기
console.log(Reflect.getMetadataKeys(iu));
console.log(Reflect.getMetadataKeys(iu, 'name'));

// 자기 자신이 존재하는지만 확인
Reflect.defineMetadata('prototype-data', '프로토타입 메타예요!', Object.getPrototypeOf(iu));
// prototype-data는 iu객체의 부모격인 prototype에 정의함.
console.log(Reflect.getMetadataKeys(iu));
// 그냥 메타데이터 키는 부모 객체까지 검색하여 찾아냄
console.log(Reflect.getOwnMetadataKeys(iu));
// 자기 자신 객체에 존재하는지만 확인