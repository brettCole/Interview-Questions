function sortThings(arr) {
  arr.sort((a,b) => {
    return a - b // for numbers
    return a.name - b.name // for object values 
  })
}