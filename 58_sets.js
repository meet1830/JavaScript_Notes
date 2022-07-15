//set stores unique values 
let mySet = new Set();
console.log(mySet);

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

//set can also be defined as
mySet = new Set([3, 5, true, {a:5, b:6}, 'meet']);
console.log(mySet);

//Use of sets: whenever need a unique value from an array, then do not loop, then check and then receive that value instead define a set and execute set constructor on it.

console.log(mySet.size);

console.log(mySet.has(3));
//does mySet set has value 3.

mySet.delete(3);

//how to delete an object from a set???????
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

mySet.forEach((item) => {
    console.log(item);
})

// Quiz: can we use Array.from(mySet)to convert set to array?

//can be used to remove duplicate elements from array by first converting array into set and then vice versa.