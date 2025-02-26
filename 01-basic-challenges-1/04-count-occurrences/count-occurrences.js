function countOccurrences(str, char) {
  let results = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(char)) {
      results++;
    }
  }
  return results;
}

module.exports = countOccurrences;
