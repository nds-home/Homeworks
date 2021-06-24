/**
 * create property "color" for a car object
 *
 * car = { doors: 5, wheels: 4 }
 * expected: { doors: 5, wheels: 4, color: 'white' }
 */

// your solution...
car = {
  doors: 5,
  wheels: 4,
};
car.color = "white";
console.log(car);

/**
 * get property "wings" from a plane object
 *
 * plane = { wings: 2, color: 'white' }
 * expected: 2
 */

// your solution...
plane = {
  wings: 2,
  color: "white",
};
const expected = plane.wings;
console.log(expected);

/**
 * update property "material" for a boat object
 *
 * boat = { material: 'rubber', length: '190cm', width: '100cm' }
 * expected: { material: 'wood', length: '190cm', width: '100cm' }
 */

// your solution...
boat = {
  material: "rubber",
  length: "190cm",
  width: "100cm",
};
boat.material = "wood";
console.log(boat);

/**
 * delete property "price" from a motorcycle object
 *
 * motorcycle = { wheels: 2, color: 'black', price: '$1000' }
 * expected: { wheels: 2, color: 'black' }
 */

// your solution...
motorcycle = {
  wheels: 2,
  color: "black",
  price: "$1000",
};
delete motorcycle.price;
console.log(motorcycle);
