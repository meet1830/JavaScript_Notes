let a = document;
// console.log(a);
//dom is the structural representation of our html document. and it is an object and has properties.

a = document.all; //get all properties for document and it looks like array but isn't therefore arrays foreach etc cannot be applied here will give error

// a = document.body;
// console.log(a);

// a = document.forms;
// a = document.forms[0];//get forms from any website in the form of html collection
// console.log(a);

// a.forEach(function(element){
//     console.log(element);
// }); //here gives error - array.forEach is not a function because document.all is not an array 
// //workaround:
// Array.from(a).forEach(function(element){
//     console.log(element);
// });//in this way all elements can be printed
// //syntax means that make an array from a and then forEach

a = document.links; //0 links in our page. make links in .html document to view links
a = document.links[0];
a = document.links[0].href; //gives link to the extracted links from page
console.log(a);

// a = document.images;
// a = document.images.length;
// a = document.images[0];
// a = document.images[0].src;

// a = document.scripts;
// a = document.scripts[0].text;

// console.log(a);