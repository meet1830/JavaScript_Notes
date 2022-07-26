let cont = document.querySelector('.no'); 
//if the class has multiple elements in it then it selects the first element
console.log(cont);

cont = document.querySelector('.container');

console.log(cont.childNodes); 
// childNodes also includes comments and new line spaces as text. if dont want that then use children

console.log(cont.children); 
// considers only tags
// use children and not childnodes

let nodeName = cont.childNodes[5];
console.log(nodeName);
// <div class="child">Child 2</div>
// returns the whole div element according to the collection returned in cont.childnodes

nodeName = cont.childNodes[5].nodeName; 
console.log(nodeName);
// DIV
// returns name of div element

let nodeType = cont.childNodes[1].nodeType;
console.log(nodeType);
// 1

/* List of node types and its corresponding number
1. element
2. attribute
3. text node
8. comment
9. document
10.doctype */


let container = document.querySelector('div.container');
console.log(container);

container = document.querySelector('.container');
console.log(container);
// same output for container and div container

console.log(container.children);
// returns html collection

console.log(container.children[1].children); 
// obtain children elements of a particular elements

console.log(container.children[1].children[0].children);
// returns collection same as above

console.log(container.children[1].children[0].children.children);
// no children hence returns undefined

console.log(container.childNodes);
// first element text

console.log(container.firstChild); 
// text
// get first children of container here text

console.log(container.firstElementChild); 
// h1 html code
// get whole first element not text

console.log(container.lastChild);
// text

console.log(container.lastElementChild);
// form element code

console.log(container.childElementCount); 
// 6
// out of 13 childnodes(including text) only 6 are element (children)

console.log(container.firstElementChild.parentNode);
// .container code
// h1's parent is div container

console.log(container.firstElementChild.nextSibling); 
// text
// sibling means the element(includes text) that comes next

console.log(container.firstElementChild.nextElementSibling); 
// #myfirst code
// does not include text

console.log(container.firstElementChild.nextElementSibling.nextElementSibling); 
// child 2 code

console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling); 
// child 3 code

// called chaining - traversing