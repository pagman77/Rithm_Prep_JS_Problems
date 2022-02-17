function createMatrix(n, m){
  let matrix = []
  let row = []

  while (n > 0){
    row.push(0);
    n--
  }
  while (m > 0){
    matrix.push(row)
    m--
  }
  return matrix
}