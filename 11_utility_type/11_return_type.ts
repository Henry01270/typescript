/**
 * Return Type
 */
type ReturnTypeSample = ReturnType<() => string>;
// 선언한 type의 값을 () => type으로 바꾼다.

type FunctionSign = (x: number, y: number) => number;
// x, y는 number type이고 number type을 반환한다.

type ReturnType2 = ReturnType<FunctionSign>;
// FuctionSign의 반환값이 number이므로 ReturnType2의 type은 number