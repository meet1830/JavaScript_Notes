// class is a blue print, template.

class Employee {
    constructor (givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    } 
    //specify arguments in constructor. Constructor runs when the object is being created

    slogan () {
        return `I am ${this.name} and this company is the best.`
    }
    // constructor is class employee in console -> employee -> prototype -> constructor
    // this syntax is of es6 and gives many advantages
    // in console -> meet.slogan(); and gives output - more convenient than prototype and syntax is also similar to classes in python, php any backend.

    joiningYear () {
        return 2021 - this.experience;
    }
    // all of these functions go to prototype's prototype of object

    static add (a,b) {
        return a + b;
    }
    //static functions are functions that can be used without creating objects of class, without dot(.)
}
meet = new Employee ("Meet", 56, "Division");

console.log(meet); 
// gets employee class

console.log(meet.joiningYear()); 
// 1965

console.log(Employee.add(43, 53));
// using static method without creating class
// 96



// inheritance
class Programmer extends Employee {
    constructor (givenName, givenExperience, givenDivision, givenLanguage, github) {
        super(givenName, givenExperience, givenDivision);
        // whenever a new object of programmer is made using new keyword, then call super function -> call constructor of parent 
        this.language = givenLanguage;
        this.github = github;
    }

    favouriteLanguage() {
        if (this.language == "python") {
            return 'Python';
        }
        else {
            return 'JavaScript';
        }
    } 
    // if using static then cannot use 'this'

    static multiply (a,b) {
        return a * b;
    }
}

rohan = new Programmer ("Rohan", 3, "Lays", "Go", "rohan420");
console.log(rohan);
// get rohan class

console.log(rohan.favouriteLanguage());
// javascript

console.log(Programmer.multiply(3, 5));
// 15

// this is how inheritance can be performed




// JAVASCRIPT CLASSES
/* does the same function as object constructors
classes -> template/blueprint for objects 
constructors -> default method of the class which gets invoked during the creation of object
format inside constructor is same as inside object constructor
*/

class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const studentName = new Student('Meet', 'Mehta');
// here how come we are passing arguments to class? it is because when objects are created using new className(), the constructor is invoked which needs arguments as per its code

console.log(studentName);
/*
Student {firstName: 'Meet', lastName: 'Mehta'}
    firstName: "Meet"
    lastName: "Mehta"
    [[Prototype]]: Object
*/

/*
Classes have two types of methods
1. Getters: get or receive some information of the created object properties or methods
2. Setters: set the value for properties or methods of created object
*/

// defining methods in class. unlike in object constructors method had to start with 'this' keyword, here can define like a normal function without the function keyword

class Student1 {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // example of a getter method -> getting some information
    displayFullName() {
        console.log(this.firstName + ' ' + this.lastName);
        // now have to write 'this' as accessing a property of the same class
    }

    // setter method 
    setStudentBatch(batchNo) {
        this.batch = batchNo;
        // creates a new property
    }

    // also example of getter method
    displayInfo() {
        console.log(this);
        // displays the current object
    }
}

const studentName1 = new Student1('Meet', 'Mehta');

studentName1.displayFullName();
// Meet Mehta

studentName1.displayInfo();
/*
Student1 {firstName: 'Meet', lastName: 'Mehta'}
batch: 15
firstName: "Meet"
lastName: "Mehta"
[[Prototype]]: Object
*/
// before does not show batch as property but the object gets updated after the below setbatch func call

studentName1.setStudentBatch(15);

studentName1.displayInfo();
/*
Student1 {firstName: 'Meet', lastName: 'Mehta', batch: 15}
batch: 15
    firstName: "Meet"
    lastName: "Mehta"
    [[Prototype]]: Object
*/


/*
Class Inheritance

for example
Parent:
    - firstName
    - LastName
    - DNA
    - Age

child 
    - firstName
    - Age
    [lastName, DNA will be inherited from the parent]


Class inheritance:
- child class inherits all properties and methods from the parent class and can have some unique properties and methods of its own
- 'extends' keyword - make b child class of a -> class b extends a
- 'super' method - invoke the constructor of parent class
*/

// person (parent class) - stu (student child class) -> all students are persons but vice versa not true

class Person {
    constructor (firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    displayIntro() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`)
    }
}

const mehal = new Person('Mehal', 'Shetty', 25);
mehal.displayIntro();
// Mehal Shetty is 25 years old.

class Stu extends Person {
    constructor (firstName, lastName, age, courseName, batchNo) {
        super(firstName, lastName, age);
        this.course = courseName;
        this.batch = batchNo;
    }
}
// to understand - by calling super, it invoked parent constructor and copied the code of parent constructor here and the properties got assigned (this.firstname = firstname ...)

const mehta = new Stu('Meet', 'Mehta', 22, 'MERN', 15);

console.log(mehta);
/*
Stu {firstName: 'Meet', lastName: 'Mehta', age: 22, course: 'MERN', batch: 15}
    age: 22
    batch: 15
    course: "MERN"
    firstName: "Meet"
    lastName: "Mehta"
    [[Prototype]]: Person
*/

mehta.displayIntro();
// Meet Mehta is 22 years old.

// if in super keyword dont pass all the properties of parent constructor then it will assign them as undefined, throws no error.