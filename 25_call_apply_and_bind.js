// each non primitive datatype has a primitive type off. that is functions and arrays and also objects
// each object (inbuilt or user defined) can have two things -> properties or methods 
// eg. arr.length - property and methods like map, filter, find, forEach, push, pop, etc

// functions are also objects and have properties and methods even if we notice or not
// properties -> name() -> optional in the case of anonymous functions, code (or the main expression) -> js understands the function object like this
// other methods of functions are call, apply and bind

let pavanDetails = {
    firstName : 'pavan',
    lastName : 'kumar',
    sayHi : function () {
        console.log("hi");
    },
    displayFullName : function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

/*
Demerits of arrow functions
    -> dont use arrow function if using 'this'. it is not recognized in an arrow function
    -> arrow functions are not hoisted
*/
/*
hoisting in js

variable can be declared after it has been used in js
{
    x = 5;
    {
        x processed and used
    }
    var x;
}

// this cannot be done with let and const

// only declarations are stored in js and not initializations
{
    var x;
    console.log(x); // undefined
    x = 5;
}

hoisting can result in bugs, hence always declare variables at top 
*/

pavanDetails.displayFullName()

// there are cases where we want to make the one object method accessible to all the objects in the document. in that case we do not need to create that method in all the object definition
function displayFullName () {
    console.log(this.firstName + " " + this.lastName)
}
// undefined undefined
// we have not provided anything hence undefined
// this refers to current scope and we have not defined any object in the scope hence cannot access firstname and lastname props of this object

// need of a method which could link object scope to a function (this keyword will refer to the object linked)

pavanDetails = {
    firstName : 'pavan',
    lastName : 'kumar',
    sayHi : function () {
        console.log("hi");
    }
}

/* .call()
// function.call(the object that we want to link to the function call, any other arguments);
-> attaches the object passed to the function
-> will get invoked immediately
-> first argument is the object to attach and then any other arguments for respective parameters are passed separated by commas
*/
displayFullName.call(pavanDetails)
// pavan kumar
// correct output
// here object pavanDetails was linked to the function scope defined at line 29

function something () {
    console.log(this);
}
something();
// window object

something.call(pavanDetails);
// pavanDetails object
// here if function was defined in any object then it has the scope of that object and logging to this would print that object and this would point to methods of that object
// if not defined then function has global scope hence window object is defined
// with the use of call method the function was linked to the object specified and hence its scope became that function

function withArguments(country) {
    console.log(this.firstName + " " + this.lastName + ' from ' + country);
}
withArguments.call(pavanDetails, 'India');
// pavan kumar from India 
// other arguments means that if the function defined has input arguments to it

// hence if there are x parameters in function definition, then there should be x + 1 arguments
function withMoreArguments(country, a, b) {
    console.log(this.firstName + " " + this.lastName + ' from ' + country);
    console.log(a + b);
}
withMoreArguments.call(pavanDetails, 'India', 5, 4);
/* pavan kumar from India 
9 */


/* .apply() 
-> first argument is the object to attach and then any other arguments for respective parameters are passed in an array (this is the obly difference between call and apply)
-> it will get invoked immediately
-> if there are x arguments in function definition, there should be 2 arguments
*/

function displayFullName (country, a, b) {
    console.log(this.firstName + " " + this.lastName + ' from ' + country);
    console.log(a + b);
}
displayFullName.apply(pavanDetails, ['Egypt', 34, 67]);
/* pavan kumar from Egypt
101 */


/* .bind()
-> attach an object to the function and return an updated object with that object scope
-> argument is object to attach
-> main difference is that here it is not invoked immediately and we can call it whenever we like
*/
function displayFullName (country, a, b) {
    console.log(this.firstName + " " + this.lastName + ' from ' + country);
    console.log(a + b);
}
let displayFullNameWithPavanDetailsScope = displayFullName.bind(pavanDetails);
displayFullNameWithPavanDetailsScope('United States', 0.2, 0.6);
/* pavan kumar from United States
0.8 */