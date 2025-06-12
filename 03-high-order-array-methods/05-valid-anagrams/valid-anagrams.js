function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;

  const charCount = (arr) =>
    arr.reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});

  const freq1 = charCount([...str1]);
  const freq2 = charCount([...str2]);

  for (let char in freq1) {
    if (freq1[char] !== freq2[char]) return false;
  }

  return true;
}

module.exports = validAnagrams;
