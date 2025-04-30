const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const doubledNumbers = numbers.map((num) => num * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const evenNumbers = numbers.filter((num) => num > 2);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const addNumbers = numbers.reduce((total, num) => {
  return total + num;
}, 0);
//console.log(addNumbers);
/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
const newArr = numbers.forEach((number) => {
  //console.log(number);
});
/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const findArr = numbers.find((number) => number > 2);
//console.log(findArr);
/**
 * some: Checks if at least one array element satisfies a condition.
 */
const even = (element) => element % 2 === 0;
//console.log(numbers.some(even));
/**
 * every: Checks if all array elements satisfy a condition.
 */
const isBelowThreshold = (currentValue) => currentValue < 40;
console.log(numbers.every(isBelowThreshold));
