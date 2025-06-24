/**
 * Extract Type
 * 
 * exclude의 반대개녕
 */
type stringOnly = Extract<string | boolean | number, string>;
// string 값만 추출하였으므로 string값만 남음.


type FunctionOnly = Extract<string | (() => void), Function>;
// function 값만 남음 