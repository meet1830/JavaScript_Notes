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