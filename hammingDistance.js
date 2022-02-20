function hammingDistance(str1, str2){
if (str1.length !== str2.length){
  return "Input strings must have the same length."
}
  let ham = 0
  for (let i = 0; i < str1.length; i++){
    if (str1[i].toLowerCase() !== str2[i].toLowerCase()){
        ham++
    }
  }
  return ham
}