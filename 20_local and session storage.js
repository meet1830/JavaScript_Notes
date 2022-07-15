//in browser tab, go to applications and then local and session storage. it will be empty as of now
//also can verify by typing window.local storage in console.
//to create storage 
//key value pairs
localStorage.setItem('Name', 'Meet'); //setitem function of window.localstorage 
//now window.localstorage shows length 1
console.log(window.localStorage.Name);
localStorage.setItem('Name2', 'Mehta');

//to retrieve an item from local storage
let name = localStorage.getItem('Name2'); //if value in getitem argument does not exist, then returns null value
console.log(name);

//if want to clear local storage
// localStorage.clear();

//to remove a particular item
localStorage.removeItem('Name2');
console.log(window.localStorage);

//limitation - cannot add arrays, objects as items
//if we add then converts to string and saves 
//to overcome the limitation

// //converts to string demonstration
// let impArray = ['adrak', 'pyaz', 'bhindi'];
// localStorage.setItem('sabzi', impArray);
// console.log(localStorage.getItem('sabzi')); //converts to string. same in applications->localstorage

//workaround
let impArray = ['adrak', 'pyaz', 'bhindi'];
localStorage.setItem('sabzi', JSON.stringify(impArray));
let game = JSON.parse(localStorage.getItem('sabzi'));
console.log(game, typeof game); //if want to remove or add element than have to use string functions which is timetaking than this one

//every function for session storage remains same as local storage but after the browser is closed, session storage gets deleted but local storage remains.

localStorage.clear();