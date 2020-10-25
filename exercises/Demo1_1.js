var input = require("readline-sync");
var word = input.question("Give a word: ");
console.log("Given word is a palindrome: " + palindromeChecker(word));

/*We don't need to check the middle letter if array.length is an odd number.
E.g. It's enough to check the first two and last letters in the word "abcba" to
see if it's a palindrome or not.
Note: Technically an empty string is a palindrome.*/
function palindromeChecker(w) {

    var array = w.split("");
    var arrayLength = array.length;
    for(i = 0; i < arrayLength/2; i++) {
        if(array[i] != array[arrayLength - i - 1]) {
            return false;   //Is is returned if the word isn't a palindrome.
            break;  //Break when the first different pair is found.
        }
    }
    return true;    //This is returned if the word is a palindrome.

}
