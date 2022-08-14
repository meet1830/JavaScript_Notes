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
        reject('Sorry not fulfilled.');
      }
    }, 2000);
  });
}

func1().then(function() {
    console.log('Call: Thanks for resolving.')
    //then means if function is resolved then what to do. after then the resolve function which we want that it is called, we will right that in then(). resolve() means that same function in then and reject() means same function in catch.
}).catch(function(error) {
    console.log("Call: Very bad you could not resolve this. Reason: " + error);
    //if it is not able to resolve then what to do.
})
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

// syntax
let basicPromise = new Promise(function(resolve,reject) {
  // Producing code which may take some time

  // only one of resolve or reject should be called
  const someCondition = null;
  if (someCondition) 
    resolve("all good")
    // call resolve under setTimeout to mock a server response
  else 
    reject("something went wrong")
  // how to know whether to resolve or reject -> based on producing code
});
// comsuming code -> must wait for a fulfilled promise
basicPromise.then(function(value) {
  console.log('Work done successfully with output ', value);
}, function(error) {
  console.log.apply('Some error occured ', error);
})

// or
// same thing just syntax different
basicPromise.then(function(value) {
  console.log('Work done successfully with output ', value);
}).catch(function(error) {
  console.log('Some error occured ', error);
})

// or can change the above to arrow syntax bc it is cleaner
basicPromise.then(value => {
  console.log('Work done successfully with output ', value);
}).catch(error => {
  console.log('Some error occured ', error);
})

/* States of promises
pending -> undefined
fulfilled -> a result value
rejected -> an error value
*/

// eg of promise is login system facebook -> we enter the email and password. if the email is found in db then returns fulfilled and redirects to feed. if not then shows user not found



// PROMISE CHAIN
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000)
})

p.then(result => {
  console.log(result);
  return result * 2;
}).then(result => {
  console.log(result);
  return result * 3;
}).then(result => {
  console.log(result);
  return result * 4;
})
// output after 3 sec
// 10 20 60


let q = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000)
})

q.then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(result * 2); }, 3000);
  });
}).then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(result * 3); }, 3000);
  });
}).then(result => {
  console.log(result);
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(result * 4); }, 3000);
  });
}).then(result => {
  console.log(result);
})
// 10 20 60 240
// here console.log(result) -> means we are looking at the feed which facebook has loaded, and while we are looking, if keeps loading another feed data



// real life example
const getUser = (userId) => {
  // get a user using a user Id

  return new Promise ((resolve, reject) => {
    console.log('get the user from the database');

    setTimeout(() => {
      resolve ({
        id : userId,
        username : 'rohan'
      })
    }, 2000);
  })
}

const getServices = (user) => {
  // return some services
  
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API`);

    setTimeout(() => {
      resolve(['Email', 'VPN', 'CDN'])
    }, 3000);
  })
}

const servicesCost = (services) => {
  // return the cost of these services

  return new Promise((resolve, reject) => {
    console.log(`Calculate the total service cost of ${services.join(',')}`)

    setTimeout(() => {
      resolve(services.length * 100)
    }, 4000);
  })
}

getUser(100)
  .then(user => console.log(user));
/* {id: 100, username: 'rohan'}
  id: 100
  username: "rohan"
  [[Prototype]]: Object */

getUser(100)
  .then(getServices)
  .then(console.log)
/* get the user from the database
Get the services of rohan from the API
(3) ['Email', 'VPN', 'CDN'] */

// same thing as above
getUser(100) 
  .then(user => {
    getServices(user).then(services => {
      console.log(services);
    })
  })
/* get the user from the database
Get the services of rohan from the API
(3) ['Email', 'VPN', 'CDN'] */

getUser(100)
  .then(getServices)
  .then(servicesCost)
  .then(console.log)
/* get the user from the database
Get the services of rohan from the API 
Calculate the total service cost of Email, VPN, CDN 
300 */



// EXERCISE -> see html file for this
// What is the total run time of the videos? Run time for each video is included under date-time 

const timeNodes = Array.from(document.querySelectorAll('[data-time]'))

console.log(timeNodes)

const times = timeNodes.map(node=>node.dataset.time)
console.log(times);
// dataset is a property of timenodes. We can find it in console of timeNodes. We dont need to know this just google it if needed to find out.

let totalSeconds = 0;
for (let i = 0; i < times.length; i++) {
  // const hh = times[i].split(':')[0];
  // const min = times[i].split(':')[1];

  // or use destructuring
  const [hh, min] = times[i].split(':');

  totalSeconds += hh*60*60 + min*60;
}

const finalHours = Math.floor(totalSeconds / 3600);
const hoursLeft = totalSeconds / 3600 - finalHours;

const finalMinutes = Math.floor(hoursLeft * 60);

document.querySelector('.total').innerHTML += `${finalHours} : ${finalMinutes}`;