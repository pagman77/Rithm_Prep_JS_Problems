function aperture(num, arr){
  if (num > arr.length || num < 1){
    return []
  }

  let bigArray = [];
  let littleArray = [];

  while(arr.length >= num){
    for (let i = 0; i < num; i++){
      littleArray.push(arr[i])
    }
    bigArray.push(littleArray)
    arr.shift()
    littleArray = [];
  }
  return bigArray
}