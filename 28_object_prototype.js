// object literal : object.prototype
let obj = {
    name: 'meet',
    channel: 'codewithharry',
    address: 'mars'
}
console.log(obj);
// in console, the output element obj also contains prototype or __proto__ as a part of element
//the prototype is where the element is started to create after we define it. for example, we have google chrome, vs code etc that helps us to make websites. similarly, creation of objects initially uses the element parts defined in the prototype 
//whenever we make an object using object literal, we already have object.prototype built in.

// if object is made using constructor
function Obj (givenName) {
    this.name = givenName;
}
let obj2 = new Obj('meet'); //see after line 37
console.log(obj2);
//then it has its own prototypes starts as constructor in console
//prototype is where object starts to create
//if creating object using object template that is object.prototype then it will provide this and then create the key pairs name, channel, address, etc on to it to make the object
// object.prototype can only be used on constructors and not on object literals
// for eg, the key and value pairs defined through object literals are paneer thali where prototype of paneer thaali being dal, roti, etc. It will pack key pairs on top of object.prototype.
//where as for object created through constructor is a salad paneer thali. so we created a template in which we added salad as a new prototype. 
// we can change the prototype which is created using constructor. 
//for example we want to see many utility functions. so we want that there should be no change in the object func like namem channel address, we want them to go to prototype.

Obj.prototype.getName = function (){
    return this.name;
}
console.log(obj2);
//getName gets added to the prototype. so we get edit the prototype of our object
//in console run obj2.getName(); will get meet as output

// obj2 = new Obj('mit');
// console.log(obj2);
//can change prototype like this

//cannot do
// obj.prototype.getName = function (){
//     return this.name;
// }
//get error. we can make a constructor and change its prototype

//never change any object not created by you (Object.prototype.getname). first create an object and then can change its prototype. should not change any global object. every object then created, will have the edited prototype. so it is very dangerous.

//can also use all properties of prototype's child prototype (see in console)
console.log(obj2.isPrototypeOf());

Obj.prototype.setName = function (newName) {
    this.name = newName;
}
console.log(obj2);
//setName prototype added to object
//now in console type 
//obj2.setName('shubh'); //will return undefined
//then type 
//obj2
//returns object with name "shubh"