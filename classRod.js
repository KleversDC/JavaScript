function removeElement(arr, index) {
  arr.splice(index, 1);
  return arr;
}


function insertElement(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
}

function getMaxElement(arr) {
  return Math.max(...arr);
}

function getSum(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function getEvenNumbers(arr) {
  return arr.filter((el) => el % 2 === 0);
}

let array = new Array(10).fill(0).map(() => Math.floor(Math.random() * 100) + 1);

console.log("Array:", array);
console.log("Sum of elements:", getSum(array));
console.log("Even elements:", getEvenNumbers(array));
console.log("Max element:", getMaxElement(array));

insertElement(array, 3, 999);
console.log("After insertion at index 3 (value 999):", array);

removeElement(array, 5);
console.log("After removal at index 5:", array);

let array2 = new Array(10).fill(0).map(() => Math.floor(Math.random() * 100) + 1);