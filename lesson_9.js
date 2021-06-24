/**
 * get amount of animals in "zoo"
 *
 * const zoo = {
 *  lion: "Alex",
 *  zebra: "Marty",
 *  hipo: "Gloria",
 *  giraffe: "Melman",
 * };
 *
 * expected: 4
 */

// your solution...
const zoo = {
  lion: "Alex",
  zebra: "Marty",
  hipo: "Gloria",
  giraffe: "Melman",
};
const size = Object.keys(zoo).length;
console.log(size);
/**
 * map "family" object to an array of strings
 *
 * const family = {
 *  father: { name: "John", age: 39 },
 *  mother: { name: "Mary", age: 38 },
 *  son: { name: "Philip", age: 12 },
 *  daughter: { name: "Ann", age: 10 },
 * };
 *
 * expected: [
 *  'father John is of age 39',
 *  'mother Mary is of age 38',
 *  'son Philip is of age 12',
 *  'daughter Ann is of age 10'
 * ]
 */

// your solution...

const family = {
  father: { name: "John", age: 39 },
  mother: { name: "Mary", age: 38 },
  son: { name: "Philip", age: 12 },
  daughter: { name: "Ann", age: 10 },
};

const keys = Object.keys(family); // ['father', 'mother', 'son', 'daughter']
const mapped = keys.map((key) => {
  const member = family[key]; // { name: "John", age: 39 }
  return member.name;
});

/**
 * write a program that prints the numbers from 1 to 100
 * for multiples of three print “Fizz” instead of the number
 * for the multiples of five print “Buzz”
 * for numbers which are multiples of both three and five print “FizzBuzz”
 */

// your solution...

for (i = 0; i <= 15; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    continue;
  }

  if (i % 3 == 0) {
    console.log("fizz");
    continue;
  }

  if (i % 5 == 0) {
    console.log("buzz");
    continue;
  }

  console.log(i);
}
