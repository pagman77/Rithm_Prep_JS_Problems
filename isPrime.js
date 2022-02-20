function isPrime(num){
  let count = 2

  while (count < num-1){
    if (num % count === 0){
      return false
    }
    count ++
  }
  return true
}