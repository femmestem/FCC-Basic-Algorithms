// Seek and Destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(arr) {
  var targets = [];

  for (var i=1, l=arguments.length; i<l; i++) {
    targets.push(arguments[i]);
  }
  return arr.filter(function(el) {
    return targets.indexOf(el) < 0;
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
