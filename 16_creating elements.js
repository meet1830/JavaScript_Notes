let ele1 = document.createElement('li');
console.log(ele1);
// <li></li>

// add a class name to the li element
ele1.className = 'child1';
ele1.id = 'createdLi';
ele1.setAttribute('title', 'mytitle');

console.log(ele1);
// as we are adding the class, id etc output from line 2 also displays with these props
// <li class="child1" id="createdLi" title="mytitle"></li>

let ul1 = document.querySelector('ul.this');
console.log(ul1);
// get code of ul

ul1.appendChild(ele1);
console.log(ul1);
// will append created element ele1 in ul1. but will just be seen as a bullet with no text


// method 1 to add text to element -> createdEle.innerhtml
ele1.innerText = 'created element';
// but cannot add bold above
ele1.innerHTML = '<b>Created element</b>';


// method 2 -> create a text node
let ele2 = document.createElement('li');
ele2.className = 'child1';
ele2.id = 'createdLi2';
ele2.setAttribute('title', 'mytitle');
 
let text = document.createTextNode('created element by text node');
ele2.appendChild(text);

ul1.appendChild(ele2);



console.log(ele1, ele2);

// how to replace element by another element
let ele3 = document.createElement('h3');
ele3.id = 'elem2';
ele3.className = 'elem2';
let tnode = document.createTextNode('This is a created node for ele3');
ele3.appendChild(tnode);

// to replace element with elem2
ele1.replaceWith(ele3);


// replace a child
let myul = document.getElementById('myul');
myul.replaceChild(ele1, document.getElementById('fui'));
// replace fui with ele1 
// first write replacement element, then with element whom want to replace
// should be child element of ele on which we are running it, or shows error


myul.removeChild(document.getElementById('lui'));
// removes child of element


let pr = ele3.getAttribute('class');
pr = ele3.getAttribute('id');
// get value of that attribute in the element

pr = ele3.hasAttribute('id'); 
// true
// does it have that attribute or not 
// href, etc output false bc it does not have that 

ele3.removeAttribute('id');

ele3.setAttribute('title', 'myelem2title');

console.log(ele3, pr);