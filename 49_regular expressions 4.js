//Character classes

let regex = /\wet/;
// \w means a word character - can be an alphanumeric or underscore
//means it will match for str = m_et, str = meet and str = m0etd etc but not for str = meeft;

regex = /\w+t/;
//will match for any number of characters before t
//note if str = 'gsdgs%dgdt bhai' then only dgdt will match because % is not a word character

regex = /\Wbhai/;
//if want non word characters then \W here space is non word character hence matches

regex = /\W+bhai/;
//for str = 'meet %$#*bhai'; will match all the non word characters.

regex = /number \d999/;
//matches any digit and then 999

regex = /number \d+35/;
regex = /number \d+/; 
//more than one digit

regex = /\D535/; 
//non digit

regex = /\D+53/;
//more than one non digit

regex = /\snumber/;
// \s means whitespace. will also catch \t which means tab.

regex = /\s+number/;
//more than one whitespce char

regex = /\Srad/;
//non whitespace char

regex = /\S+rad/;
// more than one non whitespace chars

regex = /hone\b/;
//word boundary, after which a new word starts.

//ASSERTIONS
regex = /p(?=h)/;
//if there is a h after p in the string then it will match.

regex = /p(?!h)/;
//should be anything but not h after p

let str = 'meet bhai, phone      \tnumber 8999373radfefr535';

let result = regex.exec(str);
console.log(`The result from exec is `, result);

if (regex.test(str)) {
    console.log(`Expression ${regex.source} matches the string.`);
} else {
    console.log(`Expression ${regex.source} does not match the string.`);
}