function extractFullName(arr){
  let fullNames = [];
  let name = ""

  for (let obj of arr){
    let name = `${obj.first} ${obj.last}`
    fullNames.push(name)
  }
  return fullNames
}