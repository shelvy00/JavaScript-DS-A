function formatPhoneNumber(num) {
  // Remove any non-digit characters
  const cleaned = ("" + num).replace(/\D/g, "");

  // Check if it has exactly 10 digits
  if (cleaned.length !== 10) {
    return "Invalid phone number";
  }

  // Format and return (123) 456-7890
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }

  return "Invalid phone number";
}

module.exports = formatPhoneNumber;
