function drop(arr, num) {
  let newArr = [];

  if (num > arr.length) {
    return newArr;
  }
  if (num === undefined) {
    for (let i = 1; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
  } else {
    for (let i = num; i < arr.length; i++) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};