/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;
// string과 number를 동시에 충족할 수 없기에 never type 반환 

type PersonType = {
    name: string;
    age: number;
}

type CompanyType = {
    company: string;
    companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & CompanyType;

const jisoo: PersonAndCompany = {
    name: '지수',
    age: 32, 
    company: 'YG',
    companyRegistrationNumber: 'xyzabc',
}


// intersection과 union을 섞을 수 있다.
type PetType = {
    petName: string;
    petAge: number;
}

type CompanyOrPet = PersonType & (CompanyType | PetType);

const companyOrPet: CompanyOrPet = {
    // PersonType
    name: '코드팩토리',
    age: 32,

    // CompanyType
    company: '주식회사 코드팩토리',
    companyRegistrationNumber: 'xxxyyyzzz',

    // PetType
    petName: '오리',
    petAge: 10,

    // PersonType은 필수, 
    // CompanyType과 PetType은 둘중 하나만 넣어도 가능
}