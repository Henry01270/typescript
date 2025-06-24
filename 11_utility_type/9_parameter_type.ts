/**
 * Parameter Type
 * 
 * 파라미터를 만들 수 있다.
 */
function sampleFunction(x: number, y: string, z: boolean) {

}

type Params = Parameters<typeof sampleFunction>;
// sampleFunction을 type화 하여,
// parameter를 type으로 가져온다.

type Prams2 = Parameters<(one: number) => void>;
// 위와 같은 형태로 선언하면,
// one: number라는 하나의 파라미터 리스트가 type으로 인정된다.