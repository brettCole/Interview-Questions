// Given a string return the count of each unique word 

function uniqueWordCount(str) {
  let obj = {};
  str = str.replace(/\W/g, ' ').toLowerCase().trim().split(/\s+/g);
  for (let i = 0; i < str.length; i++) {
    if (!(str[i] in obj)) {
      obj[str[i]] = 0;
    }
    obj[str[i]] += 1;
  }
  return obj;
}