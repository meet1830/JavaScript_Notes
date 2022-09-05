/*
Closures -> Inner functions continue to have access to outer variables even after the outer scope(Lexical scope) has finished
*/

function abc () {
    let x = 5;
    // even if let is block scope all inner functions will be able to access x but outer than this function will not able to access
    
    function def () {
        console.log(x);
    }

    def();
    // will not run if abc is not called
    // also will not run if abc is called but def inside is not called
}

abc();
// 5


function abc1() {
    let x = 5;
    
    return () => {
        console.log(x);
    }
}

let def1 = abc1();
// here in abc function x could be accessed. but after returning the function to variable def1, the block scope is finished and ideally the access to x should no longer exist

def1();
// 5
// it it still prints 5

abc1()();
// different way of calling the above block. abc1 returning a function and calling the returned function with ()
// calling a nested function

// this is called closure
// closure refers to the function along with its lexical scope. any function which exists, even though the outer function finishes it does not delete the variables of the outer function until and unless the inner function has finished
// returns the function and also the access to all the variables present. inner function can have access to those outer variables when ever they want. this is called closure

// Closure -> Inner function can have access to the outer scope variables (since those are present in the lexical scope/environment)
// closure -> refers to the 'Bundle of inner function with its lexical environment'




// JS Currying
/* Currying
    - Function which takes one argument at a time, and returns a new function expecting the next argument
    - It is a transformation of functions that translates a function from callable as func(a, b, c) to func(a)(b)(c)
*/

// function to add 3 numbers 
const add = (num1, num2, num3) => num1 + num2 + num3;

console.log(add(5, 10, 15));
// 30

// curried version of above function
// each function has one argument and returns a function expecting the next argument
const add1 = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3;
        }
    }
}

console.log(add1(5)(10)(15));
// 30

// use of this -> we have data for one step before moving to th next step. helps in identifying errors better in complex function