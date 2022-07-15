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