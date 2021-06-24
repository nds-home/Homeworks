/**
 * filter array in a way so it has numbers only greater than 4
 *
 * Array method: .filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * expected result: [5, 6, 7, 8, 9]
 */
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let a = arr.filter((element) => element > 4);
console.log(a);
/**
 * filter array in a way so it has only odd numbers
 *
 * Array method: .filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * expected result: [1, 3, 5, 7, 9]
 */
let arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr1.filter((element) => element % 2 == 1));
/**
 * filter array in a way so it has only even numbers
 *
 * Array method: .filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * expected result: [0, 2, 4, 6, 8]
 */
let arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr2.filter((element) => element % 2 == 0));
/**
 * filter array in a way so it has only even numbers, then map array and multiply every value by 5
 *
 * Array method: .filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Array method: .map()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * array: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * expected result: [0, 10, 20, 30, 40]
 */
let arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let c = arr3.filter((element) => element % 2 == 0).map((elem) => elem * 5);
console.log(c);
