//functions revise

function meet1() {
    console.log("This is the best person ever.")
}
meet1();
// This is the best person ever.

const meet2 = function() {
    console.log("This is the best person ever.")
}
meet2();

const meet3 = () => {
    console.log("This is the best person ever.")
}
meet3();



let greet = function() {
    return "Good Morning!";
}

greet();
//this will not print anything in console, will just return.

console.log(greet());
// Good Morning!


greet = () => {
    return "Good Morning!";
}
console.log(greet());


// one line will automatically return
greet = () => 'Good Morning!';
console.log(greet());



greet = () => {name: "meet"};
// returns undefined
console.log(greet());
// undefined


greet = () => ({name: "meet"});
//returns object
//if want to return an object literal, then have to include it in ().


greet = (name) => `Good Morning ${name}`;
console.log(greet("Meet"));
// Good Morning Meet
// for one argument -> if removed () in argument then also will work. 

greet = name => `Good Morning ${name}`;
console.log(greet('Meet'));
// Good Morning Meet

greet = (name, ending) => "good morning " + name + ' ' + ending;
//if more than one argument, then have to include paranthesis
console.log(greet('Meet', 'bye'));
