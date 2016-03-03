// Title Case a Sentence
function titleCase(str) {
    var words, letters;
  
    words = str.toLowerCase().split(" ");
    words = words.map(function(word){
        letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        return letters.join("");
    });
  
    return words.join(" ");
}

titleCase("I'm a little tea pot");
