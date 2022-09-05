let sym1 = Symbol();
console.log(sym1);
// Symbol()

sym1 = Symbol('my identifier');
console.log(sym1);
// Symbol(my identifier)
//cannot use new keyword here because symbol is a primitive data type 

const sym2 = Symbol('my identifier');
console.log(sym2 === sym1);
//both symbols are unique
//returns false also for == 

let a = "this is";
let b = "this is";
console.log(a === b);
// true

console.log(null === null);
// true

console.log(undefined === undefined);
// true
//for all other primitive datatypes it will be true.

//use: symbols are used to store unique keys of objects

const k1 = Symbol('identifier for k1');

const k2 = Symbol('identifier for k2');
console.log(k2);
// Symbol(identifier for k2)

const myObj = {};
myObj[k1] = 'Meet';
myObj[k2] = 'Dhruvi';
myObj['name'] = 'good boy';
myObj[5] = 'good int';

console.log(myObj);
// {5: 'good int', name: 'good boy', Symbol(identifier for k1): 'Meet', Symbol(identifier for k2): 'Dhruvi'}

console.log(myObj[k1]);
// Meet

console.log(myObj[k2]);
// Dhruvi
//cannot do obj.k1 or k2 to get meet or dhruvi or else it will search for k2 string in it. we have to insert k2 variable in it.
// will return undefined as it searches for string

for (let key in myObj) {
    console.log(key, myObj[key]);
    //here symbols are not printed as keys in output. in forin loop symbols are neglected.
}
/* 5 good int
name good boy */

// converting any object to json
console.log(JSON.stringify(myObj));
// {"5":"good int","name":"good boy"}
// symbols are ignored
