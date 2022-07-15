let cont = document.querySelector('.no'); 
//if the class has multiple elements in it then it selects the first element
// console.log(cont);
cont = document.querySelector('.container');
// console.log(cont);
// console.log(cont.childNodes); //child also contains comments and new line spaces and text. if dont want that then use children
// console.log(cont.children); //considers only elements

let nodeName = cont.childNodes[5];//returns the whole div element
// let nodeName = cont.childNodes[5].nodeName; //returns name of div element
console.log(nodeName);

let nodeType = cont.childNodes[1].nodeType;
// console.log(nodeType);
/* List of node types and its corresponding number
1. element
2. attribute
3. text node
8. comment
9. document
10.doctype */

let container = document.querySelector('div.container');//same output for container and div container
// console.log(container);
// console.log(container.children);
// console.log(container.children[1].children); //obtain children elements of a particular elements
// console.log(container.children[1].children[0].children);

// console.log(container.childNodes);//first element text
// console.log(container.firstChild); //get first children of container here text
// console.log(container.firstElementChild); //get whole first element
// console.log(container.lastChild);
// console.log(container.lastElementChild);
// console.log(container.childElementCount); //out of 13 childnodes only 6 are element (children)

console.log(container.firstElementChild.parentNode); 
console.log(container.firstElementChild.nextSibling); 
console.log(container.firstElementChild.nextElementSibling); 
console.log(container.firstElementChild.nextElementSibling.nextElementSibling); 
console.log(container.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling); //chaining - traversing