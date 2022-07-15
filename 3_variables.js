// var, let, const
var n3a_m$e = 'me"e"t';
console.log(name);

// rules for creating js variables
/* 1. cannot start with numbers
2. can include with letter, numbers, _ or $
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

//same rule of const applies to arrays and objects, cannot change the value but can modify it, by adding push func, etc.

//most common programming case types
/* 1. camelCase
2. PascalCase
3. kebab-case
4. snake_case */