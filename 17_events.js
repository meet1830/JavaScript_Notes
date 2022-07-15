//EVENTS IMP
//events are things like clicking something on our website, copying text, etc. js gives us ability to grab that and make our website more interactive
//syntax below

// document.getElementById('heading').addEventListener('click', function() {
//     console.log('you have clicked the heading');
//     // location.href = '//www.google.com';
// }); 
//click on the heading and message will be printed or can also redirect to any website

// the callback it takes also can have one argument of event object here e
document.getElementById('heading').addEventListener('click', function(e) {
    console.log('you have clicked the heading');
    console.log(e);
});

//in the above list in console, target is important
document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('you have clicked the heading');
    variable = e.target;
    variable = e.target.className; //gives classnames in string form
    variable = e.target.id;
    variable = e.target.classList; //gives classnames as object
    //also can iterate elements of class list after creating an array as below
    variable = Array.from(e.target.classList); //can also write variable in argument 
    // iterates classnames in array form
    // variable = e.offsetX; //tells clicked location based on object //same offsetY
    // variable = e.clientX; //clicked based on browser window, clientY
    console.log(variable);
}); //click on heading and target appears in console, can also get the class name of the target
//actually e.target gives an element. hence, can run all function methods of an element on that

//another event
document.getElementById('heading').addEventListener('mouseover', function (f) {
    console.log('you have hovered mouse on the heading');
});