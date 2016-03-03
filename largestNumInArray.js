// Return the Largest Numbers in Arrays
function largestOfFour(arr) {
  var champions = [];
  
  for(var i=0, l=arr.length; i<l; i++){
    arr[i].sort(function(a, b) { return b - a; });
    champions.push(arr[i][0]);
  }
  return champions;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
