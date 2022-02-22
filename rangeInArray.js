function rangeInArray(arr, start, end) {
  let sum = 0;

  if (start === undefined && end === undefined) {
    return arr.reduce((a, b) => a + b);
  } else if (end === undefined) {
    for (let i = start; i < arr.length; i++) {
      sum += arr[i];
    }
  } else if (end > arr.length) {
    for (let i = start; i < arr.length; i++) {
      sum += arr[i];
    }
  } else {
    for (let i = start; i <= end; i++) {
      sum += arr[i];
    }
  }
  return sum
};
