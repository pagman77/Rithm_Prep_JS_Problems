/*

function mergeSortedArrays(arr1, arr2) {
  let sorted = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]) {
      sorted.push(arr1.shift());
    } else {
      sorted.push(arr2.shift());
    }
  }
  if (arr1.length > 0) {
    while (arr1.length> 0){
      sorted.push(arr1.shift())
    }
  } else {
    while (arr2.length > 0){
      sorted.push(arr2.shift())
    }
  }
  return sorted;
}
*/

function mergeSortedArrays(arr1, arr2) {
  let sorted = [];
  let index1 = 0
  let index2 = 0
  let current = 0

  while (current < arr1.length + arr2.length){
    if (arr1[index1] < arr2[index2] && arr1[index1] !== undefined || index2 > arr2.length - 1){
      sorted.push(arr1[index1])
      index1++
    }else{
      sorted.push(arr2[index2])
      index2++
    }
    current++
  }


  return sorted
}