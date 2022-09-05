//pretend this is coming fom server as a response.
//if for example if response coming from server is not undefined then we want to throw an error. sometimes to validate if server is sending incorrect response, then we need to throw error.
let a = 'Meet';
a = undefined; 
//does not throw error.
if (a!= undefined) {
    throw new Error('This is not undefined');
    // this will throw a custom error in console
} else {
    console.log('This is defined.');
}

//here first try block is executed and if it returns an error then catch block is executed. all lines of try block untill error are also executed and once encontered and returned error catch block is executed and in both above case we are not getting syntax error.
//USE OF TRY CATCH BLOCK - we want that our code does not stop the execution due to an error that is why try catch block is used. 
try {
    // ksfkwegfewg
    console.log('We are inside try block');
    fjklffd();
} catch (error) {
    console.log('Are you okay?');
    console.log(error);
    // ReferenceError: fjklffd is not defined
    // we can also print the error that the catch block catched, in form of string in console. here it is giving reference error. if we write something like
    // null.console
    // then it will output typeError that null is not defined.
    console.log(error.name);
    // ReferenceError
    // type of or name of error
    console.log(error.message);
    // fjklffd is not defined
    // also for validation purposes we want to throw error, that this data from the server does not have data in form of a template or something is missing, then error should be thrown so we know where the problem lies in that api.
} finally {
    console.log('Finally we will run this');
    //there is also finally with try and catch block. irrespective of try and catch throwing error or not finally will run. finally will run irrespective of what is in try and catch block.
}
  

// Error handling
/*
Types of errors
1. compile time error -> lexical / syntactical error
2. run time error -> errors during code execution

syntax 
try {
    any code that is probable for run time errors
} catch {
    handling the run time error caught
}
*/

console.log(5 + 5);
// 10

// but what if the input is in the form of a string, then use eval function
console.log(eval('5 + 5'))
// 10
// but not recommended to use eval function cause it has lot of security flaws in it
// if something other is input which eval cannot evaluate then will throw error
// hence using it with try catch block

try {
    eval ('5 + something')
} catch (error) {
    console.log('This was caught by catch block -> ' + error)
}
// This was caught by catch block -> ReferenceError: something is not defined
// if error occurs and catch block needs to execute then it will execute and the execution of the rest of the code will not stop

try {
    eval ('5 + something')
} catch (error) {
    console.log('This was caught by catch block -> ' + error)
} finally {
    // finally runs despite try is executed or catch is executed
    // hence try and finally executes or catch and finally executes
    console.log('This is finally block')
}
/* This was caught by catch block -> ReferenceError: something is not defined
This is finally block */

// if know a pre existing error that can occur and do not want to club it with other errors in catch block then can define and throw our user created error
try {
    let input = -3
    if (input < 0)
        throw new Error ('Only 0 or positive values allowed')
} catch (error) {
    console.log("this was caught by the catch block -> " + error)
}
// this was caught by the catch block -> Error: Only 0 or positive values allowed