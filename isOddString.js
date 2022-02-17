function isOddString(str){
  let sum = 0;
  let alpha = "1abcdefghijklmnopqrstuvwxyz"

  for (let char of str){
    sum += alpha.indexOf(char)
  }
  return !(sum % 2 === 0)
}