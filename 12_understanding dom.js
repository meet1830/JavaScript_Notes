let a = document;
console.log(a);
// dom is the structural representation of our html document. and it is an object and has properties.
// gets whole html of page including head, body

a = document.all; 
console.log(a);
// get all tags used in html for document and it looks like array but isn't therefore arrays foreach etc cannot be applied here will give error

a = document.body;
console.log(a);
// gets body of html

a = document.forms;
console.log(a);

a = document.forms[0];
// here only 1 form so returns that
// get forms from any website in the form of html collection
console.log(a);

// a.forEach(function(element){
//     console.log(element);
// }); 
// here gives error - array.forEach is not a function because document.all is not an array

a = document.all;
// workaround:
Array.from(a).forEach(function(element){
    console.log(element);
});
// above syntax means that make an array from a and then forEach
// in this way all elements in the whole html including head, body, script at the end, can be printed
// firsly prints whole head. then prints individual element in head. same for body.

a = document.links;
console.log(a);
// gets links in html collection form

a = document.links[0];
console.log(a);
// gets whole anchor tag in our html where link is defined

a = document.links[0].href; 
console.log(a);
// gives link to the extracted links from page
// file:///home/meet/Downloads/JavaScript_Notes/www.google.com -> without live server
// http://127.0.0.1:5500/www.google.com -> with live server

// similarly get images and scripts of any webpage

a = document.images;
a = document.images.length;
a = document.images[0];
a = document.images[0].src;

a = document.scripts;
a = document.scripts[0].text;

console.log(a);
