/**
 * sort alphabetically; add index to each country; print the result
 *
 * Array method: .sort()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 * Array method: .map()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 *
 * europeanCountries = [
 *  "Greece", "Belgium",
 *  "Croatia", "Cyprus",
 *  "Ireland", "Estonia",
 *  "France", "Czech Republic",
 *  "Germany", "Finland",
 *  "Bulgaria", "Italy",
 *  "Denmark", "Austria",
 *  "Latvia", "Hungary",
 *  "Malta", "Lithuania",
 *  "Spain", "Sweden",
 *  "Luxembourg", "Portugal",
 *  "Romania ", "Slovakia",
 *  "Poland", "Netherlands",
 *  "Slovenia"
 * ]
 *
 * expected result:
 * [
 *  '1. Austria',    '2. Belgium',
 *  '3. Bulgaria',   '4. Croatia',
 *  '5. Cyprus',     '6. Czech Republic',
 *  '7. Denmark',    '8. Estonia',
 *  '9. Finland',    '10. France',
 *  '11. Germany',   '12. Greece',
 *  '13. Hungary',   '14. Ireland',
 *  '15. Italy',     '16. Latvia',
 *  '17. Lithuania', '18. Luxembourg',
 *  '19. Malta',     '20. Netherlands',
 *  '21. Poland',    '22. Portugal',
 *  '23. Romania ',  '24. Slovakia',
 *  '25. Slovenia',  '26. Spain',
 *  '27. Sweden'
 * ]
 */

// your solution...
const europeanCountries = [
  "Greece",
  "Belgium",
  "Croatia",
  "Cyprus",
  "Ireland",
  "Estonia",
  "France",
  "Czech Republic",
  "Germany",
  "Finland",
  "Bulgaria",
  "Italy",
  "Denmark",
  "Austria",
  "Latvia",
  "Hungary",
  "Malta",
  "Lithuania",
  "Spain",
  "Sweden",
  "Luxembourg",
  "Portugal",
  "Romania ",
  "Slovakia",
  "Poland",
  "Netherlands",
  "Slovenia",
];
const $sort = europeanCountries.sort().map((x, y) => y + 1 + ". " + x);
console.log($sort);
/**
 * sum all prices into total amount; round it to 2 digits after the dot
 *
 * Array method: .reduce()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * Number method: .toFixed()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
 *
 * prices: [79.99, 13.99, 4.50, 7.25]
 * expected: '105.73'
 */

// your solution...
const prices = [79.99, 13.99, 4.5, 7.25];
const x = prices.reduce((accum, item) => {
  accum += item;
  return accum;
});
console.log(x.toFixed(2));
/**
 * find country with the shortest name; find country with the longest name
 *
 * Array method: .reduce()
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 *
 * someEUCountries = [
 *  "Austria", "Belgium",
 *  "Ireland", "Estonia",
 *  "Denmark", "Greece",
 *  "Luxembourg", "Portugal",
 *  "Netherlands", "Slovakia",
 *  "Poland", "Romania"
 * ]
 *
 * expected result:
 *  Greece
 *  Netherlands
 */
// your solution...
const someEUCountries = [
  "Austria",
  "Belgium",
  "Ireland",
  "Estonia",
  "Denmark",
  "Greece",
  "Luxembourg",
  "Portugal",
  "Netherlands",
  "Slovakia",
  "Poland",
  "Romania",
];
const biggest = someEUCountries.reduce((prev, item) => {
  if (prev.length < item.length) {
    return item;
  } else {
    return prev;
  }
});
const smallest = someEUCountries.reduce((prev, item) => {
  if (prev.length > item.length) {
    return item;
  } else {
    return prev;
  }
});
console.log(smallest);
console.log(biggest);
