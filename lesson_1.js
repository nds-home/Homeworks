/**
 * sort numbers in ascending order | use Array method: .sort()
 *
 * array of numbers: [1, 3, 5, 9, 0, 2, 4, 6, 8, 7]
 * expected result: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

const arr = [1, 3, 5, 9, 0, 2, 4, 6, 8, 7];
arr.sort();
const sort = "method .sort";
console.log(arr, sort);

/**
 * sort numbers in descending order | use Array method: .sort()
 *
 * array of numbers: [1, 3, 5, 9, 0, 2, 4, 6, 8, 7]
 * expected result: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
 */

const arr2 = [1, 3, 5, 9, 0, 2, 4, 6, 8, 7];
arr2.sort((a, b) => b - a);
const sort2 = "method .sort2";
console.log(arr2, sort2);

/**
 * increase every value by 1 | use Array method: .map()
 *
 * array of numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const incr = arr3.map((x) => x + 1);
const incrByOne = "method .map";
console.log(incr, incrByOne);

/**
 * rewrite every value to 0 | use Array method: .map()
 *
 * array of numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
 * expected result: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 */

const arr4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const null_X = "method .map x 0";
const $null = arr4.map((u) => 0);
console.log($null, null_X);
