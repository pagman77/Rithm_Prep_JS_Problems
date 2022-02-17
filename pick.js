function pick(obj, arr) {
  let picked = {};

  for (let key of arr) {
    if (obj[key] === undefined) {
      continue;
    } else {
      picked[key] = obj[key];
    }
  }
  return picked;
}