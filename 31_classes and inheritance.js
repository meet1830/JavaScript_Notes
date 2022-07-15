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
    //constructor is class employee in console -> employee -> prototype -> constructor
    //this syntax is of es6 and gives many advantages
    // in console -> meet.slogan(); and gives output - more convenient than prototype and syntax is also similar to classes in python, php any backend.

    joiningYear () {
        return 2021 - this.experience;
    }
    //all of these functions go to prototype's prototype of object

    static add (a,b) {
        return a + b;
    }
    //static functions are functions that can be used without creating objects of class, without dot(.)
}
meet = new Employee ("Meet", 56, "Division");
// console.log(meet); 
// console.log(meet.joiningYear()); 
// console.log(Employee.add(43, 53));

//inheritance
class Programmer extends Employee {
    constructor (givenName, givenExperience, givenDivision, givenLanguage, github) {
        super(givenName, givenExperience, givenDivision);
        //whenever a new object of programmer is made using new keyword, then call super function -> call constructor of parent 
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
    //if using static then cannot use static. because cannot use this when calling a function without object.

    static multiply (a,b) {
        return a * b;
    }
}

rohan = new Programmer ("Rohan", 3, "Lays", "Go", "rohan420");
console.log(rohan);
console.log(rohan.favouriteLanguage());
console.log(Programmer.multiply(3, 5));
//this is how inheritance can be performed