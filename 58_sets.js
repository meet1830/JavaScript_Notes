//set stores unique values 
let mySet = new Set();
console.log(mySet);
// Set(0) {size: 0}

//adding values to the set
mySet.add('this');
mySet.add('my name');
mySet.add('this');
console.log(mySet);
//here when again added this the size of set remains same as before: 2. set prevents values from repeating and just stores unique values.

mySet.add(34);
mySet.add(true);

let obj = {
    name: 'Meet',
    language: 'Js',
    next: 'projects'
}
mySet.add(obj);
//stores it as an object

let meet = () => {
    console.log('my name is Meet');
}
mySet.add(meet);
//stores it as a string

console.log(mySet);
/*
Set(6) {'this', 'my name', 34, true, {…}, …}
[[Entries]]
0: "this"
1: "my name"
2: 34
3: true
4: Object
5: () => { console.log('my name is Meet'); }
size: 6
*/

//set can also be defined and initialized using constructor as
mySet = new Set([3, 5, true, {a:5, b:6}, 'meet']);
console.log(mySet);

//Use of sets: whenever need a unique value from an array, then do not loop, then check and then receive that value instead define a set and execute set constructor on it.

console.log(mySet.size);
// 6

console.log(mySet.has(3));
// true
// does mySet set has value 3.

mySet.delete(3);

// delete an object from a set
mySet.forEach((element) => {
    if (element.a) {
        mySet.delete(element);
    }
});
//here whole object will get deleted and not only a element from the object.

console.log(mySet);

// when added or deleted elements in set and printed in console at different lines in code, google chrome always shows updated values in console.

//iterating a set
for (let item of mySet) {
    console.log(item);
}
// 5, true, meet

mySet.forEach((item) => {
    console.log(item);
})
// 5, true, meet

// Quiz: can we use Array.from(mySet)to convert set to array? -> Yes

//can be used to remove duplicate elements from array by first converting array into set and then vice versa.

const set3 = new Set([
    3, 
    true, 
    "Meet Mehta", 
    undefined, 
    false, 
    434, 
    {
        name: "meet", 
        age: 22, 
        status: () => {
            console.log("Will soon land a job");
        }
    }
]);

const obj2 = {
    name : "Rakesh Mehta",
    age : 50,
    status : true
};

set3.add(obj2);

set3.delete(obj2);
// works for object if we have reference for it, that is we can identify object by its name obj2.

set3.delete(false);

set3.delete("Meet Mehta");
// works, if written "MeetMehta" then will not give any error will just ignore

set3.delete(
    {
        name: "meet", 
        age: 22, 
        status: () => {
            console.log("Will soon land a job");
        }
    }
);
// will not work and will ignore

console.log(set3);
// Set(5) {3, true, undefined, 434, {…}}