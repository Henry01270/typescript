/**
 * Type vs Interface
 * 
 * Type이 할수 없는 작업을 위해 Interface 탄생
 */


interface IObject{
    x: number;
    y: number;
}

type TObject = {
    x: number;
    y:number;
}

// function을 선언할때
interface IFunction {
    (x: number, y: number) : number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * Interface에서는 할 수 없는 것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;
// interface로 union 타입 선언하기 위해서는
// interface IObject { x: number | string }
// 이렇게 내부에서 선언해야한다.

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];
// interface로 구현하기 위해선
// union타입과 이하동문

/**
 * Interface는 할 수 있고
 * Type은 못하는 것
 */

// interface merging
// interface 중복 선언으로 프로퍼티 중첩가능
interface IRectangle{
    height: number;
}

interface IRectangle{
    width: number;
}

let retangle: IRectangle = {
    height: 200,
    width: 100,
}

/**
 * Interface Merging
 */
class Review {
    // 프로퍼티 (인스턴스 귀속)
    getY = (x: number) => {return x};
    // 프로퍼티 값은 함수로 선언할 수도 있음
    
    // 메서드 (프로퍼티 귀속)
    getX(x: number){
        return x;
    }
}

interface GetXnY{
    getX: (x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY{
    getX: (x: number) => number;
    // getY: (y: string) => number; > err 프로퍼티는 오버로딩이 안됨.
}


interface GetXnY2 {
    getX(x: number): number;
    getY(y: number): number;
}

interface GetXnY2 {
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod: GetXnY2 = {
    getX(x) {
        return x;
    },
    getY(y) {
        return 1;
        // return y;
        // y는 string, number type 모두 가능한데 반환값은 string임
        // y가 string으로 반환될 수도 있기에 err
    },
}