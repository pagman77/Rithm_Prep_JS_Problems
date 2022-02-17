function zip(){
  let bigArr = []
  for (let arr of arguments){
      let littleArr = []
    for (let i = 0; i < arr.length; i++){
        littleArr.push(arr[i])
    }
  }
}