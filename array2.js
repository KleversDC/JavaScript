// function countVowels(str) {
//   return (str.match(/[aeiou]/gi) || []).length;
// }
// console.log(countVowels("Hello world"));

// function capitalizeWords(str) {
//   return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
// }
// console.log(capitalizeWords("javascript is fun"));

// function isPalindrome(str) {
//   return str === str.split("").reverse().join("");
// }
// console.log(isPalindrome("racecar"));

// function replaceSpaces(str) {
//   return str.replace(/ /g, "-");
// }
// console.log(replaceSpaces("hello world js"));

// function countChar(str, char) {
//   return [...str].filter(c => c === char).length;
// }
// console.log(countChar("banana", "a"));

// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([5, 12, 7, 3, 22, 10]));

// function getEvenNumbers(arr) {
//   return arr.filter(num => num % 2 === 0);
// }
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

// function reverseArray(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(reverseArray([1, 2, 3]));

// function mergeArrays(a, b) {
//   let result = [...a];
//   for (let item of b) {
//     result.push(item);
//   }
//   return result;
// }
// console.log(mergeArrays([1, 2], [3, 4]));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));










