function filterByKey(arr, key){
  let sorted = []

  for (let obj of arr){
    if (obj[key] !== undefined){
      sorted.push(obj)
    }
  }
  return sorted
}