function reverseVowels(str) {
  let vowels = "aeiou";
  let strVowels = [];
  let reversed = "";

  for (let char of str) {
    if (vowels.includes(char)) {
      strVowels.push(char);
    }
  }

  for (let char of str) {
    if (!vowels.includes(char)) {
      reversed += char;
    } else {
      reversed += strVowels.pop();
    }
  }

  return reversed;
}
