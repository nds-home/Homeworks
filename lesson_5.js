/**
 * connect heroes with villains
 *
 * Array method: .concat()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 *
 * heroes: ['Captain America', 'Iron Man', 'Hulk', 'Thor', 'Vision']
 * villains: ['Ultron', 'Thanos', 'Loki']
 * expected result:
 * [
 *  'Captain America',
 *  'Iron Man',
 *  'Hulk',
 *  'Thor',
 *  'Vision',
 *  'Ultron',
 *  'Thanos',
 *  'Loki'
 * ]
 */
const heroes = ["Captain America", "Iron Man", "Hulk", "Thor", "Vision"];
const villains = ["Ultron", "Thanos", "Loki"];
const add = heroes.concat(villains);
console.log(add);

/**
 * check if villain 'Thanos' appeared in film 'Avengers: Infinity War'
 *
 * Array method: .includes()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 *
 * avengersInfinityWarCharacters: ['Iron Man', 'Vision', 'Thor', 'Captain America', 'Thanos', 'Wanda', 'Loki']
 * expected result: true
 */
const checkThanos = [
  "Iron Man",
  "Vision",
  "Thor",
  "Captain America",
  "Thanos",
  "Wanda",
  "Loki",
];
const check = checkThanos.includes("Thanos");
console.log(check);

/**
 * filter characters so it will only have names which include letter 'o'
 *
 * Array method: .filter()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Array method: .includes()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
 *
 * characters: ['Captain America', 'Iron Man', 'Hulk', 'Thor', 'Vision', 'Ultron', 'Thanos', 'Loki']
 * expected result: ['Iron Man', 'Thor', 'Vision', 'Ultron', 'Thanos', 'Loki']
 */
const $heroes = [
  "Captain America",
  "Iron Man",
  "Hulk",
  "Thor",
  "Vision",
  "Ultron",
  "Thanos",
  "Loki",
];
const a = (name) => {
  return $heroes.filter((data) => {
    return data.toLowerCase().includes("o");
  });
};
console.log(a("o"));

/**
 * modify every character's name to make it lower case
 *
 * Array method: .map()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * String method: .toLowerCase()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
 *
 * upperCaseCharacters: ['CAPTAIN AMERICA', 'IRON MAN', 'HULK', 'THOR', 'VISION', 'ULTRON', 'THANOS', 'LOKI']
 * expected result: ['captain america', 'iron man', 'hulk', 'thor', 'vision', 'ultron', 'thanos', 'loki']
 */

const upperCaseCharacters = [
  "CAPTAIN AMERICA",
  "IRON MAN",
  "HULK",
  "THOR",
  "VISION",
  "ULTRON",
  "THANOS",
  "LOKI",
];
console.log(upperCaseCharacters.map((x) => x.toLowerCase()));
