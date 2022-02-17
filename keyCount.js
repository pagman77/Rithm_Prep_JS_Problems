function keyCount(arr){
  let keys = {};

  for (let obj of arr){
    for (let key in obj){
      if (keys[key] === undefined){
        keys[key] = 1
      }else{
        keys[key] += 1
      }
    }
  }
  return keys
}