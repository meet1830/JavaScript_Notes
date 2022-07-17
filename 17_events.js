// EVENTS IMP

// events are things like clicking something on our website, copying text, etc. js gives us ability to grab that and make our website more interactive

document.getElementById('heading').addEventListener('click', function() {
    console.log('you have clicked the heading');
    // location.href = '//www.google.com';
}); 
// click on the heading and message will be printed or can also redirect to any website
// here clicked on heading which is not a link then also will redirect to google


// the callback it takes also can have one argument of event object here e
document.getElementById('heading').addEventListener('click', function(e) {
    console.log('you have clicked the heading');
    console.log(e);
});
// will print a pointerEvent object in console

//in the above pointerEvent in console, there is a field target which is important

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    variable = e.target;

    console.log(variable);
    // event click converted into a variable. now can get the value of variable that is the html code of element clicked here heading

    // e.target gives an element which means all properties of elements 
    variable = e.target.className;
    console.log(variable); 
    // gives classnames in string form

    variable = e.target.id;

    variable = e.target.classList; 
    console.log(variable);
    // gives classnames as DOMTokenList object
    
    // also can iterate elements of class list after creating an array as below
    variable = Array.from(e.target.classList);
    console.log(variable);
    // (3) ['yourhead', 'this', 'is']
    
    variable = e.offsetX; 
    console.log(variable);
    // tells clicked location on the element 
    // same offsetY

    variable = e.clientX; 
    // clicked based on browser window, clientY
    console.log(variable);
}); 

// another event
document.getElementById('heading').addEventListener('mouseover', function (f) {
    console.log('you have hovered mouse on the heading');
});