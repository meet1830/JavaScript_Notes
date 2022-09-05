/*
Regular expressions
1. Basic functions
2. metcharacter symbols
3. character sets
*/

// Use [] for character sets

let regex = /^m/i; 
//starts with and case insensitivity

regex = /m[a-z]et/; 
//[a-z] character set - if anything in that range exists in that place in reg exp then it will match.

regex = /m[ryu]et/;
//second place can have r, y or u in it then will match. 

regex = /m[^ryu]e[adt]/; 
// ^ means not here. can be anything but r, y or u.
// can use multiple char sets 

regex = /m[a-z A-z]e[0-9]/;

let str = 'meet bhai';


// Quantifiers - Use {}
// when want to specify quantitiy in any character
// string remains same and regex changes
regex = /me{2}t/;
//e can occur exactly 2 times. matches for meet but does not match for meeet.

regex = /me{0,2}t/;
//e can occur 0, 1 or 2 times. 

str = 'meet bhai';

//Groupings - use paranthesis () for groupings
regex = /(me){2}et/;
//me can occur exactly 2 times - memet
regex = /(me){2}([0-9]r){3}/;

str = 'meet bhai';
str = 'meme0r9r7rt bhai';

let result = regex.exec(str);
console.log('The result from exec is ', result);

if (regex.test(str)) {
    console.log(`The string matches the expression ${regex.source}`);
} else {
    console.log(`The string does not match the expression ${regex.source}`);
}
