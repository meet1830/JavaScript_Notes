let [a, b] = [35, 63];
console.log(a, b);
// 35 63

[a, b, c, d] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(a,b,c,d);
// 1 2 3 4

[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(a,b,c,d);
/* 1 2 3 
(10) [4, 5, 6, 7, 8, 9, 10, 11, 12, 13] */
//a=1, b=2, c=3 and other variables are stored as elements of array in d.

({a, b, c} = {a:34, b:465, c:35, d:75, e:63});
console.log(a, b, c);
// 34 465 35

({p, q, r} = {a:34, b:465, c:35, d:75, e:63});
console.log(p, q, r);
// undefined undefined undefined
// variable names should be same as property names

({a, b, c, ...d} = {a:34, b:465, c:35, d:75, e:63});
console.log(a, b, c, d);
// 34 465 35 {d: 75, e: 63}
//other variables are stored in d as an object.

const fruits = ['apples', 'bananas', 'mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);
// apples bananas mangoes

const laptop = {
    model: 'samsung',
    age: '10',
    gender: 'it',
    net: 35352,
    start: () => {console.log('started')}
}

const {model, age, start} = laptop;
console.log(model, age, start);
// samsung 10 () => {console.log('started')}

const laptop2 = {
    model2: 'samsung',
    age2: '10',
    gender2: 'it',
    net2: 35352,
    start2: () => {console.log('started')}
}
const {model2, age2, gender2, net2, start2} = laptop2;
console.log(model2, age2, gender2, net2, start2);
// samsung 10 it 35352 () => {console.log('started')}

start();
// started


let obj1 = {
    a: 5,
    b: 6
}
// conventional method if not want to use obj1.a everytime referring that value
a = obj1.a;
b = obj1.b;
// then can use a and b as variables 

// by destructing new syntax
({
    a,
    b
} = obj1)
console.log(a, b)
// 5 6
// reassigning then need to put inside curly brackets

let obj2 = {
    ab: 5,
    bc: 10
}
let {
    ab,
    bc
} = obj2
console.log(ab, bc)
// 5 10

// variable names should be same as property names in destructuring syntax and hence as a result can reorder values inside it
let obj3 = {ab: -1, bc: 0, cd: 2, de: 3, ef: 23, fg: 43}
let {de, fg, cd} = obj3
// let {ab, de, fg, cd}
// here if ab as property name then will give error as defined for obj2 in destructuring syntax
console.log(de, fg, cd)
// 3 43 2

let obj4 = {hi: -1, ij: 0}
let {hi = 2, ij} = obj4
console.log(hi, ij);
// -1 0
// cannot change values let destructuring, does not give any error

// for arrays
let arr = [5, 10, 15]
let [x, y, z] = arr;
console.log(x, y, z);
// 5 10 15