//functions revise

// function meet() {
//     console.log("This is the best person ever.")
// }

// const meet = function() {
//     console.log("This is the best person ever.")
// }

// meet();

const meet = () => {
    console.log("This is the best person ever.")
}
meet();

let greet = function() {
    return "Good Morning!";
}

greet = () => {
    return "Good Morning!";
}

//one line will automatically return
greet = () => 'Good Morning!';

greet = () => {return 'Good Morning!'};
//if want to write return then have to include all in curly braces.

greet = () => {name: "meet"};
//returns undefined
greet = () => ({name: "meet"});
//returns object
//if want to return an object literal, then have to include it in ({..}). if only included between {} then will return undefined.

greet();
//this will not print anything in console, will just return.
console.log(greet());
//this will print in console

greet = (name) => `Good Morning ${name}`;
//for one argument -> if removed () in argument then also will work. 
greet = name => `Good Morning ${name}`;
console.log(greet('Meet'));

greet = (name, ending) => "good morning " + name + ' ' + ending;
//if more than one argument, then have to include paranthesis
console.log(greet('Meet', 'bye'));
