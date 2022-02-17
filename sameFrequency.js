function sameFrequency(num1, num2){
  //change number to string, split to array, then sort to compare
  num1 = num1.toString().split("").sort();
  num2 = num2.toString().split("").sort();

  //if arrays are not equal length "fail fast"
  if (num1.length !== num2.length){
    return false
  }
  //attempt to fail fast again, exit function as soon as match fails
  for (let i = 0; i < num1.length; i++){
    if (num1[i] !== num2[i]){
      return false
    }
  }
  //if we get here, the arrays must be equal
  return true
}