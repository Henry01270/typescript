/**
 * Spread Operator
 */
const onlyString = ['1', '2', '3', '4'];
const onlyNumbers = [1, 2, 3, 4];

const arr1 = [
    ...onlyString,
]
// arr1 type을 string[]으로 유추

const arr2 = [
    ...onlyString,
    ...onlyNumbers,
]
// arr2 type을 (string | number)[]로 유추