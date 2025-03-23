function findMissingLetter(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    // Compare the ASCII values of consecutive characters
    if (arr[i + 1].charCodeAt(0) - arr[i].charCodeAt(0) > 1) {
      // Return the missing letter by incrementing the current letter's ASCII value
      return String.fromCharCode(arr[i].charCodeAt(0) + 1);
    }
  }

  // Return undefined if no letter is missing
  return undefined;
}

module.exports = findMissingLetter;
