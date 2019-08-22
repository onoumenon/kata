function deepFlatten(arr) {
  return arr.reduce((acc, cur) => Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur), [])
}