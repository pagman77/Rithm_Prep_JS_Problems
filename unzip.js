function unzip(arr){
  let sorted = [];
  let count = arr[0].length
  while(count > 0){
    sorted.push([]);
    count--
  }
  for (let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[0].length; j++){
      sorted[j].push(arr[i][j])
    }
  }
  return sorted
};