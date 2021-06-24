/**
 * create arrow function "greet" which receives 1 parameter: "name"
 * and says "Hello" to this name
 *
 * name = "John Smith"
 * expected: "Hello, John Smith"
 */

// your solution...

let greet = (name) => {
  console.log("Hello,", name);
};
greet("John Smith");
/**
 * create arrow function which receives 1 parameter: "age"
 * based on parameter received, function needs either to allow or forbid
 *
 * expected:
 *  if "age" is less than 18, return "ACCESS FORBIDDEN"
 *  if "age" is 18 or more, return "ACCESS ALLOWED"
 *  if "age" is not a number, return "PLEASE PROVIDE A NUMBER VALUE"
 */

// your solution...

const getAge = (age) => {
  if (age < 18) {
    console.log("ACCESS FORBIDDEN");
  } else if (age >= 18) {
    console.log("ACCESS ALLOWED");
  } else if (isNaN(age)) {
    console.log("PLEASE PROVIDE A NUMBER VALUE");
  }
};
getAge(18);

/**
 * create arrow function which receives 1 parameter: "age"
 * based on parameter received, function needs to return age category
 *
 * expected:
 *  if "age" is less than 0.2 months, return "NEWBORN"
 *  if "age" is from 0.2 months to 1 year, return "INFANT"
 *  if "age" is from 1 to 4 years, return "TODDLER"
 *  if "age" is not a number, return "PLEASE PROVIDE A NUMBER VALUE"
 */

// your solution...
const getAgeChild = (age) => {
  if (age < 0.2) {
    console.log("NEWBORN");
  } else if (age >= 0.2 && age < 1) {
    console.log("INFANT");
  } else if (age >= 1 && age < 4) {
    console.log("TODDLER");
  } else if (isNaN(age)) {
    console.log("PLEASE PROVIDE A NUMBER VALUE");
  }
};
getAgeChild(0.2);
