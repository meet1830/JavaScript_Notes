//prototype now not used much. Classes are used in es6 js.
//if objects name is Obj then it inherits from Obj.prototype
//if created an object using any method then it has a prototype

const proto = {
    slogan: function () {
        return `this company is the best`;
    },
    changeName: function (newName) {
        this.name = newName;
    }
}

//Method 1
let meet = Object.create(proto);
//created new object using object proto
// console.log(meet); 
//output {}. open the dropdown and it contains only a prototype nothing else
meet.name = "Meet";
meet.role = "programmer"; 
//both of them get added to object
meet.changeName = "Meet2"; 
//name changes
const slogan = meet.slogan();
console.log(slogan);
console.log(meet);

//Method 2 -> alternate syntax
const meet1 = Object.create(proto, {
    name: {value: "Meet", writable: true}, 
    //if not written writable true then changeName gives error
    role: {value: "programmer"} 
});
meet1.changeName("Meet2");
// console.log(meet);

//employee constructor
function employee (name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
//slogan
employee.prototype.slogan = function () {
    return `this company is the best. Regards ${this.name}`;
}
let meetObj = new employee('Meet', 345000, 86);
console.log(meetObj);
console.log(meetObj.slogan());

//programmer -> employee who is added
//inheritance -> will inherit programmer with employee
function Programmer (name, salary, experience, language) {
    employee.call(this, name, salary, experience)
    //call is a function 
    // this -> in context with programmer constructor, call
    //arguments of employee constructor
    this.language = language;
}
//the things which programmer constructor is inheriting will get by call function and additional language will get by this.language.

let  rohan = new Programmer ('Rohan', 2, 0, "JavaScript");
console.log(rohan);
//but slogan is not printed. because it is not getting employee's prototype 

//inherit the prototype
Programmer.prototype = Object.create(employee.prototype);
//create a prototype by inheriting employees prototype.
// now in console type rohan.slogan(); and will print output with no error

//output not displaying programmer -> constructor. displaying constructor in programmer -> prototype -> constructor but not outside. so we have to manually set it.

//manually set the constructor
Programmer.prototype.constructor = Programmer;
//we have to do all these things to achieve inheritance. hence classes were introduced.

//sample inheritance example
// Flour constructor

function Flour(egg,bakingpowder,whitesugar){
    this.egg=egg;
    this.bakingpowder=bakingpowder;
    this.whitesugar=whitesugar;
}

// Slogan

Flour.prototype.slogan= function(){
    return `This cake is the best`;

}

// Create an object from this constructor now
let make= new Flour(2, 500, 7);
console.log(make.slogan());

// Cake

function Cake(egg, bakingpowder, whitesugar, water, oven){
    Flour.call(this, egg, bakingpowder, whitesugar);
    this.water=water;
    this.oven=oven;
}

// Inherit the prototype
Cake.prototype= Object.create(Flour.prototype);

// Manually set the constructor

Cake.prototype.constructor= Cake;

let cook = new Cake(4, 500, 7, 500, 15);
console.log(cook);