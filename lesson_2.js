/**
 * loop through an array and print each value to the console
 *
 * Array method: .forEach()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * expected result: 1 2 3 4 5 6 7 8 9 10
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach((element) => console.log(element));

/**
 * loop through an array and print: value and index to the console as one string (see line #19)
 *
 * Array method: .forEach()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * Template literals ``
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 * array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * expected result:
 *  value: 1, index: 0
 *  value: 2, index: 1
 *  value: 3, index: 2
 *  value: 4, index: 3
 *  value: 5, index: 4
 *  value: 6, index: 5
 *  value: 7, index: 6
 *  value: 8, index: 7
 *  value: 9, index: 8
 *  value: 10, index: 9
 */

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.forEach((element, index) =>
  console.log(`value: ${element}, index: ${index}`)
);

/**
 * loop through an array and add every value to an empty array, then print new array to the console
 *
 * Array method: .forEach()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 *
 * Array method: .push()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 *
 * array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */

const newArray = [];
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr3.forEach((element) => newArray.push(element));
console.log(newArray);
