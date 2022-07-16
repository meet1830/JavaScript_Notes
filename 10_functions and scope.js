function greet (name, thanks = 'thanks a lot') {
    console.log(`I have found a great friend in you, ${name}. Again thanking you, ${thanks}.`)
    return 1;
}

greet('meet', 'sdf');
greet('meet');


const mygreet = function (name, thanks = 'thanks a lot') {
    // 'thanks a lot' default value for argument thanks
    let msg = (`I have found a great friend in you, ${name}. Again thanking you, ${thanks}.`)
    return msg;
}
//now can use const mygreet as a function

let val = mygreet('dhruvi', 'ty');

val = mygreet('dhruvi');
// if not given argument value then will take default value as defined in function

console.log(val);



// can also define function in an object

const myObj = {
    name: "skill",
    game: function() {
        return 'GTA';
    }
}
console.log(myObj.game());
// GTA



const arr = ['fruit', 'vegetable', 'furniture'];

// for-each loop
arr.forEach(function(element, index) {
    console.log(element, index)
});
/*
vegetable 1
furniture 2
*/

console.log('-----------');
console.log('-----------');



//SCOPE (MOST IMP)

var i = 234;
function ui(name) {
    var i = 9;
    console.log(i);
    return `This is a ${name}.`;
} 
console.log(ui('meet'), i);
/*
9
this is a meet. 234
*/
// i defined by var inside fun -> local scope.

console.log('--------');


var j = 234;
function ui_1(name) {
    j = 9;
    console.log(j);
    return `This is a ${name}.`;
} 
console.log(ui_1('meet'), j);
/*
9
This is a meet. 9
*/
// here i inside func modifies the global i value.

console.log('---------');


let k = 234;
function ui_2(name) {
    let k = 9;
    console.log(k);
    return `This is a ${name}.`;
} 
console.log(ui_2('meet'), k);
/*
9
this is a meet. 234
*/
// same behavior as var

console.log('--------');

let l = 234;
function ui_3(name) {
    l = 9;
    console.log(l);
    return `This is a ${name}.`;
} 
console.log(ui_3('meet'), l);
/*
9
This is a meet. 9
*/

console.log('---------');

// let, const has block level scope 
// var has func(global) level scope

var m = 352;
if (m) {
    let m = 234;
    console.log(m);
}
console.log(m);
/*
234
352
*/


function ui_4(name) {
    let n = 9;
    console.log(n);
    return `this is a ${name} ui`;
}
let str = ui_4('meet');
console.log(str);
/*
9
this is a meet ui
*/