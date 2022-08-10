//datatypes in js
/*
PRIMITIVE DATATYPES
-> memory allocation in stack
1. strings
2. numbers
3. boolean - true, false
4. null - intentional empty value - used when want to check afterwards if the variables is null value or not
5. undefined -> defined but not assigned any value (different from null where it is intentionally kept null)
6. symbol

REFERENCE DATATYPES OR NONPRIMITIVE DATATYPES
-> memory allocation in heap means dynamic memory
1. arrays
2. object literals
3. functions
4. dates
*/

//strings
// "" or '' both same in declaration
let name = "meet";
console.log("my name is " + "meet mehta");
console.log("my name is " + name);
console.log(typeof name); //typeof string

//numbers
//typeof number
// 34 and 34.4 both numbers

//boolean
let isdriver = false;
//typeof boolean

//null
let nulVar = null;
console.log(typeof nulVar); //typeof object -> return value is bogus but it is a primitive datatype

// undefined
// typeof is undefined
// let name;
// means default value is undefined

//array
//its datatype is object
let arr1 = [1, 34, "string", false];
//c and c++ are static means we have to predefine the type of datatype declared

//objects
let stMarks = {
  meet: 49,
  dhruvi: 53,
  rita: 98,
  //rakesh mehta: 74, gives error
  "rakesh mehta": 74,
}; 
//typeof is object
console.log(stMarks); //sorted in console tab by name

function findName() {}
//typeof is function

let date = new Date();
console.log(typeof date); //typeof is object


const c = NaN;
console.log(c, typeof(c));
// NaN 'number'
// type of NaN is a number


// TRUTHY AND FALSY
// Like every datatype is an object in js, every datatype value is classified into either a truthy or a FALSY value

let x = 5;
if (x) {
  console.log("truthy");
} else {
  console.log('falsy');
}
// truthy

// for x = 0 -> falsy
// for x = 'meet' -> truthy
// for x = '' -> falsy


// every non zero value (even negative) is a truthy value and just the 0 is a falsy value
// for strings, if the string value which is declared is empty then it is a falsy value otherwise it is truthy
// boolean -> true value is truthy and false is falsy
// undefined is falsy
// null is falsy
// empty array [] and empty object {} are both truthy
// NaN is falsy

// truthy -> non zero number, non zero string, [], {}
// falsy -> 0, '', undefined, null, NaN


document.getElementById('heading').innerText = stMarks;
// browser will not recognise the object and will display below on the document
// [object Object]

document.getElementById('heading').innerHTML = stMarks;
// [object Object]

// for this need to convert object to string
document.getElementById('heading').innerText = JSON.stringify(stMarks);
// {"meet":49,"dhruvi":53,"rita":98,"rakesh mehta":74}