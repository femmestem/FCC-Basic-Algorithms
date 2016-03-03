// Chunky Monkey: Write a function that splits an array (first arg) into groups  the length of size (second arg) and returns them as a two-dimensional array.
function chunk(arr, size) {
  var chunks = [];
  for (var i=0, l=arr.length; i<l; i+=size) {
    chunks.push(arr.slice(i, i+size));
  }
  return chunks;
}

console.log(chunk(["a", "b", "c", "d"], 2));
