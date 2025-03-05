function titleCase(str) {
  return str
    .toLowerCase() // Ensure the string is in lowercase first
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a string
}

module.exports = titleCase;
