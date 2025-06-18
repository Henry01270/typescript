/**
 * Object Union
 */

/**
 * 유추된 객체 타입 유니언
 */
const dogOrCat = Math.random() > 0.5 ? {
    // 강아지 타입 반환
    name: '별이',
    age: 12,
} : {
    // 고양이 타입 반환
    name: '오리',
    breed: '코리안 길냥이',
}

dogOrCat.name;
// name은 항상 string이다.
dogOrCat.age;
// number 또는 undefined이다.

/**
 * 강아지 타입에서는 age, 고양이 타입에서는 breed만 변환되어야하는데
 * TS에서는 property의 값을 옵셔널로 지정해버린다.
 * 이를 해결하기 위해선,
 */
interface Dog {
    name: string;
    age: number;
}
interface Cat {
    name: string;
    breed: string;
}

type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? {
// 위와 같은 방식으로 선언하여 union type을 직접 지정하여
// 원하지 않는 방향으로 narrowing 되는것을 방지한다.
    name: '별이',
    age: 12,
} : {
    name: '오리',
    breed: '코리안 길냥이',
}

dogOrCat2.name;
// string 반환

// dogOrCat2.age;
// age는 Cat에 존재하지 않으므로 위 값이 Cat일수도 있기에 err

// dogOrCat2.breed;
// 위 property도 마찬가지


// property를 확인하는 법 (if문 활용)
if('age' in dogOrCat2) {
    dogOrCat2;
    // Dog type
    dogOrCat2.age;
    dogOrCat2.name;
} else {
    dogOrCat2;
    // Cat type
    dogOrCat2.name;
    dogOrCat2.breed;
}