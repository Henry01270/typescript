/**
 * Template Literal
 * 
 * string type을 조작할 때 사용
 */

type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;
// Upper로 변환

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>
// string의 첫번째 글자만 대문자로 만듬

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>

// utility type중 partial, required, readonly, pick, omit, exclude, extract을 주로 사용함.