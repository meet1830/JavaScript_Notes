const name = 'meet';
const greeting = 'Good morning';
console.log(greeting + ' ' + name);

//but use of + many times is cumbersome
//another method

let html = '<h1> This is heading </h1>' + '<p> This is para </p>' + name;
html = html.concat(' this', ' ', 'str200');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html); 
//lowercase and uppercase does not change the string
console.log(html[1]); 
//indexing 
console.log(html.indexOf('h1')); 
//returns index number of that starting character
//if not found returns -1
//if want last index of that char
console.log(html.lastIndexOf('is'));
//if want char at particular index
console.log(html.charAt(5));
//does the string end at defined value
console.log(html.endsWith('str200'));
//does the string include defined value
console.log(html.includes(' str2'));
//extract char in range by indexing
console.log(html.substring(5, 8)); 
// Thi
//does not include 8th char
console.log(html.slice(-4));
// r200
//difference between both is that slice on entering -4 returns last four chars where substring would have returned the whole string excluding the last four chars
console.log(html.slice(0,-4));
// <h1> This is heading </h1><p> This is para </p>meet this st
console.log(html.slice(0,4));
// <h1>
console.log(html.substring(0,4));
// <h1>
//returns same output
console.log(html.split(' '));
// ['<h1>', 'This', 'is', 'heading', '</h1><p>', 'This', 'is', 'para', '</p>meet', 'this', 'str200']
//to split string whenever it encounters defined input
console.log(html.replace('this', 'it')); 
// <h1> This is heading </h1><p> This is para </p>meet it str200
//replaces only the first occurance and it is case sensitive

//TEMPLATE LITERALS
let fruit1 = `orange'`;
let fruit2 = 'apple';
let myHtml = `Hello ${name}
    <h1> This is "my" heading </h1>
    <p> You like ${fruit1} & ${fruit2}`;
document.body.innerHTML = myHtml;

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'fsf', 'ssfhr', 'hh53y', 'eg4y4'];
console.log(animals.slice(2, 1)); 
//empty array
console.log(animals.slice(2, -1)); 
//['camel', 'duck', 'elephant', 'fsf', 'ssfhr', 'hh53y']
console.log(animals.slice(0,-1));
//['ant', 'bison', 'camel', 'duck', 'elephant', 'fsf', 'ssfhr', 'hh53y']
console.log(animals.slice());
//['ant', 'bison', 'camel', 'duck', 'elephant', 'fsf', 'ssfhr', 'hh53y', 'eg4y4']

//slice returns the element extracted. 
//original element is not modified
//extracts whole element
//A negative index can be used, indicating an offset from the end of the sequence. slice(-2) extracts the last two elements in the sequence.
//If start is undefined, slice starts from the index 0.
//If start is greater than the index range of the sequence, an empty array is returned.

//substring
// If start is greater than end, arguments are swapped: (1, 4) = (4, 1).
// in slice it returns empty element
// Start or end less than 0 are treated as 0.

const meet = `MY_NAME_IS_MEET_MEHTA`;
console.log(meet.slice(2, 1)); 
// empty 
console.log(meet.substring(2, 1)); 
// Y
console.log(meet.slice(2, -1)); 
// _NAME_IS_MEET_MEHT
console.log(meet.substring(2, -1)); 
// MY
console.log(meet.slice(0,-1));
// MY_NAME_IS_MEET_MEHT
console.log(meet.substring(0,-1));
// empty 
console.log(meet.slice());
// MY_NAME_IS_MEET_MEHTA
console.log(meet.substring());
// MY_NAME_IS_MEET_MEHTA