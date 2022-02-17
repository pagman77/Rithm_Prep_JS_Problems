function addKeyAndValue(arr, key, value){
 for (let obj of arr){
   obj[key] = value
 }
 return arr
}