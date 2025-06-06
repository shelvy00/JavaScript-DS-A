function highestScoringWord(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = str.split(" ");

  let highestScore = 0;
  let highestWord = "";

  for (const word of words) {
    const score = [...word.toLowerCase()].reduce((sum, char) => {
      return sum + (alphabet.indexOf(char) + 1);
    }, 0);

    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }

  return highestWord;
}

module.exports = highestScoringWord;
