const marks = [24, 34, 53, 53, 53, 82, 84, 26, 28];
const fruits = ["orange", "apple", "pineapple"];
const mixed = ["str", 54, [53, 654]];

let arr = new Array(12, 41, 62, "orange");

console.log(arr);
console.log(mixed);
console.log(fruits[1]);

// two kinds -> methods and properties

console.log(arr.length);
// length is a prop of array, hence no need of () after properties

console.log(Array.isArray(arr));
// returns if it is array or not true or false
// method hence ()

arr[0] = "meet";
// hence can change array values

let value = marks.indexOf(53);
console.log(value);

// mutating or modifying arrays
// using methods here and hence the array is being modified

marks.push(67);

marks.unshift(64);
// pushes at start

console.log(marks);

marks.pop();
// removes the last element

console.log(marks);

marks.shift();
// removes first element

console.log(marks);

marks.splice(2, 4);
// starts at 2nd index, and removes 4 elements

marks.slice(2, 4);
// [53, 53]

console.log(marks);

marks.reverse();

console.log(marks);

let marks2 = [492, 52925, 52, 529];
// marks = marks.concat(marks2);
// this will give error
// because marks is const and hence cannot be changed but keep in mind that it can be modified by methods

// let marks3 = marks; //gives error cannot reassign because it is a const

let marks3 = [943, 5243, 529, 52];
marks3 = marks3.concat(marks2);
// [943, 5243, 529, 52, 492, 52925, 52, 529]

console.log(marks3);

let myObj = {
  name: "meet",
  "last name": "mehta",
  channel: "youtube",
  isActive: true,
  marks: [29, 52, 58, 57],
};

console.log(myObj.name);

console.log(myObj.isActive);

console.log(myObj["last name"]);

console.log(myObj["name"]);

// when need to store elements use array but when need to store key values then use objects

let pavan = {
  firstName: "Pavan",
  lastName: "Kumar",
  sayHi: function () {
    console.log("Hi");
  },
};
console.log(pavan.firstName);
pavan.sayHi();

// Properties of object -> Those keys which hold values other than function -> firstName, lastName
// Methods of objects -> Those keys which hold function values -> sayHi
// methods are invoked(called) using parenthesis
// methods are called functions as members of an object

console.log(console.log("hi"));
// hi
// undefined

// here for nested console hi is printed but since console.log is a function and does not return a value, which means undefined, the outer function prints that


// THIS keyword in javascript
pavan = {
  firstName: "pavan",
  lastName: "kumar",
  displayName: function () {
    console.log("my name is " + this.firstName + " " + this.lastName);
  },
  hobbies: ["swimming", "cycling", "jogging"],
  displayIntro: function () {
    console.log(
      `My name is ${this.firstName} ${
        this.lastName
      } and my hobbies are ${this.hobbies.join(", ")}.`
    );
  },
};
pavan.displayName();
// if write just firstName and lastName then will give error of Reference type
// this means owner of that method
// can use the properties defined in the object

pavan.displayIntro();
// My name is pavan kumar and my hobbies are swimming, cycling, jogging.
// join is an array method which converts array to a string on the basis of the separator that is mentioned here comma and a space



// Javascript object constructors
function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.displayName = function () {
    console.log(this.firstName + " " + this.lastName);
  };
}

let meet = new Student("Meet", "Mehta");
let rahul = new Student("Rahul", "Jaiswal");
// here all the objects created have type student

console.log(meet);
// Student {firstName: 'Meet', lastName: 'Mehta', displayName: ƒ}
console.log(rahul);
// Student {firstName: 'Rahul', lastName: 'Jaiswal', displayName: ƒ}

meet.displayName();
// Meet Mehta



// array methods continued
// foreach, filter or map does not manipulate the original array
/*
1. forEach

2. filter 
--> iterate and run the callback for each element
--> cannot manipulate any elements inside the callback function
--> a condition needs to be returned inside the callback
--> returns an array with all the filtered elements as per the conditions

syntax:
arr.filter(function(element) {
    return [condition]
})
*/

let data = [943, 5243, 529, 52, 492, 52925, 52, 529];

// get all odd numbers
let filteredArr = data.filter(function (element) {
  return element % 2 == 1;
});

console.log(filteredArr);
// (5) [943, 5243, 529, 52925, 529]

/*
3. Map
--> Iterate and run the callback for each element
--> cannot manipulate any elements inside the callback function
--> inside the callback, can return updated elements for each iteration
--> map method returns a new array with all the updated elements which were returned for each iteration

syntax
arr.map(function(element) {
    return [updated element]
})
*/
// size of returning new array is same unlike filter

data = [943, 5243, 529, 52, 492, 52925, 52, 529];

