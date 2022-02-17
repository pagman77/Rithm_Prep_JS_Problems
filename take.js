function take(arr, val) {

  let arr1 = [];

  if (val === undefined) {
    arr1.push(arr[0]);

  } else if (val > arr.length - 1) {
    arr.map(x => arr1.push(x));

  } else {
    for (let i = 0; i < val; i++) {
      arr1.push(arr[i]);
    }
  }

  return arr1;
}