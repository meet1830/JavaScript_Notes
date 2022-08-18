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
      //here generally tasks like making a request to a network, initiating a xhr object, any work of bringing resources from a network. if unsuccessfull in bringing resources,
      const error = true;
      //generally error variable is used for: we make a request to network and check whether response or status code is 200 or not (successfull or not). if yes than make error as false.
      if (!error) {
        //if no error comes then resolve
        console.log("Function: Your promise has been resolved.");
        resolve();
      } else {
        console.log("Function: Your promise is not resolved.");
        reject("Sorry not fulfilled.");
      }
    }, 2000);
  });
}

func1()
  .then(function () {
    console.log("Call: Thanks for resolving.");
    //then means if function is resolved then what to do. after then the resolve function which we want that it is called, we will right that in then(). resolve() means that same function in then and reject() means same function in catch.
  })
  .catch(function (error) {
    console.log("Call: Very bad you could not resolve this. Reason: " + error);
    //if it is not able to resolve then what to do.
  });
/*
Function: Your promise is not resolved.
Call: Very bad you could not resolve this. Reason: Sorry not fulfilled.
*/

//we use promise as substitute to callback function. See 39b_promises.js.

/*
promises are code which say that they promise a result

'Producing code' -> is a code that can take some time
'Consuming code' -> is a code that must wait for the result
*/

/*
* Promises
-> Handle asynchronous code
-> can be used to avoid callback hell scenario (using promise chaining)
-> Two properties -> state(3 states) and result (result only in case of resolved, reject) 

* Promising states
1. Pending
2. Resolved (fulfilled)
3. Rejected

* 2 Ways
-> Pending -> resolved -> settled
-> pending -> rejected -> settled

* let promise = new Promise ((resolve, reject) => {
  // 'resolve' method is for fulfilling a promise (can send a resolved message -> optional)
  // 'reject' method is for rejecting a promise (can send a rejected message -> optional)
})

* Handle a promise
.then method callback -> for executing in case the promise was resolved (can have a parameter for resolved message -> optional)
.catch method callback -> for executing in case the promise was rejected (can have a parameter for rejected message -> optional)
*/

let promise = new Promise((resolve, reject) => {
  resolve();
  // reject();
});
promise
  .then(() => {
    console.log("Promise was resolved");
  })
  .catch(() => {
    console.log("Promise was rejected");
  });
/* -> if resolve is uncommented
Promise was resolved
-> if reject is uncommented
Promise was rejected */

let promise2 = new Promise((resolve, reject) => {
  resolve("Hey I was resolved");
  // reject('Hey i was rejected');
});
promise2
  .then((resolvedMessage) => {
    console.log("I was resolved with the message: " + resolvedMessage);
  })
  .catch((rejectedMessage) => {
    console.log("I was rejected with the message: " + rejectedMessage);
  });
/* -> if resolve is uncommented
I was resolved with the message: Hey I was resolved
-> if reject is uncommented
I was rejected with the message: Hey i was rejected
*/

// using promise is also possible using second callback of .then method
promise2.then(
  (resolvedMessage) => {
    console.log("I was resolved with the message: " + resolvedMessage);
  },
  (rejectedMessage) => {
    console.log("I was rejected with the message: " + rejectedMessage);
  }
);

// working with promise which is returning promise
const promise3 = () => {
  return new Promise((resolve, reject) => {
    reject("Hey, I was rejected!");
  });
};
// here our promise is inside a function hence first call function then use .then.
promise3().then(
  (resolvedMessage) => {
    console.log("I was resolved with the message: " + resolvedMessage);
  },
  (rejectedMessage) => {
    console.log("I was rejected with the message: " + rejectedMessage);
  }
);
// I was rejected with the message: Hey, I was rejected!
// Can reject promise without using catch, by passing a second callback in .then

