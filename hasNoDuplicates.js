function hasNoDuplicates(arr){
  return arr.sort().every((x,i) => x !== arr[i+1])
}