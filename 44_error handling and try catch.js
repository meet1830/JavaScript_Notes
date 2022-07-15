//pretend this is coming fom server as a response.
//if for example if response coming from server is not undefined then we want to throw an error. sometimes to validate if server is sending incorrect response, then we need to throw error.
let a = 'Meet';
a = undefined; //does not throw error.
if (a!= undefined) {
    throw new Error('This is not undefined');
} else {
    console.log('This is defined.');
}

//here first try block is executed and if it returns an error then catch block is executed. all lines of try block untill error are also executed and once encontered and returned error catch block is executed and in both above case we are not getting syntax error.
//USE OF TRY CATCH BLOCK - we want that our code does not stop due to an error that is why try catch block is used. 
try {
    // ksfkwegfewg
    console.log('We are inside try block');
    fjklffd();
} catch (error) {
    console.log('Are you okay?');
    console.log(error);
    // we can also print the error that the catch block catched, in form of string in console. here it is giving reference error. if we write something like
    // null.console
    //then it will output typeError that null is not defined.
    console.log(error.name);
    // type of or name of error
    console.log(error.message);
    // also for validation purposes we want to throw error, that this data from the server does not have data in form of a template or something is missing, then error should be thrown so we know where the problem lies in that api.
} finally {
    console.log('Finally we will run this');
    //there is also finally with try and catch block. irrespective of try and catch throwing error or not finally will run. finally will run irrespective of what is in try and catch block.
}
  