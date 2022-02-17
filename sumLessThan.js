function sumLessThan (arr, num){
  arr = arr.filter(x => x < num)
    if (arr.length === 0){
      return 0
    }
      return arr.reduce((a, b) => a + b)
}