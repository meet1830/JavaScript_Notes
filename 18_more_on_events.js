let btn = document.getElementById('btn'); 

btn.addEventListener('click', func1);

function func1 (e) {
    console.log('Thanks', e);
    e.preventDefault();
}

// if html for button, changed input type submit, clicking submit button then it redirects to the form action page that is none.html. we have added a listener to the click of that form and it appears only for a short instance after clicking submit. so there is default behavior that we click on submit then it instantly submits. to prevent that prevent default is added. can use prevent default to prevent any default behavior but e has to given as func argument. 

btn = document.getElementById('btn');
btn.addEventListener('dblclick', func2);
function func2 (e) {
    console.log('Thanks, this is a double click', e);
    e.preventDefault();
}
// if double clicked then two times for single click pointer event is returned and for double click once mouse event is returned 

// also other events like mouseDown, mouseUp, etc.

btn.addEventListener('mousedown', func3);
function func3 (e) {
    console.log('Thanks, this is a mouse down', e);
    e.preventDefault();
} 
// press middle mouse wheel, click, also right click then displays message
// hence click event only grabs click but mouseDown grabs all 

// mouseenter and mouseleave events

document.querySelector('.no').addEventListener('mouseenter', function () {
    console.log('you entered no');
});

document.querySelector('.no').addEventListener('mouseleave', function () {
    console.log('you exited no');
}) 
// hovering mouse (enter and leave) on them prints output


// dynamically change color of webpage
document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);

    console.log('you triggered mouse move event');

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, 154)`;
});