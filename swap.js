function swap(arr, idx1, idx2){
  let val1 = arr[idx1]
  let val2 = arr[idx2]

  arr.splice(idx1, 1, val2);
  arr.splice(idx2, 1, val1);

  return arr
}