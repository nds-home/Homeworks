/**
 * log to the console: first, third and last fruit
 *
 * array: ['grape', 'orange', 'apple', 'pear', 'cherry']
 * expected result: grape apple cherry
 */

const arr = ["grape", "orange", "apple", "pear", "cherry"];
console.log(`${arr[0]} ${arr[2]} ${arr[arr.length - 1]}`);

/**
 * remove cherry from the array, log updated array to the console
 *
 * array: ['grape', 'orange', 'apple', 'pear', 'cherry']
 * expected result: grape orange apple pear
 */

const arr1 = ["grape", "orange", "apple", "pear", "cherry"];
arr1.pop();
console.log(arr1);

/**
 * remove grape from the array, log updated array to the console
 *
 * array: ['grape', 'orange', 'apple', 'pear', 'cherry']
 * expected result: orange apple pear cherry
 */

const arr2 = ["grape", "orange", "apple", "pear", "cherry"];
arr2.shift();
console.log(arr2);

/**
 * add watermelon to the beginning of the array, log updated array to the console
 *
 * array: ['grape', 'orange', 'apple', 'pear', 'cherry']
 * expected result: watermelon grape orange apple pear cherry
 */

const arr3 = ["grape", "orange", "apple", "pear", "cherry"];
arr3.unshift("watermelon");
console.log(arr3);

/**
 * find and log to the console the index of pear
 *
 * array: ['grape', 'orange', 'apple', 'pear', 'cherry']
 * expected result: 3
 */

const arr4 = ["grape", "orange", "apple", "pear", "cherry"];
indexPear = arr4.indexOf("pear");
console.log(indexPear);

/**
 * remove orange from the array and print orange and updated array to the console
 *
 * array: ['grape', 'orange', 'apple', 'pear', 'cherry']
 * expected result:
 * orange
 * grape apple pear cherry
 */

const arr5 = ["grape", "orange", "apple", "pear", "cherry"];
const remove = arr5.indexOf("orange");
const a = arr5.splice(remove, 1);
console.log("a = ", a);
console.log("add = ", arr5);
