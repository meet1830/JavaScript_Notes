function greet (name, thanks = 'thanks a lot') {
    console.log(`I have found a great friend in you, ${name}. Again thanking you, ${thanks}.`)
    return 1;
}
greet('meet', 'sdf');
greet('meet');

const mygreet = function (name, thanks = 'thanks a lot') {
    let msg = (`I have found a great friend in you, ${name}. Again thanking you, ${thanks}.`)
    return msg;
}//now can use const mygreet as a function

let val = mygreet('dhruvi');
console.log(val);

//can also define function in an object

const myObj = {
    name: "skill",
    game: function() {
        return 'GTA';
    }
}
console.log(myObj.game());

const arr = ['fruit', 'vegetable', 'furniture'];
//for-each loop
arr.forEach(function(element, index) {
    console.log(element, index)
});

console.log('separate for scope');
console.log('separate for scope');

//SCOPE (MOST IMP)

// var i = 234;
// function ui(name) {
//     var i = 9;
//     console.log(i);
//     return `This is a ${name}.`;
// } 
// console.log(ui('meet'), i);

// console.log('separate');


// var i = 234;
// function ui(name) {
//     i = 9;
//     console.log(i);
//     return `This is a ${name}.`;
// } 
// console.log(ui('meet'), i);

// console.log('separate');


// let i = 234;
// function ui(name) {
//     let i = 9;
//     console.log(i);
//     return `This is a ${name}.`;
// } 
// console.log(ui('meet'), i);

// console.log('separate');

// let i = 234;
// function ui(name) {
//     i = 9;
//     console.log(i);
//     return `This is a ${name}.`;
// } 
// console.log(ui('meet'), i);

// console.log('separate');

//HENCE VAR AND LET FUNCTIONS SAME

var i = 352;
if (i) {
    let i = 234;
    console.log(i);
}
console.log(i);
function ui(name) {
    let i = 9;
    console.log(i);
    return `this is a ${name} ui`;
}
let str = ui('meet');
console.log(str);