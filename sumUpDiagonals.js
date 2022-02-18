function sumUpDiagonals(arr) {
  let sum = 0;
  let min = 0;
  let max = arr[0].length - 1;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i][min] + arr[i][max];
    min++;
    max--;
  }
  return sum;
}