let updatedArr = data.map(function (element) {
  // return element + 5;

  // return element; --> will return the same element values

  // return; --> will return an array of undefined same size as input arr, for each iteration we dont return anything hence undefined array
  // or leave the loop empty with no code inside and print will result in same output as above

  if (element % 2 === 0) return element;
  // output undefined where not return and ans where possible
});

console.log(updatedArr);
// (8) [948, 5248, 534, 57, 497, 52930, 57, 534]

// es6 syntax includes method in array and string
console.log(data.includes(5243));
// true

console.log(data.includes("943"));
// false -> js does not convert here



// objects also has methods -> object.keys(), object.values(), object.entries()
let obj1 = { a: 5, b: 10 };
console.log(Object.keys(obj1));
// (2) ['a', 'b']
// returns an array of keys of the object

console.log(Object.values(obj1));
// (2) [5, 10]
// returns an array of values of the object



// Es6 SPREAD operator (...) (populate array elements / object entries)

arr = [1, 5, 3, 2, 4];
// newArr = arr, 6, 7 -> [1, 5, 3, 2, 4, 6, 7];
// newarr should contain all the elements of arr and also 6 and 7

// conventional method without using spread operator
let newArr = [];
for (let i = 0; i < arr.length; i++) {
  newArr[i] = arr[i];
}
newArr.push(6, 7);
// newArr[arr.length] = 6;
// newArr[arr.length + 1] = 7;
console.log(newArr);

// conventional method 2 -> using map
let newArr2 = arr.map(function (element) {
  return element;
});
newArr2.push(6, 7);
console.log(newArr2);

// conventional method 3
let arr1 = [1, 5, 3, 2, 4];
let arr2 = [6, 7];
let newArr3 = arr1;
for (let i = 0; i < arr2.length; i++) {
  newArr[arr.length + i] = arr2[i];
}
console.log(newArr);

// conventional method 4
let newArr4 = arr1.concat(arr2);
console.log(newArr4);

// using spread operator -> ...takes all the elements from the array
// if used just arr1 then would be a 2d array
// merging two arrays into a new array without manipulating the original arrays
let newArr5 = [...arr1, ...arr2];
console.log(newArr5);

// using spread operator for merging two objects into a new object

// conventional method using for-in loop
obj1 = { a: 5, b: 10 };
let obj2 = { c: 6, d: 12 };
let obj3 = {};
for (let key in obj1) {
  obj3[key] = obj1[key];
}
for (let key in obj2) {
  obj3[key] = obj2[key];
}
// if same key exists in obj1 and obj2 then will update the value in obj3 or create new key
obj3["first name"] = "meet";
// this will add a new property first name in the object
console.log(obj3);
// {a: 5, b: 10, c: 6, d: 12}

// using spread operator
obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3);
// {a: 5, b: 10, c: 6, d: 12}

obj3 = {
  a: 5,
  b: 10,
  c: 15,
  a: 20,
};
console.log(obj3);
// {a: 20, b: 10, c: 15}
// values can be same for different keys in object but keys are unique for the object
// if the key is repeated in the object then will not give error, the latest assigned value will be taken as the key value

// Cloning an object and changing only required fields -> now if want one object to be same as new object but with one or more values changed then
let obj5 = {
  a: 5,
  b: 10,
  c: 100,
};
let obj6 = obj5;
obj6.a = 10;
console.log(obj5, obj6);
// {a: 10, b: 10, c: 100} {a: 10, b: 10, c: 100}
// above is wrong because this updates obj5 as well

let obj7 = {
  a: 5,
  b: 10,
  c: 100,
};
let obj8 = {
  ...obj7,
  a: 10,
};
console.log(obj7, obj8);
// {a: 5, b: 10, c: 100} {a: 10, b: 10, c: 100}

obj8 = {
  a: 10,
  ...obj7,
};
console.log(obj8);
// {a: 5, b: 10, c: 100}
// value will not get updated



// OBJECT PROPERTY ASSIGNMENT
// condition -> key name of object = variable name holding keys value

let firstName = "meet";
let lastName = "mehta";
let obj9 = {
  firstName: firstName,
  lastName: lastName,
};
console.log(obj9);
// {firstName: 'meet', lastName: 'mehta'}

// in es6 javascript
obj9 = {
  firstName,
  lastName,
};
console.log(obj9);
// {firstName: 'meet', lastName: 'mehta'}
// this is called object property assignment
// if following condition then can write less code in this syntax
// it will read as firstName is the key and its value is stored in variable named firstName



// see destructing in js file now for es6 syntax in arrays



