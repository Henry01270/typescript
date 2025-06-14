/**
 * Multi Dimension Array
 */
/**
 * 1D : [1, 2, 3]
 * 
 * 2D : 
 * [
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ]
 * 
 * 3D
 * [
 *  [
 *    [1, 2, 3],
 *  ]
 * ]
 */

const numb2DArr: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
]
const str2DArr = [
    ['1', '2', '3'],
    ['4', '5', '6'],
]
// string[][]로 유추

const strAndNumberArr: (string | number)[][] = [
    [1, 2, '3'],
    [4, '5', '6'],
]

const strArrOrNumArr: string[][] | number[][] = [
    [1, 2, 3],
    [4, 5, 6],
]
strArrOrNumArr = [
    ['1', '2', '3'],
    ['4', '5', '6'],
]

// type narrowing 확인
for (let arr of numb2DArr) {
    // arr: number[]
    for (let item of arr) {
    // item: number

    }
}