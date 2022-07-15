/*
Promise states
1. resolve
2. reject
3. pending
*/

//promise takes in function as an argument. That functions again take two functions as argument. so we have to define what to do if promise resolves and what to do when promise gets rejected. While it is executing the promise is pending.

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      //here generally tasks like making a request to a network, initiating a xhr object, any work of bringing resources from a network. if successfull in bringing resources,
      const error = true;
      //generally error variable is used for: we make a request to network and check whether response or status code is 200 or not (successfull or not). if yes than make error as false.
      if (!error) {
        //if no error comes then resolve
        console.log("Your promise has been resolved.");
        resolve();
      } else {
        console.log("Your promise is not resolved.");
        reject('Sorry not fulfilled.');
      }
    }, 2000);
  });
}

func1().then(function() {
    console.log('Thanks for resolving.')
    //then means if function is resolved then what to do. after then the resolve function which we want that it is called, we will right that in then(). resolve() means that same function in then and reject() means same function in catch.
}).catch(function(error) {
    console.log("Very bad you could not resolve this. Reason: " + error);
    //if it is not able to resolve then what to do.
})

//we use promise as substitue to callback function. See 39b_promises.js.