// syntax
let basicPromise = new Promise(function (resolve, reject) {
  // Producing code which may take some time

  // only one of resolve or reject should be called
  const someCondition = null;
  if (someCondition) resolve("all good");
  // call resolve under setTimeout to mock a server response
  else reject("something went wrong");
  // how to know whether to resolve or reject -> based on producing code
});
// comsuming code -> must wait for a fulfilled promise
basicPromise.then(
  function (value) {
    console.log("Work done successfully with output ", value);
  },
  function (error) {
    console.log("Some error occured ", error);
  }
);

// or
// same thing just syntax different
basicPromise
  .then(function (value) {
    console.log("Work done successfully with output ", value);
  })
  .catch(function (error) {
    console.log("Some error occured ", error);
  });

// or can change the above to arrow syntax bc it is cleaner
basicPromise
  .then((value) => {
    console.log("Work done successfully with output ", value);
  })
  .catch((error) => {
    console.log("Some error occured ", error);
  });

/* States of promises
pending -> undefined
fulfilled -> a result value
rejected -> an error value
*/

// eg of promise is login system facebook -> we enter the email and password. if the email is found in db then returns fulfilled and redirects to feed. if not then shows user not found

/* Promise chain
-> when you return a value from .then() method - returned value again becomes a promise which needs to be handled by .then() chaining 
1. When first .then handler returns another promise which needs to be handled by chaining another .then()
2. return any data from first .then() and that data can be caught by the second .then() handler which is chained to the first one */

const promise4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hey, I was resolved!");
    }, 2000);
  });
};

console.log(promise4());
/* Promise {<pending>}
  [[Prototype]]: Promise
  [[PromiseState]]: "fulfilled"
  [[PromiseResult]]: "Hey, I was resolved!" */

// promise will take 2 sec to resolve
promise4()
  .then((resolvedMessage) => {
    return "Updated resolved match";
  })
  .then((resolvedMessage) => {
    console.log(resolvedMessage);
  })
  .catch((rejectedMessage) => {
    console.log("I was rejected with the message: " + rejectedMessage);
  });
// Updated resolved match
// here first .then returns a promise, hence need to include another .then to resolve it -> case 1. even if we are returning a string data, it will consider that we are returning a promise

let a = 5,
  b = 10;
const promise5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a === 5) {
        resolve("A + ");
      } else if (b === 10) {
        resolve("A + ");
      } else {
        reject("NA");
      }
    }, 2000);
  });
};
// promise will be resolved if either a = 5 OR b = 10
promise5()
  .then((resolvedMessage) => {
    return resolvedMessage + "B + ";
  })
  .then((resolvedMessage) => {
    return resolvedMessage + "C";
  })
  .then((resolvedMessage) => {
    console.log(resolvedMessage);
  })
  .catch((rejectedMessage) => {
    console.log("I was rejected with the message: " + rejectedMessage);
  });
// after 2 seconds A+ is the resolved message that is returned, that message will be caught by first .then. we are not accessing the value we are returning it. hence B+ is added to it and returned. No +c is added to it -> case 2
// A + B + C


// converting the callback hell into promises
function executeOrder(callback) {
  console.log("Order placed");

  setTimeout(() => {
    console.log("Chef received the order and started preparing");

    setTimeout(() => {
      console.log("pizza sauce added");

      setTimeout(() => {
        console.log("first layer of cheese added");

        setTimeout(() => {
          console.log("toppings added");

          setTimeout(() => {
            console.log("second layer of cheese added");

            setTimeout(() => {
              console.log("pizza baked!");

              setTimeout(() => {
                console.log("oregano added and packed");

                setTimeout(() => {
                  console.log("pizza received at counter");

                  callback();
                }, 2000);
              }, 8000);
            }, 15000);
          }, 5000);
        }, 12000);
      }, 5000);
    }, 10000);
  }, 2000);
}
/*
Order placed
Chef received the order and started preparing
pizza sauce added
first layer of cheese added
toppings added
second layer of cheese added
pizza baked!
oregano added and packed
pizza received at counter
The order is ready and handed over to the zomato guy!
*/


