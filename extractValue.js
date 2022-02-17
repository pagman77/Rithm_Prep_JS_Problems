function extractValue(arr, key){
  let values = [];

  for (let obj of arr){
    if (obj[key] !== undefined){
      values.push(obj[key])
    }
  }
  return values
}