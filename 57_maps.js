//Maps in javascript are key value pairs but we can use any type of key and value - can use function, string, blank object as a key

const myMap = new Map();
// calling the map constructor and make an empty map

console.log(myMap);
// Map(0) {size: 0}
// printing map object with zero entries

// defining key value pairs
let key1 = 'myStr';
let key2 = {};
let key3 = function () {};

// or can also define keys as
key1 = 'myStr', key2 = {}, key3 = function() {};

// can complete by writing values in above statement also

//setting map values
//set is a method which takes (key, value) as argument
myMap.set(key1, 'This is my string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap); 
// Map(3) {'myStr' => 'This is my string', {…} => 'This is a blank obj', ƒ => 'This is an empty function'}

//getting the value of key from map
let value1 = myMap.get(key1);
console.log(value1);
// This is my string
console.log(myMap.get(key2));
// This is a blank obj
console.log(myMap.get(key3));
// This is an empty function

//getting the size of map
console.log(myMap.size);
// 3
//when we just print the map there also we can see the size besides the word map.

//can loop using for-of loop to get keys and values
for (let [key,value] of myMap) {
    console.log(key, value);
}
/*
myStr This is my string
{} 'This is a blank obj'
ƒ () {} 'This is an empty function'
*/

// loops only through keys
for (const key of myMap.keys()) {
    console.log('key is ' + key);
}

// loops only through values
for (const value of myMap.values()) {
    console.log('value is ' + value);
}


//you can loop through a map using for each loop
myMap.forEach(function(value, key) {
    console.log(key + " " + value);
});

myMap.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
})
//arguments should be in the order of value, key only.


//converting map to array
let myArray = Array.from(myMap);
console.log(myArray); 
// (3) [Array(2), Array(2), Array(2)]

//convert only map keys or map values to array
let myArrayKeys = Array.from(myMap.keys());

let myArrayValues = Array.from(myMap.values());

console.log(myArrayKeys, myArrayValues);
// (3) ['myStr', {…}, ƒ] 
// (3) ['This is my string', 'This is a blank obj', 'This is an empty function']