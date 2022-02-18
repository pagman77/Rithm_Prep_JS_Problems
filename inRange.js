function inRange(n, start, end){
  if (end === undefined){
    let end = start
    start = 0
    return n > start && n < end
  }

  if (start > end){
    return n < start && n > end
  }

  return n > start && n < end
}