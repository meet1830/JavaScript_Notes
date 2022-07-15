//until one condition is not false or true
//for, while, do while 

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

console.log('separate');

let arr = [1,24,36,3,754];
arr.forEach(function(element) {
    console.log(element) //we get the element, and can be used further
});
//same thing conventionally
for (let i=0; i<arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

arr.forEach(function(element, index, array) {
    console.log(element, index, array)
}); //more arguments can be used

let Obj = {
    name: 'Rohandas',
    age: 85,
    type: 'programmer',
    os: 'linux mint'
}
for (let key in Obj) {
    console.log(Obj[key]) //to print key values of objects props
}
for (let key in Obj) {
    console.log(`The ${key} of object is ${Obj[key]}`)
}
//if dealing with objects then can use for loop with 'in'.