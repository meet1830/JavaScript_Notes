//object literals for creating objects
let car = {
    name: "maruti 800",
    topSpeed: 89,
    run : function () {
        console.log('car is running');
    }
}
console.log(car);

//Constructor
//constructors are template out of which we can make objects
//new Date; new keyword makes new object with the help of constructor

//creating a constructor for cars
//this is a constructor which will make a car object and set the values of name and topspeed which it gets
function generalCar (givenName, givenSpeed) {
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function () {
        console.log(`${this.name} is running`);
    }
    //run function tells which car is running
    this.analyse = function () {
        console.log(`${this.name} is slower than Mercedez by ${200 - this.topSpeed} kmph`);
    }
}
//using this constructor we can create objects using new keyword
car1 = new generalCar('Nissan', 180);
car2 = new generalCar('Mercedez',200);
car3 = new generalCar('Maruti Alto',80);
console.log(car1);
/*in console run
car1.topSpeed -> 180
car1.speed -> undefined
car1.run(); -> Nissan is running
car1.analyse(); -> Nissan is slower than Mercedez by 20 kmph
*/

//this is object oriented programming. if the cars were defined by creating objects then the maintainibilty of code increases as the major changes can be done easily and code is of optimal length.

// console.log(car1, car2, car3);