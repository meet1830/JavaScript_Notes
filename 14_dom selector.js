/*dom selectors
1. single element selector
2. multi element selector
*/

// 1. single element selectors

// how to select element by id
let ele = document.getElementById('myfirst');
console.log(ele);
// <div id="myfirst" class="child red good">Child 1</div>

let ele1 = ele.className; 
console.log(ele1);
// child red good

let ele2 = ele.childNodes; 
console.log(ele2);
// will get output as node list of length 1 -> text -> cause here contains only child 1 text
// text, comment, ul, etc

let ele3 = ele.parentNode; 
console.log(ele3);
// get html code of div.container 

ele.style.color = 'red';  
// Child 1 color changes
// can change css with js
// other prop like background, etc can also be used 

ele.innerText = 'meet is a good boy';
// child 1 changes to above

ele.innerHTML = '<b>meet is a good boy</b>';
// can change html of element
// //can also grab the text of innerhtml

console.log(ele.innerHTML);
// <b>meet is a good boy</b>



// Query selector
let sel = document.querySelector('#myfirst');
console.log(sel);
// get myfirst div same as ele

sel = document.querySelector('.child'); 
console.log(sel);
// get same output as above
// get first element of that classname because single element selector

// . for classname and # for id

// can directly write tag names too
sel = document.querySelector('h1');
console.log(sel);
// <h1 id="heading">JavaScript course</h1>

sel = document.querySelector('b');
console.log(sel);
// <b>meet is a good boy</b>

sel = document.querySelector('div');
console.log(sel);
// div.container code
// will get first div

sel.style.color = 'green';
// first div becomes green

sel = document.querySelector('form');
console.log(sel);
// get whole form code
// will get first form



// 2. Multi element selector

let elems = document.getElementsByClassName('child');
console.log(elems);
// gets all 4 divs

console.log(elems[1], typeof elems);
// get second element

elems = document.getElementsByClassName('container'); 
console.log(elems[0]);

console.log(elems[0].getElementsByClassName('child')); 
// to get elements inside class container which have child class

elems = document.getElementsByTagName('div');
// select elements by the tag or div, h1, etc
console.log(elems);

elems.forEach(element => {
    console.log(element);
}); 
// error -> elems is not a function

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
});
// all the div tags' color changes

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
} 
// traditionally using for loop instead of foreach