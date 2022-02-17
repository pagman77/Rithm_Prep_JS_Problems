function vowelCount(str) {
  let vowels = "aeiou";
  let obj = {};

  for (let char of str) {
    char = char.toLowerCase();
    if (vowels.includes(char) && obj[char] === undefined) {
      obj[char] = 1;
    } else if (vowels.includes(char)) {
      obj[char]++;
    }
  }
  return obj;
};