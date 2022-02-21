function takeRight(arr, val){
  if (val === undefined){
    return [arr[arr.length-1]]
  }

  if (val > arr.length){
    return [...arr]
  }

  let reversed = arr.reverse();
  let trimmed = []

  for (let i = 0; i < val; i++){
    trimmed.push(reversed[i])
  }

  return trimmed.reverse();

}