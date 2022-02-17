function greatestCommonDivisor(num1, num2){
  let max = Math.max(num1, num2)

  while (max > 0){
    if (num1 % max === 0 && num2 % max === 0){
      return max
    }
    max--
  }
}

//find largest of two numbers
//divide both numbers by largest number and count backwards
//first match is solution!