let [a, b] = [35, 63];
console.log(a, b);

[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
console.log(a,b,c,d);
//a=1, b=2, c=3 and other variables are stored as elements of array in d.

({a, b, c} = {a:34, b:465, c:35, d:75, e:63});
console.log(a, b, c);

({a, b, c, ...d} = {a:34, b:465, c:35, d:75, e:63});
console.log(a, b, c, d);
//other variables are stored in d as an object.

const fruits = ['apples', 'bananas', 'mangoes'];
[a, b, c] = fruits;
console.log(a, b, c);

const laptop = {
    model: 'samsung',
    age: '10',
    gender: 'it',
    net: 35352,
    start: () => {console.log('started')}
}

const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);
start();