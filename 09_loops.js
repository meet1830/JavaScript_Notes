// repeates execution until one condition is not false or true
// for, while, do while 

let k=0;
do {
    if (k === 5) {
        // break;
        k++;
        continue; //if encountered this value dont execute remaining lines of the loop 
        //or skip that iteration
        //6 is not printed
    }
    console.log(k+1);
    k++;
} while (k < 10);

console.log('------------');


let arr = [1,24,36,3,754];
arr.forEach(function(element) {
    // function(element) -> we get the element through this
    console.log(element) 
});
// same thing conventionally
for (let i=0; i<arr.length; i++) {
    const element = arr[i];
    console.log(element);
}


arr.forEach(function(element, index, array) {
    console.log(element, index, array)
}); 
//more arguments can be used, index we get the index of element and through array we get the array as a whole
// output
/*
1 0 (5) [1, 24, 36, 3, 754]
24 1 (5) [1, 24, 36, 3, 754]
33 36 2 (5) [1, 24, 36, 3, 754]
33 3 3 (5) [1, 24, 36, 3, 754]
33 754 4 (5) [1, 24, 36, 3, 754]
*/

// forEach loop
/*
1. Iterate and run the callback for each element (callback -> the function we are passing in as an argument)
2. Cannot manipulate any elements inside callback function (for example do element = element + 2 inside the callback and print array outside the loop then the array will still remain same)
3. Does not return any value
*/

let Obj = {
    name: 'Rohandas',
    age: 85,
    type: 'programmer',
    os: 'linux mint'
}


for (let key in Obj) {
    console.log(Obj[key]);
    // prints values of keys 
}
// to print key values of objects props
/*
Rohandas
85
programmer
linux mint
*/


for (let key in Obj) {
    console.log(`The ${key} of object is ${Obj[key]}`);
}
//if dealing with objects then can use for loop with 'in'.
/*
The name of object is Rohandas
The age of object is 85
The type of object is programmer
The os of object is linux mint
*/