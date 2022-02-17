function omit(obj, arr){
  for (let key of arr){
    if (obj[key] !== undefined){
      delete obj[key]
    }
  }
  return obj
}