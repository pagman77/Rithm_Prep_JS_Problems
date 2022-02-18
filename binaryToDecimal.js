function binaryToDecimal(bin){
let arr = bin.toString().split("").reverse();
let sum = 0;

for (let i = 0; i < arr.length; i++){
    sum += (arr[i] * 2**i)
  }
  return sum
}