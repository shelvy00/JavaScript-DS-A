function isPalindrome(str) {
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Reverse the normalized string
  const reversedStr = normalizedStr.split("").reverse().join("");

  // Check if the original normalized string is equal to its reversed version
  return normalizedStr === reversedStr;
}

module.exports = isPalindrome;
