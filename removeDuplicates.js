function noDuplicates(arr) {
  arr.filter((a,b) => {
    return arr.indexOf(a) === b;
  })
}