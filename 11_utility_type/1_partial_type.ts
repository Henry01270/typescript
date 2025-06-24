/**
 * Partial Type
 * 
 * 가장 많이 쓰는 타입중 하나
 */
interface Idol {
    name: string;
    age: number;
    groupName: string;
}

const yuJin: Idol = {
    name: '안유진',
    age: 23,
    groupName: '아이브',
}

// 서버에서 데이터베이스에 모델 업데이트할때 많이 씀
function updateIdol(original: Idol, updates: Partial<Idol>): Idol {
// (Partial)
// type안에 있는 property중 일부분만 선택해서 사용가능하게 함.
    return {
        ...original,
        ...updates,
    }
}

console.log(updateIdol(yuJin, {
    age: 27,
    // 부분적으로 property를 선택하여 변경함.
}));