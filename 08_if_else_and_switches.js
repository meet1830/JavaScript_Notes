const age = '65';

if (age==19) {
    console.log('Age is 19');
}
else {
    console.log('Age is not 19');
}


if (age==19) {
    console.log('Age is 19');
}
else if (age == 65) {
    console.log('Age is 65 but type not same');
}
else if (age === 65) {
    // compares both datatype and value
    console.log('Age is 65 and type same');
}
else {
    console.log('Age is not 19');
}

// also != --> value is not matching
// !== --> value and type are not matching


/*
if (vari) {
    console.log('vari is not defined');
}
else {
    console.log('it is defined');
}
// -> if checked like this then and if vari is not defined then will throw error and program will stop. hence check like this
*/
let vari = 64;
if (typeof vari !== undefined) {
    console.log('vari is defined')
}
else {
    console.log('vari is not defined')
}


// boolean
let doesDrive = false;
if (doesDrive) {
    console.log('you can drive')
}
else {
    console.log('you cannot drive')
}

// && both condition true
// || anyone or both true 


// ternary operator
let aged = 56;
console.log(aged == 45? 'age is 45' : 'age is not 45');

aged = 34;
// switch statements
switch (aged) {
    case 34:
        console.log("you are 34");
        // break;
    case 53:
        console.log('you are 53');
        // break;
    default:56
        console.log("none of above");
        // break;
}
// if one of condition is true and if want to execute remaining statements then remove break -> will just execute remaining conditions without checking them
