let arr = ['Akshay', 'Aditya'];
// if type arr. in console then will show its various methods like push, length, concat, firstIndex, findIndex, etc. how does it gets access to all these properties without we defining it

let object = {
    name: "Akshay",
    city: 'Dehradun',
    getIntro: function() {
        console.log(`${this.name} from ${this.city}`);
    }
}

console.log(object.name);
// Akshay
// it will give access to the name property but if type object. and will give suggestions to other properties and suggestions like object.toString()
// these comes via prototype. javascript attaches our object to hidden properties and functions. we can access this using 'object.' 

function fun() {

}
// function has nothing in it still has access to many things in console

// javascript engine take some properties and put them into an object and attaches that object to our object
// to get this object type arr.__proto__ this is the object in which javascript puts properties. not just in array, also for object and function as above

// arr.__proto__ is same object as Array.prototype
// every type of object in javascript has prototype
// means arr.__proto__.__proto__ -> arr's proto also has a prototype. this is Object.prototype.

// arr.__proto__.__proto__.__proto__  -> null

// arr's proto is Arrays proto and Arrays proto is Object's proto whose proto is null. hence this is a chain. this is called prototype chain

// now object.__proto__ is Object.prototype. 
// object.__proto__.__proto__ is null

// fun.__proto__ = Function.prototype
// fun.__proto__.__proto__ = Object.prototype
// everything in javascript is an object. array of fun or whatever down the prototype chain becomes anm object. it ends up at null

let object2 = {
    name: 'Aditya'
}

// never do this
object2.__proto__ = object;

// object2's prototype points to first object. 

console.log(object2.__proto__);
// by doing this we get access to the object 1's properties just like arr.length and arr.push

console.log(object2.name);
// "Aditya"

console.log(object2.city);
// "Dehradun"
// how did it get access. because of proto

// object2.city if it does not find in object2 then goes to its proto. if not then goes to its proto and hence till end of chain

// this is how object2 inherits from object. this is called prototypal inheritance.

console.log(object.getIntro());
// Akshay from Dehradun

console.log(object2.getIntro());
// Aditya frim Dehradun

// so now this is pointing to object2's name. hence this.name. it tries to first grab from object2 then sees it in its proto and finds it and prints

Function.prototype.myBind = function() {
    console.log("fdsgsdgs");
}

function fun() {

}

console.log(fun.__proto__.myBind());
/*
fdsgsdgs
undefined
*/

console.log(fun.myBind());
/*
fdsgsdgs
undefined
*/

// now every function that we create will have access to mybind method because we have set mybind to Function.prototype.

// difference between __proto__ and prototype -> _proto_ is on the object instance, prototype is on the constructor function