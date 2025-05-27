// let start = +prompt("Enter the start of the range:");
// let end = +prompt("Enter the end of the range:");
// let sum = 0;
// for (let i = start; i <= end; i++) {
//   sum += i;
// }
// alert(`Sum: ${sum}`);

// let a = +prompt("Enter the first number:");
// let b = +prompt("Enter the second number:");
// while (b !== 0) {
//   let temp = b;
//   b = a % b;
//   a = temp;
// }
// alert(`GCD: ${a}`);

// let num = +prompt("Enter a number:");
// let divisors = "";
// for (let i = 1; i <= num; i++) {
//   if (num % i === 0) divisors += i + " ";
// }
// alert(`Divisors: ${divisors}`);

// let number = Math.abs(+prompt("Enter a number:"));
// let count = 0;
// do {
//   number = Math.floor(number / 10);
//   count++;
// } while (number > 0);
// alert(`Number of digits: ${count}`);

// let pos = 0, neg = 0, zero = 0, even = 0, odd = 0;
// for (let i = 0; i < 10; i++) {
//   let num = +prompt("Enter a number:");
//   if (num > 0) pos++;
//   else if (num < 0) neg++;
//   else zero++;
//   if (num % 2 === 0) even++;
//   else odd++;
// }
// alert(`Positive: ${pos}, Negative: ${neg}, Zeros: ${zero}, Even: ${even}, Odd: ${odd}`);

// do {
//   let a = +prompt("Enter the first number:");
//   let b = +prompt("Enter the second number:");
//   let op = prompt("Enter an operator (+, -, *, /):");
//   let result;
//   switch (op) {
//     case "+": result = a + b; break;
//     case "-": result = a - b; break;
//     case "*": result = a * b; break;
//     case "/": result = b !== 0 ? a / b : "Division by zero!"; break;
//     default: result = "Invalid operator!";
//   }
//   alert(`Result: ${result}`);
// } while (confirm("Do you want to calculate another example?"));

// let num = prompt("Enter a number:");
// let shift = +prompt("Enter how many digits to shift:");
// shift = shift % num.length;
// let result = num.slice(shift) + num.slice(0, shift);
// alert(`Shifted number: ${result}`);

// const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
// let index = 0;
// do {
//   alert(days[index]);
//   index = (index + 1) % days.length;
// } while (confirm("Do you want to see the next day?"));

// for (let i = 2; i <= 9; i++) {
//   let row = "";
//   for (let j = 1; j <= 10; j++) {
//     row += `${i} × ${j} = ${i * j}\n`;
//   }
//   alert(row);
// }

let min = 0, max = 100;
alert("Think of a number between 0 and 100.");
let guess, response;
while (min <= max) {
  guess = Math.floor((min + max) / 2);
  response = prompt(`Is your number > ${guess}, < ${guess}, or == ${guess}?`);
  if (response === ">") min = guess + 1;
  else if (response === "<") max = guess - 1;
  else if (response === "==") {
    alert(`Guessed it! It's ${guess}`);
    break;
  } else {
    alert("Please enter >, <, or ==");
  }
}

