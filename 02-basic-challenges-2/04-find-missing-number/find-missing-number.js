function findMissingNumber(arr) {
  // If the array is empty or undefined, return undefined
  if (!arr || arr.length === 0) {
    return undefined;
  }

  // Length of the array
  const n = arr.length + 1;

  // Calculate the sum of first n natural numbers using the formula: n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the sum of numbers in the array
  const actualSum = arr.reduce((acc, num) => acc + num, 0);

  // The missing number is the difference between the expected sum and actual sum
  return expectedSum - actualSum;
}

module.exports = findMissingNumber;