// defining individual promises for each task
// detecting async actions using settimeout and then use callbacks, promises, async await to handle them. we did it using callbacks but ended up in a callback hell hence now doing it through promises. so first task is to segregate each and every task and create a new promise for it. not doing it individually using single single promises, but using functions
const chefReceivedTheOrderAndStartedPreparing = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Chef received the order and started preparing");
      resolve();
    }, 2000);
  })
}
const pizzaSauceAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("pizza sauce added");
      resolve();
    }, 10000);
  })
}
const firstLayerOfCheeseAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first layer of cheese added");
      resolve();
    }, 5000);
  })
}
const toppingsAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("toppings added");
      resolve();
    }, 12000);
  })
}
const secondLayerOfCheeseAdded = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("second layer of cheese added");
      resolve();
    }, 5000);
  })
}
const pizzaBaked = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("pizza baked!");
      resolve();
    }, 15000);
  })
}
const oreganoAddedAndPacked = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("oregano added and packed");
      resolve();
    }, 8000);
  })
}
const packageReceivedAtCounter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("pizza received at counter");
      resolve();
      // promise is resolved after 2 sec and pizza received at counter is logged
    }, 2000);
  })
}

// dont mistake return for resolve or reject -> the code will not be blocked whenever it encoutners resolve or reject which is the case for return. whenever encountered resolve or reject then it indicates that now the promise is no longer in a pending state and the value has been received which will persist in the resolved. hence after resolving we can perform some calculations. resolve does also not call .then method. it just understands that the promise is no longer in a pending state and the rest of the code execution happens parallely

function executeOrder() {
  console.log('Order placed');

  chefReceivedTheOrderAndStartedPreparing()
  .then(pizzaSauceAdded)
  .then(firstLayerOfCheeseAdded)
  .then(toppingsAdded)
  .then(secondLayerOfCheeseAdded)
  .then(pizzaBaked)
  .then(oreganoAddedAndPacked)
  .then(packageReceivedAtCounter)
  // here the function in .then already returns a promise hence no need to write resolve reject in .then
  // above last one also returns a promise hence the promise is still in pending state
  .then(() => console.log('The order is ready and handed over to the zomato delivery guy!'))
  .catch((err) => console.log(err));
}
// here in all .then not calling the function but just replacing the return promise code with a function name



let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});

p.then((result) => {
  console.log(result);
  return result * 2;
})
  .then((result) => {
    console.log(result);
    return result * 3;
  })
  .then((result) => {
    console.log(result);
    return result * 4;
  });
// output after 3 sec
// 10 20 60

let q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

q.then((result) => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(result * 2);
    }, 3000);
  });
})
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 3);
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 4);
      }, 3000);
    });
  })
  .then((result) => {
    console.log(result);
  });
// 10 20 60 240
// here console.log(result) -> means we are looking at the feed which facebook has loaded, and while we are looking, if keeps loading another feed data

// real life example
const getUser = (userId) => {
  // get a user using a user Id

  return new Promise((resolve, reject) => {
    console.log("get the user from the database");

    setTimeout(() => {
      resolve({
        id: userId,
        username: "rohan",
      });
    }, 2000);
  });
};

