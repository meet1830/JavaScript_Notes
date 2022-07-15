//Maps in javascript are key value pairs but we can use any type of key and value - can use function, string, blank object as a key

const myMap = new Map();
// calling the map constructor and make an empty map

// console.log(myMap);
//printing map object with xero entries

//defining key value pairs
let key1 = 'myStr';
let key2 = {};
let key3 = function () {};

//or can also define keys as
key1 = 'myStr',
    key2 = {},
    key3 = function() {};
//same as:
// key1 = 'myStr', key2 = {}, key3 = function() {};

//setting map values
//set is a method which takes (key, value) as argument
myMap.set(key1, 'This is my string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is an empty function');

console.log(myMap); 

//getting the value of key from map
let value1 = myMap.get(key1);
console.log(value1);

//getting the size of map
console.log(myMap.size);
//when we just print the map there also we can see the size besides the word map.

//can loop using for-of loop to get keys and values
for (let [key,value] of myMap) {
    console.log(key, value);
}

//loops only through keys
for (const key of myMap.keys()) {
    console.log('key is ' + key);
}

//loops only through values
for (const value of myMap.values()) {
    console.log('value is ' + value);
}

//you can loop through a map using for each loop
myMap.forEach((value, key) => {
    console.log('key is', key);
    console.log('value is', value);
})
//arguments should be in the order of value, key only.

//converting map to array
let myArray = Array.from(myMap);
console.log(myArray); 

//convert only map keys or map values to array
let myArrayKeys = Array.from(myMap.keys());
let myArrayValues = Array.from(myMap.values());
console.log(myArrayKeys, myArrayValues);