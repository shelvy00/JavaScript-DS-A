function areAllCharactersUnique(str) {
  // Create a Set from the string characters
  const charSet = new Set(str);

  // Compare the size of the Set with the length of the string
  return charSet.size === str.length;
}

module.exports = areAllCharactersUnique;
