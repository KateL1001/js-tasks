// Реализуйте функцию removeDuplicateLetters(s), которая принимает строку s и возвращает новую строку, содержащую уникальные символы в лексикографическом порядке.

function removeDuplicateLetters(s) {
    const sortedStr = s.split('').sort();
    const uniqsortedStr = [...new Set(sortedStr)].join('');
    return uniqsortedStr
}

console.log(removeDuplicateLetters("bcabc"));  // "abc"
console.log(removeDuplicateLetters("cbacdcbc"));  // "acdb"
console.log(removeDuplicateLetters("abacb"));  // "abc"
console.log(removeDuplicateLetters("aabbcc"));  // "abc"
console.log(removeDuplicateLetters("zyyxwvutsrqponmlkjihgfedcba"));  // "abcdefghijklmnopqrstuvwxyz"

