const sym1 = Symbol('my identifier');
console.log(sym1);
//cannot use new keyword here because symbol is a primitive data type 
const sym2 = Symbol('my identifier');
console.log(sym2 === sym1);
//both symbols are unique
//returns false also for == 
//for all other primitive datatypes it will be true.

//use: symbols are used to store unique keys of objects

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');
console.log(k2);
myObj = {};
myObj[k1] = 'Meet';
myObj[k2] = 'Dhruvi';
myObj['name'] = 'good boy';
myObj[5] = 'good int';
console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
//cannot do obj.k1 or k2 to get meet or dhruvi or else it will search for k2 string in it. we have to insert k2 variable in it.

for (let key in myObj) {
    console.log(key, myObj[key]);
    //here symbols are not printed as keys in output. in forin loop symbols are neglected.
}

console.log(JSON.stringify(myObj));
//symbols are ignored

// for (let k of myObj) {
//     console.log(key, myObj[key]);
// }
//error myObj is not iterable