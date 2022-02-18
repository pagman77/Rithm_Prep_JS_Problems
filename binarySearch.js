function binarySearch(arr, val) {
  let min = 1;
  let max = arr.length - 1;
  let average = Math.floor((max + min) / 2)

  while (max >= 0 && min <= arr.length - 1) {
    if (arr[average] === val) {
      return average;
    }else if (arr[average] < val) {
      min = average + 1;
    }else {
      max = average - 1;
    }
    average = Math.floor((max + min) / 2)
  }
  return -1
}
