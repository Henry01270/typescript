/**
 * Required Type
 * 
 * property를 필수적으로 만들때 사용.
 */
interface Dog {
    name: string;
    age?: number;
    country?: string;
}

const requiredDog: Required<Dog> = {
// Required는 모든 property를 전부 입력해주어야함.
    name: '모찌',
    age: 7,
    country: '한국',
}