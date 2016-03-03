// Find the Longest Word in a String
function findLongestWord(str) {
  var wordCollection = str.toLowerCase().split(" ");
  wordCollection.sort(function(a, b) { return b.length > a.length; } );
  return wordCollection[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
