//regular expressions are used to find matches within some content. For example, we have a huge string and we want to find any word inside that. so we use search option to find the match and highlight. So regular expressions are used for that.
//whatever written between / and / is called regular expression literal.

let reg = /meet/;
console.log(reg);
// /meet/

reg = /meet/g; 
//declared with global flag
console.log(reg);
// /meet/g

reg = /mEEt/i; 
// case insensitivity flag
console.log(reg);
console.log(reg.source);
// mEEt 
// what did we write inside our reguler expression.
// we will match this regular expression to string.

let s = "My name is meet mehta, call me meet";

// functions to match expressions

//  1. exec() - this function will return array for match and null for no match
let result = reg.exec(s);
console.log(result);
// ['meet', index: 11, input: 'My name is meet mehta, call me meet', groups: undefined]

// now if there are more than one matches in source and we want to find them then again run same command. but it will display the next match index only when flags are used, (here global flag - it will search globally) in regular exp declaration or else will display the first match only.
// result = reg.exec(s);
// console.log(result);
// result = reg.exec(s);
// console.log(result);
// here will display null cause only two matches available.

//for i flag if in string or reg contains MeEt something then also will match.
// at the end it returns null cause if iterated in while loop for matches and when nul is encountered then loop is exited.

// since it is an array of objects
console.log(result.input);
// My name is meet mehta, call me meet
// prints input string

console.log(result.index);
// 11
// prints the matching char index

//if the value is not matching then in that case the above two error will be thrown. hence program execution stops

if (result) {
  console.log(result);
  console.log(result.input);
  console.log(result.index);
}
// here if there is no result then it will not go inside the loop hence will throw no error

//  2. test() - returns true or false
result = reg.test(s);
// will print true if the match is identified or else will print false
console.log(result);
// true

//  3. match() -> the function is put onto string instead of expression on above two. will return an array if matched or else return null.
// result = reg.match(s); WRONG
result = s.match(reg); //RIGHT
console.log(result);
// ['meet', index: 11, input: 'My name is meet mehta, call me meet', groups: undefined]
//now in this function if global flag is used then will return all the matches in the form of array.

//  4. search() -> if matched then returns index or else returns -1
//here also function is called on string
result = s.search(reg);
console.log(result);
// 11

//  5. replace() -> retuns new string which contains replaced keywords as the defined replacements.
result = s.replace(reg, 'MEHTA');
console.log(result);
// My name is MEHTA mehta, call me meet
//this only replaces first matched instance. if want all to get replaces then have to use global flag.