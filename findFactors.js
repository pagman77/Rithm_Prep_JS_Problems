function findFactors(num){
  let divisor = 1;
  let factors = [];

  while (divisor <= num){
    if(num % divisor === 0){
      factors.push(divisor)
    }
    divisor++
  }
  return factors
}