// var, let, const
var n3a_m$e = 'me"e"t';
console.log(n3a_m$e);

// use back ticks to add quotation marks and apostrophes in string 

// rules for creating js variables
/* 1. cannot start with numbers
2. can start with and  include with letter, numbers, _ or $
but _ and $ are not recommended to use
3. variable names are case sensitive*/

// var ^city = 'delhi';
var _city = 'delhi';

//CONST
const ownersName = "hari ram";
// ownersName = 'hari'; //cannot change const
//const is used to prevent variable overriding without knowing
console.log(ownersName);
// const fruit; //error
// const has to be initialized at the time of declaration 

//LET
//in modern js use only let and const, not var
//var has global scope (var name remains same for all blocks), whereas let has block level scope
let city = "kanpur";
{
    let city = "mumbai";//let can be changed
    console.log(city);
    city = "ahmedabad";
    console.log(city);
}
console.log(city);
//let defines local variable, var and const defines global variable

let arr1 = [1,2,3,4];
arr1 = [2,3];
console.log(arr1);
// in let can change this
// but for const will give error

//same rule of const applies to arrays and objects, cannot change the value(by redeclaring) but can modify it, by adding push func, etc.

//most common programming case types
/* 1. camelCase
2. PascalCase
3. kebab-case
4. snake_case */