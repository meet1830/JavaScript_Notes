// here if divide one numberby another ad print in console, then will get exact value unlie cpp and java where rounded result is returned

let z = Math;
console.log(z);
// prints math object

z = Math.PI;
console.log(z);
// 3.141592653589793

z = Math.E;
console.log(z);
// 2.718281828459045

z = Math.round(4.3);
console.log(z);
// 4

z = Math.ceil(4.3); 
// rounds to the next number
console.log(z);
// 5

z = Math.floor(4.8); 
// rounds to the base number
console.log(z);
// 4

z = Math.abs(-4.3); 
// absolute value
console.log(z);
// 4.3

z = Math.sqrt(4.3);
console.log(z);
// 2.073644135332772

z = Math.pow(2, 3); 
// 2 to the power 3
console.log(z);
// 8

// Exponential operator ES6 syntax
z = 2 ** 3;
console.log(z);
// 8

z = Math.min(4, 3, 24, -24, 2); 
// returns min of the given numbers
console.log(z);
// -24

z = Math.max(4, 3, 24, -24, 2);
console.log(z);
// 24

z = Math.random(); 
console.log(z);
// gives random val between 0 and 1 with upto 16 decimal points

// how to obtain random numbers in a range
let a_0_100 = 100*Math.random();
// gives random numbers between 0 to 100

let a_10_100 = 10 + (100-10)*Math.random();
// gives random numbers between 10 to 100

a_10_100 = Math.ceil( 10 + (100-10)*Math.random());
// gives a whole number because of ceil