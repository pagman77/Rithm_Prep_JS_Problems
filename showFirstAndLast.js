function showFirstAndLast(arr){
  let fixed = [];

  arr.forEach(x => fixed.push(x[0] + x[x.length-1]))

    return fixed
};