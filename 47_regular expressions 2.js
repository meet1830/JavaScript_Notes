//meta character symbols

let regex = /meet/;

regex = /^me/; 
// ^ means starts with. if string starts with me then the expression matches and if statement returns true.   
// regex = /^is/; //will return false 

regex = /ta.$/;
// ..$ means ends with.

regex = /me.t/;
// . means it will match if any char is present in the place of dot. will match with meit. but only one character

regex = /m*t/;
//will match with any number of characters in place of *. will match with mdjsjdsdhgt. also matches with mt, tm, mfsifst, tjnjsfm.

regex = /mi?eetl?/;
//char? means that character is optional. if it exists in the string then it will match but if it does not then also it will match. but will not match with any other char in place of char before ?.
// regex=mi?eetl? str='mieetfm'; will match 
// regex=mi?eetl?m str='mieetfm'; will not match 

regex = /me\*et/;
//if want to match me*et then have to include \ before * or else will be treated as a meta character.

let str = 'meet is a good boy and meet s full name is meet mehta - me*et.';

let result = regex.exec(str);
console.log('Result of regex is: ', result);

if(regex.test(str)) {
    console.log(`String matches the regular expression "${regex.source}"`);
} else {
    console.log(`String does not match the regular expression "${regex.source}"`);
}