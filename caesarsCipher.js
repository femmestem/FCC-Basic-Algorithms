// Caesars Cipher
// Write a function which takes a ROT13 encoded string as input and returns a decoded string. All inputs will be capitalized letters.
// Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    // - *Note: strings are immutable;
    // -- Option 1: Push new char to array and return a joined str
    // -- Option 2: Concat letters to a string on each iteration
    var decodedStr = "";

    // Iterate over characters of the string input
    for (i=0, l=str.length; i<l; i++) {
        // Char Codes
        // "A" - "Z" : 65 - 90
        var charCode = str.charCodeAt(i);

        // If the char is not an alphabet char, push/concat the char*
        if( charCode < 65 || charCode > 90 ) {
            decodedStr += str[i];
        // Else the char is an alphabet character
        } else {
            decodedStr += String.fromCharCode(calcShift(charCode, 13));
        }
    }
    
    return decodedStr;

    function calcShift (code, offset) {
        // Find the char code of the char and subtract 13;
        var shiftedCharCode = code - offset;
        // If the char code is less than 65, add 65 and subtract from 91
        if (shiftedCharCode < 65) {
            // if shifted char code falls out of the alphabet range,
            // then add num of alphabet characters to offset from beginning of alphabet
            shiftedCharCode += 26; 
        }

        return shiftedCharCode;
    }
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC") == "FREE CODE CAMP");
console.log(rot13("SERR YBIR?") == "FREE LOVE?");
console.log(rot13("LBH QVQ VG!"));