// OBJECT.ENTRIES -> gives array of arrays (inner array of size 2 -> key and value)
let obj10 = {
  a: 34,
  b: 85,
};
console.log(Object.entries(obj10));
/* (2) [Array(2), Array(2)]
0: (2) ['a', 34]
1: (2) ['b', 85]
length: 2
[[Prototype]]: Array(0)
*/



// Array.find method
// find method takes in function as an argument, return a condition to find the element -> if value exists then returns back value, else returns undefined
arr = [3, 5, 4, 1, 7];
console.log(arr.find((element) => element === 3));
// 3
console.log(
  arr.find((element) => {
    return element === 6;
  })
);
// undefined
// not returning in first due to arrow function syntax
// similar method is findIndex
// find also exists for objects



// Object.assign -> cloning (shallow)
obj1 = {
  a: 5,
  b: 10,
};
let obj11 = obj1;
obj11.b = 15;
console.log(obj11, obj1);
// {a: 5, b: 15} {a: 5, b: 15}
// here obj1 also gets updated with 5 and 15
let x = 5;
let y = x;
y = 15;
console.log(x, y);
// 5 15
// here x and y are primitive values and hence behave like this. objects are non primitive and hence cannot be copied like this

// in js when object is created, it is created in stack and is referenced to heap memory. when another object is copied to that object, it is again pointing to same first object or referenced to same first object.
// hence here no new object is created when assigning one object to a new one and it points to the same object
// hence any changes in any of both objects will reflect in both the objects
// cloning means creating new object same as the object mentioned and the new object will point to the new object created

// creating a shallow copy -> method 1 -> using spread operator
obj11 = { ...obj1 };
obj11.b = 30;
console.log(obj1, obj11);
// {a: 5, b: 15} {a: 5, b: 30}

// creating a shallow copy -> method 2 -> using Object.assign()
let obj12 = { a: 3, b: 67 };
let obj13 = Object.assign({}, obj12);
// syntax -> default value of newly created object, and extra parameters that are needed to be added into the new object created
console.log(obj13);
// {a: 3, b: 67}

// deep copy
let obj14 = {
  a: 56,
  b: 45,
  c: {
    d: 34,
    e: 25,
  },
};
let obj15 = Object.assign({}, obj14);
obj15.a = 156;
obj15.c.e = 125;
console.log(obj14, obj15);
/*
{a: 56, b: 45, c: {…}}
a: 56
b: 45
c: {d: 34, e: 125}
 
{a: 156, b: 45, c: {…}}
a: 156
b: 45
c: {d: 34, e: 125}
*/
// here we can see that using assign the outer values were not referenced and were recreated properly, but the nested object was referenced from the parent object

// in order to solve this we use json methods
let obj16 = JSON.parse(JSON.stringify(obj14));
obj16.a = 156;
obj16.c.e = 125;
console.log(obj14, obj16);
/*
{a: 56, b: 45, c: {…}}
a: 56
b: 45
c: {d: 34, e: 125}
 
{a: 156, b: 45, c: {…}}
a: 156
b: 45
c: {d: 34, e: 125}
*/
// first the object is converted to a string, and using parse method a new object is created



// EXERCISE 1
let students = [
  {
    name: "Rama",
    batch: 9,
    likesIcecream: true,
  },
  {
    name: "Irfan",
    batch: 8,
    likesIcecream: false,
  },
  {
    name: "Swapneel",
    batch: 7,
    likesIcecream: false,
  },
  {
    name: "Sampath",
    batch: 8,
    likesIcecream: true,
  },
  {
    name: "Vishwanath",
    batch: 9,
    likesIcecream: true,
  },
];

// Q - Return array of only those students who like ice cream

// Solution 1
let studentsWhoLikeIceCream1 = [];
students.forEach((student) => {
  if (student.likesIcecream) {
    studentsWhoLikeIceCream1.push(student);
  }
});
console.log(studentsWhoLikeIceCream1);
/*
(3) [{…}, {…}, {…}]
    0: {name: 'Rama', batch: 9, likesIcecream: true}
    1: {name: 'Sampath', batch: 8, likesIcecream: true}
    2: {name: 'Vishwanath', batch: 9, likesIcecream: true}
    length: 3
    [[Prototype]]: Array(0)
*/

// solution 1 using arrow functions
let studentsWhoLikeIceCream2 = [];
students.forEach((student) =>
  student.likesIcecream ? studentsWhoLikeIceCream2.push(student) : ""
);
console.log(studentsWhoLikeIceCream2);
// same output

// Solution 2
let studentsWhoLikeIceCream3 = students.filter((student) => {
  return student.likesIcecream;
});
console.log(studentsWhoLikeIceCream3);
// same output

// solution 2 using arrow functions
let studentsWhoLikeIceCream4 = students.filter(
  (student) => student.likesIcecream
);
console.log(studentsWhoLikeIceCream4);
// same output



