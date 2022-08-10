//type conversion and type coercion

//TYPE CONVERSION
let myvar;
myvar = 34;
myvar = String(34);
console.log(myvar, typeof myvar);

myboolean = true;
console.log(myboolean, typeof myboolean);
myboolean = String(true);
console.log(myboolean, typeof myboolean);

let date = String(new Date());
console.log(date, typeof date);

//benefit to convert to string is that we can apply string functions
let arr = String([1,2,3,4,5]);
console.log(arr, arr.length, typeof arr);
// ans = 9 -> 5 for numbers and 4 for commas
//length of array means number of elements and length of string means number of characters

let i = 0;
console.log(i.toString());
let stri = Number('3542');
console.log(stri, typeof stri);

stri = Number('d3542'); 
// NaN -> not a number
console.log(stri, typeof stri);

stri = Number(false);
console.log(stri, typeof stri);
// 0
// if used string or array here than nan output

let number = parseInt('34.835'); 
// zeroes float values to int
// can use Number()
console.log(number, typeof number);

number = parseFloat('34.835'); // does not zero float values
console.log(number, typeof number);

console.log(number.toFixed(2), typeof number); //zeroes upto given decimal number


//TYPE COERCION

let myStr = '753';
let myNum = 42;
console.log(myStr + myNum); 
// 75342
// converts myNum to string and concatenates 

console.log(myStr / myNum);
// 17.928571428571427
// type number

console.log('5' - 5);
// 0
// number
// this happens because + is only overloaded and - is not

console.log(5 - 'meet');
// NaN

console.log('5' - 'meet');
// NaN