//dom = document object model
let a = window;
console.log(a);

// window.alert('meet'); //or
alert('meet2'); 
// window is a global object in client side js and hence no need to write window.alert

prompt("computer destroyed, type your name"); 
// text entered in textbox will be printed in console

confirm('you sure you want to del this page?'); 
// if press ok than prints true and false when clicked cancel

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