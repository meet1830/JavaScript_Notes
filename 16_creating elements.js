let ele1 = document.createElement('li');

//add a class name to the li element
ele1.className = 'child1';
ele1.id = 'createdLi';
ele1.setAttribute('title', 'mytitle');


//method 1 to add text to element
//element.innerText = 'Created element'; 
ele1.innerHTML = '<b>Created element</b>';


//method 2
let ele2 = document.createElement('li');
ele2.className = 'child1';
ele2.id = 'createdLi2';
ele2.setAttribute('title', 'mytitle');
 
let text = document.createTextNode('created element by text node');
ele2.appendChild(text);


console.log(ele1, ele2);;
//now after creating element we need to append this at req space

let ul = document.querySelector('ul'); //or ul.this to target properly
// console.log(ul); //checking if targeted properly
ul.appendChild(ele1);
ul.appendChild(ele2);
console.log(ul);

//how to replace element
let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

//to replace element with elem2
ele1.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(ele1, document.getElementById('fui'));
//replace fui with ele1 //2 replaces with 1
//should be child element of ele on which we are running it, here myul or shows error

myul.removeChild(document.getElementById('lui'));
//removes child of element

// let pr = elem2.getAttribute('class');
// pr = elem2.getAttribute('id');
pr = elem2.hasAttribute('id'); //does it have that attribute or not //href, etc output false bc it does not have that 
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);