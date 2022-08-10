//dom = document object model

console.log(this);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

let a = window;
console.log(a);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// window.alert('meet'); //or
// this.alert('meet') //or
alert('meet2'); 
// window is a global object in client side js and hence no need to write window.alert

prompt("computer destroyed, type your name"); 
// text entered in textbox will be printed in console

confirm('you sure you want to del this page?'); 
// if press ok than prints true and false when clicked cancel

// we are able to use all this alert, prompt, confirm, and also events like mouseover, onclick, etc because of window object. it contains all of the above mentioned as functions inside it

// document is a part of window object
let b = document; 
// window.document
console.log(b);

let c = innerHeight; 
// window.inn..

let d = innerWidth; 
// change height and width of window using mouse and the value changes

console.log(c, d);

let e = outerHeight; 
// of whole window, inner height only of html area (area without console tab)

console.log(e);

let f = scrollX, g = scrollY;
console.log(f, g); 
// go to any page and in console type scrollx scrolly and get scroll values after scrolling

let h = location;
console.log(h);

// in any page in console type
// location.href and get url of that page
// location.reload and it reloades the page
// location.href = "https://www.google.com" and it goes to that page

let i = location.toString(); 
//get location of website in string form

console.log(i);

// on any page type
// history.length
// history.go(-1) --> reloads previous page 
// +1 and forward one page works same like back and forward buttons in browser