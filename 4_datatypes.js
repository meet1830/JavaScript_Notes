//datatypes in js
/*
PRIMITIVE DATATYPES
1. strings
2. numbers
3. boolean - true, false
4. null - intentional empty value - used when want to check afterwards if the variables is null value or not
5. undefined
6. symbol
REFERENCE DATATYPES OR NONPRIMITIVE DATATYPES
1. arrays
2. object literals
3. functions
4. dates
*/

//strings
let name = 'meet';
console.log('my name is ' + name);
console.log(typeof name); //typeof string

//numbers
//typeof number

//boolean
let isdriver = false;
//typeof boolean

//null
let nulVar = null;
console.log(typeof(nulVar)) //typeof object - because return value is bogus but it is a primitive datatype

//undefined
//typeof is undefined

//array
//its datatype is object
let arr1 = [1, 34, 'string', false];
//c and c++ are static means we have to predefine the type of datatype declared

//objects
let stMarks = {
    meet: 49,
    dhruvi: 53,
    rita: 98,
    //rakesh mehta: 74, 
    'rakesh mehta': 74 
} //typeof is object
console.log(stMarks); //sorted in console tab by name

function findName() {
    
}
//typeof is function

let date = new Date();
console.log(typeof date); //typeof is object