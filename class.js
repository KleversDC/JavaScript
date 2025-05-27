const time = {
  hours: 20,
  minutes: 30,
  seconds: 45,

  display() {
    const pad = n => String(n).padStart(2, '0');
    console.log(`${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`);
  },

  addSeconds(sec) {
    let total = this.toSeconds() + sec;
    this.fromSeconds(total);
  },

  addMinutes(min) {
    this.addSeconds(min * 60);
  },

  addHours(hr) {
    this.addSeconds(hr * 3600);
  },

  toSeconds() {
    return this.hours * 3600 + this.minutes * 60 + this.seconds;
  },

  fromSeconds(total) {
    total = ((total % 86400) + 86400) % 86400;
    this.hours = Math.floor(total / 3600);
    this.minutes = Math.floor((total % 3600) / 60);
    this.seconds = total % 60;
  }
};

time.display();
time.addSeconds(30);
time.display();
time.addMinutes(30);
time.display();
time.addHours(4);
time.display();



// function Fraction(numerator, denominator) {
//   this.numerator = numerator;
//   this.denominator = denominator;
// }

// Fraction.prototype.add = function (other) {
//   const num = this.numerator * other.denominator + other.numerator * this.denominator;
//   const den = this.denominator * other.denominator;
//   return new Fraction(num, den).reduce();
// };

// Fraction.prototype.subtract = function (other) {
//   const num = this.numerator * other.denominator - other.numerator * this.denominator;
//   const den = this.denominator * other.denominator;
//   return new Fraction(num, den).reduce();
// };

// Fraction.prototype.multiply = function (other) {
//   return new Fraction(this.numerator * other.numerator, this.denominator * other.denominator).reduce();
// };

// Fraction.prototype.divide = function (other) {
//   return new Fraction(this.numerator * other.denominator, this.denominator * other.numerator).reduce();
// };

// Fraction.prototype.reduce = function () {
//   function gcd(a, b) {
//     return b ? gcd(b, a % b) : a;
//   }
//   const common = gcd(this.numerator, this.denominator);
//   return new Fraction(this.numerator / common, this.denominator / common);
// };

// let f1 = new Fraction(1, 2);
// let f2 = new Fraction(3, 4);
// console.log("Add:", f1.add(f2));
// console.log("Subtract:", f1.subtract(f2));
// console.log("Multiply:", f1.multiply(f2));
// console.log("Divide:", f1.divide(f2));


// const car = {
//   manufacturer: "Toyota",
//   model: "Corolla",
//   year: 2020,
//   avgSpeed: 80,

//   showInfo() {
//     console.log(`Manufacturer: ${this.manufacturer}`);
//     console.log(`Model: ${this.model}`);
//     console.log(`Year: ${this.year}`);
//     console.log(`Average speed: ${this.avgSpeed} km/h`);
//   },

//   travelTime(distance) {
//     let time = distance / this.avgSpeed;
//     let breaks = Math.floor(time / 4);
//     return time + breaks;
//   }
// };

// car.showInfo();
// console.log("Time needed (400km):", car.travelTime(400).toFixed(2), "hours");
