async function meet() {
  console.log("inside function");
  return "meet";
}
let a = meet();
console.log(a);
//if we include an async before regular function then it will return a promise.
//returns promise resolved and value is meet.

console.log("before assigning func");
a = meet();
console.log("before calling func");
console.log(a);
console.log("after calling func");
//here the flow of execution remains same for both when async included or not.

//but since it returns promise we can wait for its then function to execute. in fetch api, we saw that we had to include 2 'then' functions, but using async we do not need to include two.

async function meet2() {
  console.log("inside function");
  const response = await fetch("https://api.github.com/users");
  //above line means we are waiting till response from fetch api is received. now fetch also returns a promise. so we are awaiting for a promise which response gets and then async returns a promise.
  console.log("before response");
  const users = await response.json();
  //now await for json of response. we know that response.json() also returns a promise.
  console.log("users resolved.");
  return users;
}
console.log("Before calling meet2");
a = meet2();
console.log("After calling meet2");
console.log(a);
//so now a has a promise in it. so we need to specify a then func. so async is a promise. and we are awaiting it for resolving two more promises inside it.
a.then((data) => console.log(data));
console.log("last line of this js file.");

/* explanation
first before calling meet2 prints. after than it into async function and prints inside function. when it encounters first await, it will kind off bypass that function and execute the remaining statements first, that means it exists the function then prints after calling meet2 prints. after then in console.log(a) should return a promise but since it is not resolved yet it prints pending. after than a.then(), which means if resolved then, now it also be not executed since a is yet to be resolved. then prints last line of js file. now since all other work is completed, it goes back to response. it is resolved and hence after that before response it printed. after then again an await is encountered. since no other work it there it resolves it into users. then it prints users resolved. then users are resolved. hence async promise is resolved a.then is executed and hence a is printed. and hence we got rid of the two then functions in fetch api. 
*/



/* * Async -> Attach this keyword to any function -> to make the code asynchronous / handle async code 
* Await -> waits for the resolved state of promise (returns resolved state of promise).  
* await should always be used inside async function
* use if want to make the rest of the code wait */

let promise = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
})
promise.then((resovledMessage) => {
  console.log('Resolved ' + resovledMessage);
}).catch((err) => {
  console.log('rejected ' + err);
})

// how to make different types of functions async
async function ab () {}
const abc = async function () {}
const abcd = async () => {}

// equivalent representation handling promises using async await
let promise1 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 1 resolved');
  }, 1000);
})

const handlePromise1 = async function () {
  const resolvedMessage = await promise1;
  console.log(resolvedMessage);
}

handlePromise1();
// Promise 1 resolved
// first create an async function. now use try catch block. but here not using it. promises are async in nature. and async keyword can handle async code. so other way to handle this is await keyword. hence use await keyword followed by promise name. through this it will wait for the promise to get resolved. after then only whatever the resovled message is will be provided. also function is defined hence need to call it to work.


// if the promise was rejected then for the handlepromise1 syntax it will give an error
let promise2 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 2 rejected!');
  }, 1000);
})

const handlePromise2 = async function () {
  const resolvedMessage = await promise2;
  console.log(resolvedMessage);
}

handlePromise2();
// Uncaught (in promise) Promise 2 rejected!
// just like promise.any get error message when all promises get rejected. await makes it greedy, and waits only for the resolved scenario. if it does not get that then will consider that as an error

// in this case to handle errors use try and catch block
let promise3 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    reject('Promise 3 rejected!');
  }, 1000);
})
const handlePromise3 = async function () {
  try {
    const resolvedMessage = await promise3;
    console.log('[Resolved] ' + resolvedMessage);
  }
  catch (rejectedMessage) {
    console.log('[Rejected] ' + rejectedMessage);
  }
}
handlePromise3();
// [Rejected] Promise 3 rejected!
// if not called function and just run then will get same error message as promise2


// if have 2 promises and want to handle them one after another using async await
// if handling using .then and .catch then we used promise chaining
// after promise 4 is completed then only start handling promise 5
// can take an example that promise 4 is fetching data and promise 5 is processing the data. we can only process the data after we have fetched data in promise 4
let promise4 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 4 resolved!');
  }, 4000);
})

let promise5 = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise 5 resolved!');
  }, 8000);
})

const handlePromise4 = async function () {
  try {
    const resolvedMessage4 = await promise4;
    console.log('[Resolved promise 4] ' + resolvedMessage4);
    const resolvedMessage5 = await promise5;
    console.log('[Resolved promise 5] ' + resolvedMessage5);
  }
  catch (rejectedMessage) {
    console.log('[Rejected] ' + rejectedMessage);
  }
}
handlePromise4();
// [Resolved promise 4] Promise 4 resolved!
// [Resolved promise 5] Promise 5 resolved!
// after 4 seconds promise 4 resolved and again after 4 seconds promise 5 resolved
// if promise 4 has higher time then promise 5 say 8 seconds and 4 seconds, then after 8 seconds both output will be printed simultaneously


// taking real life example -> retrieve data from server and then process it
let fetchDataFromServer = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('[status code 200] Data fetched successfully');
  }, 4000);
})

let processData = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Processed data successfully');
  }, 8000);
})

const fetchAndProcessData = async function () {
  try {
    const resolvedMessage1 = await fetchDataFromServer;
    console.log('[Resolved fetchDataFromServer] ' + resolvedMessage1);

    const resolvedMessage2 = await processData;
    console.log('[Resolved processData] ' + resolvedMessage2);
  }
  catch (err) {
    console.log('[Rejected] ' + err);
  }
}

// fetchAndProcessData();
// [Resolved fetchDataFromServer] [status code 200] Data fetched successfully
// [Resolved processData] Processed data successfully
// here if any one of them is rejected then will only print catch block message

// both the promises execute at the same time both will take 8 seconds to complete. but in our example we can start executing the second promise only after the first promise is completed. 
// for this return the promise through a function
let fetchDataFromServer1 = () => new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('[status code 200] Data fetched successfully');
  }, 4000);
})

let processData1 = () => new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Processed data successfully');
  }, 8000);
})

const fetchAndProcessData1 = async function () {
  try {
    console.log('Fetching data now...');
    const data = await fetchDataFromServer1();
    console.log(data);
    
    console.log('Processing data now...');
    const processedData = await processData1();
    console.log(processedData);

    console.log('Data fetched and processed');
  }
  catch (err) {
    console.log('[Rejected] ' + err);
  }
}

fetchAndProcessData1();
/* Fetching data now...
[status code 200] Data fetched successfully
Processed data successfully
Data fetched and processed */
// same output but after 4 seconds first promise is finished it will take 8 seconds to finish the second one because it started executing when called, which is after the first promise was resolved
// here if first one is rejected, then catch block message will be printed, but if first one is resolved and second one if rejected then resolve message for first is printed and then catch block message is printed


// chaining using async await
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
    }, 2000);
  })
}

const executeOrder = async () => {
  try {
    console.log('Order placed');
    await chefReceivedTheOrderAndStartedPreparing();
    await pizzaSauceAdded();
    await firstLayerOfCheeseAdded();
    await toppingsAdded;
    await secondLayerOfCheeseAdded();
    await pizzaBaked();
    await oreganoAddedAndPacked();
    await packageReceivedAtCounter();
    console.log('The order is ready and handed over to the zomato delivery guy!');
  }
  catch (err) {
    console.log(err);
  };
}