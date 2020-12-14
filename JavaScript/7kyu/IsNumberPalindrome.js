// Write a function which for given number returns true if number is palindrome or false if it is not.
//
//     A number is a palindrome if when the digits are reversed it is the same number.
//
//     Ex. 121 is a palindrome

function isPalindromic(a){
    return String(a)===String(a).split('').reverse().join('')?true:false;
}