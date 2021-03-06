const marks = [24, 34, 53, 53, 53, 82, 84, 26, 28];
const fruits = ['orange', 'apple', 'pineapple'];
const mixed = ['str', 54, [53, 654]];

const arr = new Array(12, 41, 62, 'orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]); 

console.log(arr.length); //length is a prop of array hence no ()
console.log(Array.isArray(arr)); //method hence ()
console.log(typeof arr);
 
let value = marks.indexOf(53);
console.log(value);

//mutating or modifying arrays
//using methods here and hence the array is being modified
marks.push(67);
marks.unshift(64);//places at start
console.log(marks);
marks.pop(); //removes the last element
console.log(marks);
marks.shift(); //removes first element
console.log(marks);
marks.splice(2, 4); //starts at 2nd index, and removes 4 elements
console.log(marks);
marks.reverse();
console.log(marks);

let marks2 = [492, 52925, 52, 529];
// marks = marks.concat(marks2);
//this will give error
//because marks is const and hence cannot be changed but can be modified by methods

// let marks3 = marks; //gives error cannot reassign because it is a const
let marks3 = [943, 5243, 529, 52];
marks3 = marks3.concat(marks2);
console.log(marks3);

let myObj = {
    name: 'meet',
    'last name': 'mehta',
    channel: 'youtube',
    isActive: true,
    marks: [29, 52, 58, 57]
}
console.log(myObj.isActive);
console.log(myObj['last name']);

//when need to store elements use array but when need to store key values then use objects