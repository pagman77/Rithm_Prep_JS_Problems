function zipObject(keys, values){
  let obj = {};

  for (let i = 0; i < keys.length; i++){
    obj[keys[i]] = values[i]
  }
  return obj
}