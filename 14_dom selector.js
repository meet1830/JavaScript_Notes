/*dom selectors
1. single element selector
2. multi element selector
*/

//1. single element selectors

//how to select element by id
let ele = document.getElementById('myfirst');
// ele = ele.className; //class red good
// ele = ele.childNodes; //text, comment, ul, etc
// ele = ele.parentNode; //div.container 
// // ele.style.color = 'red';  //can change css with js
// //other prop like background, etc can also be used 
// // ele.innerText = 'meet is a good boy';
// ele.innerHTML = '<b>meet is a good boy</b>';//can use html tags
// //can also grab the text of innerhtml
// console.log(ele.innerHTML);
console.log(ele);

// let sel = document.querySelector('#myfirst');
// sel = document.querySelector('.child'); //get first element of that classname because single element selector
// //. for classname and # for id
// sel = document.querySelector('b');//can directly write tag names too
// sel = document.querySelector('div');//will get first div
// sel = document.querySelector('form');//will get first div
// sel.style.color = 'green'; //first div green

// console.log(sel);


// //2.multielement selector

let elems = document.getElementsByClassName('child');
// console.log(elems[1], typeof elems);
// elems = document.getElementsByClassName('container'); //all elements inside class container
// console.log(elems[0]);
// console.log(elems[0].getElementsByClassName('child')); //to get elements inside class container which have 'child' in them
// elems = document.getElementsByTagName('div');
// console.log(elems);

// // elems.forEach(element => {
// //     console.log(element);
// // }); //cannot do this

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = 'blue';
// });

// for (let index = 0; index < elems.length; index++) {
//     const element = elems[index];
//     console.log(element);
//     element.style.color = 'blue';
// } //traditionally using for loop instead of foreach