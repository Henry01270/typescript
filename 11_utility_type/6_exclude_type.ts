/**
 * Exclude Type
 * 
 * exclude는 union type을 사용
 */
type NoString = Exclude<string | boolean | number, string>;
// exclude로 string을 제외했으므로 남은 type은 boolean | number

type NoFunction = Exclude<string | (() => void), Function>;
// function을 제외하는 것도 가능하다.