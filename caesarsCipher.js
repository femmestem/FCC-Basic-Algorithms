// Caesars Cipher
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    // Char Codes
    // "A" - "Z" : 65 - 90
    // Iterate over characters of the string input
    // If the char is not an alphabet char, push/concat the char*
    // Else If the char is an alphabet character
    // - Find the char code of the char and subtract 13;
    // -- If the char code is less than 65, add 65 and subtract from 90
    // - Push/Concat* the char at char code 
    
    // - *Note: strings are immutable;
    // -- Option 1: Push new char to array and return a joined str
    // -- Option 2: Concat letters to a string on each iteration
    
    return str;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC") == "FREE CODE CAMP");
console.log(rot13("SERR YBIR?") == "FREE LOVE?");
