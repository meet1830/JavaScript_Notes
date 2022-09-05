// in inspect elements, go to applications and then local and session storage. it will be empty as of now
// also can verify by typing window.local storage in console.
// to create storage 
// typeof -> object -> key value pairs

localStorage.setItem('Name', 'Meet'); 
// setitem function of window.localstorage 
// now window.localstorage shows length 1

console.log(typeof window.localStorage);
// object

console.log(window.localStorage.Name);
// Meet

console.log(typeof window.localStorage.Name);
// string

localStorage.setItem('Name2', 'Mehta');

// to retrieve an item from local storage
let name = localStorage.getItem('Name2'); 
console.log(name);

// if value in getitem argument does not exist, then returns null value

// if want to clear local storage
localStorage.clear();

//to remove a particular item
localStorage.removeItem('Name2');
console.log(window.localStorage);

// limitation - cannot add arrays, objects as items
// if we add then converts to string and saves 
// to overcome the limitation

// converts to string demonstration
let impArray = ['adrak', 'pyaz', 'bhindi'];
localStorage.setItem('sabzi', impArray);
console.log(localStorage.getItem('sabzi')); 
// adrak,pyaz,bhindi
// converts to string. same in applications -> localstorage

// workaround
localStorage.setItem('sabzi', JSON.stringify(impArray));
// manually converting array to string and then adding in local storage. hence brackets, comma in array are in the string

let game = JSON.parse(localStorage.getItem('sabzi'));
// use json parse which converts that string back to array

console.log(game, typeof game); 
// array, object
// get array now can apply any array methods

// every website we visit has its own local storage, if getitem on one website will get the key value pair, in other website's console will give null

// every function for session storage remains same as local storage but after the browser is closed, session storage gets deleted but local storage remains.

sessionStorage.clear();