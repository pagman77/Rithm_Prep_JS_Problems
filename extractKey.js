function extractKey(arr, str) {
  let values = [];

  for (let obj of arr) {
    for (let key in obj) {
      if (key === str) {
        values.push(obj[key]);
      }
    }
  }
  return values;
}