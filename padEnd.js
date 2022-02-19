function padEnd(str, num, pad){

if (num < str.length){
  return str
}
let padAmount = num - str.length

if (pad !== undefined){
  while(padAmount > 0)
    for (let char of pad){
      if(padAmount === 0){
        break
      }
      str += char
      padAmount--
    }


}else{
    while (padAmount > 0){
    str += " ";
    padAmount--
    }
  }
    return str
}