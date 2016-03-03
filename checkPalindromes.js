// Check for Palindromes
function palindrome(str) {
  fwd = str.toLowerCase().replace(/[^a-z0-9]/ig, "");
  bwd = fwd.split("").reverse().join("");
  return fwd == bwd;
}

palindrome("1 eye for of 1 eye.");
