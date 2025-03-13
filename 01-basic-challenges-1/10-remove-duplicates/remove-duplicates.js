function removeDuplicates(arr) {
  let set = new Set(arr);

  let arr1 = [...set];

  return arr1;
}

module.exports = removeDuplicates;
