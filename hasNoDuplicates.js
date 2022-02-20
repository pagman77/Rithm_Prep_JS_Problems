function hasNoDuplicates(arr){
  return arr.sort().some((x,i) => x !== arr[i+1])
}