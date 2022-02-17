function union(){
  let unique = [];

  for (let arr of arguments){
    for (let num of arr){
      if (!unique.includes(num)){
        unique.push(num)
      }
    }
  }
  return unique
}