// let btn = document.getElementById('btn'); //targeting button 
// btn.addEventListener('click', func1);
// function func1 (e) {
//     console.log('Thanks', e);
//     e.preventDefault();
// }

//if in button line html page, if commented whole line and added input type submit and added any id, then clicking submit button then it redirects to the form action page that is none.html. we have added a listener to the click of that form and it appears only for a short instance after clicking submit. so there is default behavior that we click on submit then it instantly submits. to prevent that prevent default is added. bypass default behavior of any e but that e is to be given to the function.

// btn = document.getElementById('btn');
// btn.addEventListener('dblclick', func2);
// function func2 (e) {
//     console.log('Thanks, this is a double click', e);
//     e.preventDefault();
// }

// //also other events like mouseDown, mouseUp, etc.
// btn.addEventListener('mousedown', func3);
// function func3 (e) {
//     console.log('Thanks, this is a mouse down', e);
//     e.preventDefault();
// } //press middle mouse wheel, click, also right click then displays message
//hence click event only grabs click but mouseDown grabs all 

//mouseenter and mouseleave events

// document.querySelector('.no').addEventListener('mouseenter', function () {
//     console.log('you entered no');
// });

// document.querySelector('.no').addEventListener('mouseleave', function () {
//     console.log('you exited no');
// }) //hovering mouse on them prints output

// function rgb(r,g,b, def) {
//     def = parseInt(def, 10) || 0;
//         return 'rgb(' + [(r||def),(g||def),(b||def)].join(',') + ')';
//     }
//here no need to define function for method 1 
//only for method 2 and 3

document.querySelector('.container').addEventListener('mousemove', function (e) {
    console.log(e.offsetX, e.offsetY);

    //Method 1
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, 154)`;

    //Method 2
    // let a = parseInt(e.offsetX);
    // let b = parseInt(e.offsetY);
    // let c = parseInt(65);
    // document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c}`;

    //Method 3
    // var a = parseInt(e.offsetX);
    // b = parseInt(e.offsetY);
    // c = parseInt(e.offsetX);
    // document.body.style.backgroundColor = rgb(a,b,c,40);

    console.log('you triggered mouse move event');
});//dynamically change color of webpage