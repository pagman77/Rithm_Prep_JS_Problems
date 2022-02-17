function takeRight(arr, val){
  if (val === undefined){
    return [arr[arr.length-1]]
  }

  if (val > arr.length){
    return [...arr]
  }

  let reversed = arr.reverse();

  return reversed.splice(0, val)

}