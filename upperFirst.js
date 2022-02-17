function upperFirst(str){
  if (str === ""){
    return ""
  }
  let seperate = str.split('')
  seperate[0] = seperate[0].toUpperCase();

  return seperate.join("")
}