// Exercise 1 -> webpage crawler
// extract the links which contain javascript from any webpage

// You have to create a variable which is a string containing the text which is a link you are interested in.
// you have to fetch all the links from a given page which contains this text
// javascript

// Solution -> go to codewithharry.com and extract links "python".

let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
    href = element.href;
    console.log(href);
    if (href.includes('str')) {
        console.log(href);
    }
})


Array.from(document.links).forEach(function (element) {
  if (element.href.includes("python")) { 
    console.log(element.href);
  }
});
// element.href means all href type in element
// cannot do here array from document.links.href -> gives error that it is not iterable