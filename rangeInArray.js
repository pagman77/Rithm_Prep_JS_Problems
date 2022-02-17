function rangeInArray(arr, start, end){
  let sum = 0;

  if (end > arr.length -1){
    end = arr.length-1
  }

  for (let i = start; i <= end; i++){
      sum += arr[i]
  }
  return sum
}