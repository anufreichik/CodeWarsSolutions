// Create a function to replace all vowels (aeiou) of string for ?, example:
//
// replaceVogals('lorem ipsum') => 'l?r?m ?ps?m'

function replaceVowels(str) {
    let vowels=['a','o','u','e','y','i'];
    return str.split('').map(el=>vowels.includes(el)?'?':el).join('');
}