//For-in and for-of loops

let people = ["meet", "dhruvi", "rita", "rakesh", "other people"];

//traditional for loop
for (let index = 0; index < people.length; index++) {
    const element = people[index];
    console.log(element);
}

for (let index in people) {
  console.log(index + " " + people[index]);
}
// 0 meet, 1 dhruvi, ...

for (let index of people) {
  console.log(index);
}
// meet, dhruvi, rita ...



let obj = {
  name: "Meet",
  language: "JavaScript",
  hobbies: "Programming",
};
// console.log(obj);

//iterating the object through traditional for loop
// will print the keys of objects
for (let index = 0; index < Object.keys(obj).length; index++) {
  const element = Object.keys(obj)[index];
  console.log(element);
}

// iterating through values of objects
for (let index = 0; index < Object.values(obj).length; index++) {
    const element = Object.values(obj)[index];
    console.log(element);
}

//iterating the object through for-in loop
//it is used when we want to iterate the object's keys.
// will print all values
for (let key in obj) {
  console.log(obj[key]);
  //here we cannot write obj.key because obj.name, obj.language, obj.hobbies. So here our key is a string so we have to give it with [].
}

// will print all keys
for (let abc in obj) {
  console.log(abc);
}

// for (let index of obj) {
//   console.log(index);
//   console.log(obj[index]);
// } 
// obj not iterable -> gives error



let myString = "This is my string";
// we can use for-in with strings to loop through all the characters
for (let index in myString) {
  console.log(index + " " + myString[index]);
}
// 0 T  1 h  2 i ...

for (let index of myString) {
  console.log(index);
}
// T, h, i, s ...

// Use for in loop when we need to do something with the keys of objects and for of loop when we need to extract elements for an iterable item.