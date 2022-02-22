function zip(){
  let zipped = [];
  let count = arguments[0].length
  while(count > 0){
    zipped.push([]);
    count--
  }
  for (let i = 0; i < arguments.length; i++){
    for(let j = 0; j < arguments[0].length; j++){
      zipped[j].push(arguments[i][j])
    }
  }
  return zipped
}