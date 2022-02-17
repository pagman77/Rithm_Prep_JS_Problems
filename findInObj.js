function findInObj(arr, key, value){
 for (let obj of arr){
   if (obj[key] === value){
     return obj
   }
 }
 return undefined
}