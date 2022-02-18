function twoArrayDifference(arr1, arr2){
  let unique = [];

  for (let num of arr1){
    if (!arr2.includes(num)){
      unique.push(num)
    }
  }
  return unique
}