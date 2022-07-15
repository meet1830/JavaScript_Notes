//exercise 2

/*
You have to create a div and inject it into the page which contains a heading. 
whenever user clicks on the div, it should be converted into an editable item. Whenever user clicks away (blur), save the note into local storage
*/

//in chrome if page does not reload properly then press ctrl + shift + r. it repatches the webpage and loads it like new

//create a new element
let divElem = document.createElement('div');

//give element id, style and class
divElem.setAttribute('id', 'elem');
divElem.setAttribute('class', 'elem');
divElem.setAttribute('style', 'border: 2px solid black; width: 154px; margin: 54px; padding: 23px');

//add text to that created element
//if else statement added after adding blur event
let val = localStorage.getItem('text'); //text is arbitrary name
let text;
if (val == null) {
    text = document.createTextNode('This is an editable text box. Click to edit.');
}
else {
    text = document.createTextNode(val);
}

divElem.appendChild(text);

//grab the main container
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');
// console.log(divElem, container, first);

//insert the element before element with id first
container.insertBefore(divElem, first);

//add event listener to divElem
divElem.addEventListener('click', function () {
    // let html = ` <textarea class="textarea form-control" id="textarea" rows="3"></textarea>`;
    // divElem.innerHTML = html;
    //copy textarea html for bootstrap website
    //cannot do this because in website when we click the editable box the click event fires with every click and will not let us edit.
    
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if (noTextAreas == 0) {
    let html = divElem.innerHTML;
    divElem.innerHTML = ` <textarea class="textarea form-control" id="textarea" rows="3"> ${html}</textarea>`;
    }
    //the above problem is solved but still content is not editable. when the event refires, the editable box is spoilt and the content that it has is above ` <textarea class = ''... 
    //solution -> listen to click element only once. create noTextAreas and define if condition
    //if not listened to blur event, then after clicking elsewhere the content stills remains in editable textbox form.

    //listen for blur event on textarea
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function () {
        elem.innerHTML = textarea.value;
    })

    //after this when we reload the page, then it displays the default text. hence want it to read from local storage.
    //after this created if and else statements in add text

    localStorage.setItem('text', textarea.value);
})