// EXERCISE 2
let studentsInfo = [
  {
    name: "Vaishnavi",
    batch: 8,
    marks: {
      science: 80,
      social: 70,
      hindi: 80,
      maths: 100,
      english: 90,
    },
  },
  {
    name: "Abhishek",
    batch: 10,
    marks: {
      science: 75,
      social: 75,
      hindi: 62,
      maths: 81,
      english: 52,
    },
  },
  {
    name: "Pappu",
    batch: 10,
    marks: {
      science: 70,
      social: 72,
      hindi: 75,
      maths: 95,
      english: 82,
    },
  },
  {
    name: "Ram",
    batch: 7,
    marks: {
      science: 35,
      social: 24,
      hindi: 22,
      maths: 95,
      english: 67,
    },
  },
  {
    name: "Shyam",
    batch: 9,
    marks: {
      science: 45,
      social: 87,
      hindi: 65,
      maths: 78,
      english: 99,
    },
  },
];

/* Return array of students with following details:
    - name
    - batch
    - average marks secured
*/

let studentsDetails = studentsInfo.map(student => {
    let marksArray = Object.values(student.marks);
    let totalMarks = 0;
    marksArray.forEach(marks => {
        totalMarks += marks;
    })
    let averageMarks = totalMarks / marksArray.length;

    return {
        name : student.name,
        batch : student.batch,
        averageMarks
    }
})

console.log(studentsDetails);
/*
(5) [{…}, {…}, {…}, {…}, {…}]
    0: {name: 'Vaishnavi', batch: 8, averageMarks: 84}
    1: {name: 'Abhishek', batch: 10, averageMarks: 69}
    2: {name: 'Pappu', batch: 10, averageMarks: 78.8}
    3: {name: 'Ram', batch: 7, averageMarks: 48.6}
    4: {name: 'Shyam', batch: 9, averageMarks: 74.8}
    length: 5
    [[Prototype]]: Array(0)
*/


/* Q - Return array of only those students who have an avergae marks > 75 with following details:
	- name
	- batch
	- average marks secured
*/


// EXERCISE 4
let students1 = [
  {
    name: 'Vaishnavi',
    batch: 9,
    marks: {
      science: 80,
      social: 70,
      hindi: 80,
      maths: 100,
      english: 90,
    }
  }, {
    name: 'Abhishek',
    batch: 10,
    marks: {
      science: 75,
      social: 75,
      hindi: 62,
      maths: 81,
      english: 52,
    }
  }, {
    name: 'Pappu',
    batch: 10,
    marks: {
      science: 70,
      social: 72,
      hindi: 75,
      maths: 95,
      english: 82,
    }
  }, {
    name: 'Ram',
    batch: 9,
    marks: {
      science: 35,
      social: 24,
      hindi: 22,
      maths: 95,
      english: 67,
    }
  }, {
    name: 'Shyam',
    batch: 8,
    marks: {
      science: 80,
      social: 70,
      hindi: 80,
      maths: 100,
      english: 90,
    }
  }, {
    name: 'Lakshman',
    batch: 8,
    marks: {
      science: 45,
      social: 87,
      hindi: 65,
      maths: 78,
      english: 99,
    }
  }
]

/* Q - Return array of students with following details:
  - name
  - batch
  - average marks secured

Sort the array based on average marks (Topper first)
if equal, then on basis of batch number (Lowest first)
*/

let studentsDetails1 = students1.map(student => {
  let marksArray = Object.values(student.marks);
  let totalMarks = 0;
  marksArray.forEach(marks => {
      totalMarks += marks;
  })
  let averageMarks = totalMarks / marksArray.length;

  return {
      name : student.name,
      batch : student.batch,
      averageMarks
  }
})

// sorting
// sorting using comparator -> remember if returning negative value then will sort in ascending order
studentsDetails1.sort((element1, element2) => element2.averageMarks - element1.averageMarks);

console.log(studentsDetails1);
/*
(6) [{…}, {…}, {…}, {…}, {…}, {…}]
  0: {name: 'Vaishnavi', batch: 9, averageMarks: 84}
  1: {name: 'Shyam', batch: 8, averageMarks: 84}
  2: {name: 'Pappu', batch: 10, averageMarks: 78.8}
  3: {name: 'Lakshman', batch: 8, averageMarks: 74.8}
  4: {name: 'Abhishek', batch: 10, averageMarks: 69}
  5: {name: 'Ram', batch: 9, averageMarks: 48.6}
  length: 6
  [[Prototype]]: Array(0)
*/

// now if avg marks are same then have to sort based on batch number
// for this create a new array and iterate over studentsDetails1 and compare average marks, if same then compare batch and push the one which has higher batch number.
// or can swap entries inside student details without creating a new array