const getServices = (user) => {
  // return some services

  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API`);

    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3000);
  });
};

const servicesCost = (services) => {
  // return the cost of these services

  return new Promise((resolve, reject) => {
    console.log(`Calculate the total service cost of ${services.join(",")}`);

    setTimeout(() => {
      resolve(services.length * 100);
    }, 4000);
  });
};

getUser(100).then((user) => console.log(user));
/* {id: 100, username: 'rohan'}
  id: 100
  username: "rohan"
  [[Prototype]]: Object */

getUser(100).then(getServices).then(console.log);
/* get the user from the database
Get the services of rohan from the API
(3) ['Email', 'VPN', 'CDN'] */

// same thing as above
getUser(100).then((user) => {
  getServices(user).then((services) => {
    console.log(services);
  });
});
/* get the user from the database
Get the services of rohan from the API
(3) ['Email', 'VPN', 'CDN'] */

getUser(100).then(getServices).then(servicesCost).then(console.log);
/* get the user from the database
Get the services of rohan from the API 
Calculate the total service cost of Email, VPN, CDN 
300 */

// EXERCISE -> see html file for this
// What is the total run time of the videos? Run time for each video is included under date-time

const timeNodes = Array.from(document.querySelectorAll("[data-time]"));

console.log(timeNodes);

const times = timeNodes.map((node) => node.dataset.time);
console.log(times);
// dataset is a property of timenodes. We can find it in console of timeNodes. We dont need to know this just google it if needed to find out.

let totalSeconds = 0;
for (let i = 0; i < times.length; i++) {
  // const hh = times[i].split(':')[0];
  // const min = times[i].split(':')[1];

  // or use destructuring
  const [hh, min] = times[i].split(":");

  totalSeconds += hh * 60 * 60 + min * 60;
}

const finalHours = Math.floor(totalSeconds / 3600);
const hoursLeft = totalSeconds / 3600 - finalHours;

const finalMinutes = Math.floor(hoursLeft * 60);

document.querySelector(".total").innerHTML += `${finalHours} : ${finalMinutes}`;



let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 3000);
})

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 5000);
})

// p1
// .then((resolvedMessage) => console.log(resolvedMessage))
// .catch((err) => console.log(err));

// p2
// .then((resolvedMessage) => console.log(resolvedMessage))
// .catch((err) => console.log(err));

// p3
// .then((resolvedMessage) => console.log(resolvedMessage))
// .catch((err) => console.log(err));
/* Promise 1 resolved
Promise 2 resolved
Promise 3 resolved */

// treating every promise individually. if we want to know that all the promises are resolved then need to use promise.all
/*
- Will only resolve if 'ALL' the promises gets resolved (can be related to && operator)
if even one of them rejects then will go to catch part
- Overall resolved value will be an array of resolved values of all promises as can be seen in output
- rejected value will be the first rejected promise value
- Overall promise resolve time = resolve time of promise which takes the longest time */
Promise.all([p1, p2, p3])
.then((resolvedMessage) => console.log(resolvedMessage))
.catch((err) => console.log(err));
/* (3) ['Promise 1 resolved', 'Promise 2 resolved', 'Promise 3 resolved']
  0: "Promise 1 resolved"
  1: "Promise 2 resolved"
  2: "Promise 3 resolved"
  length: 3
  [[Prototype]]: Array(0) 
*/
// after 5 seconds will get this output

// if one of the promise gets rejected
let p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4 resolved");
  }, 1000);
})

let p5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise 5 rejected");
  }, 3000);
})

let p6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 6 resolved");
  }, 5000);
})
Promise.all([p4, p5, p6])
.then((resolvedMessage) => console.log(resolvedMessage))
.catch((err) => console.log(err));
// Promise 5 rejected
// output after 3 seconds

// also if p5 and p6 both were rejected then also same output will break out whenever a promise is rejected and will output only that err through catch block cause will not execute promises after that 

// also if all promises having different output messages and one of the promises (not the last one) has the largest timeout value, then the order of the printing resolved messages in the array does not change and will be the same order as given input in promise.all argument


// now if we want that any one of the promise gets resolved then ok then use promise.any -> similar to OR || condition
/**
 * will resolve even if a single promise gets resolved (can be related to || operator)
 * overall resolved value = resolved value of the first resolved promise
 * rejected promises will be skipped, if all promises are rejected, promise.any will be rejected -> catch handler will work
 * overall promise resolve time = resolve time of promise which takes the shortest time
 */
Promise.any([p4, p5, p6])
.then((resolvedMessage) => console.log(resolvedMessage))
.catch((err) => console.log(err));
// promise 4 resolved
// it will break out of any one of the promises gets resolved (the fastest one)

// if all promises are rejected then error will print 
// AggregateError: All promises were rejected