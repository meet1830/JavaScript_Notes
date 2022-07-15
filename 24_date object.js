let today = new Date();
console.log(today);
//typeof object

let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('12 June 1976');
otherDate = new Date('6/12/1976'); //mm/dd/yy should be followed otherwise error
console.log(otherDate);

let a = otherDate.getDay();
//gives output as integer starting from sunday as 0 and uptill saturday as 6
a = otherDate.getDate(); 
//gives integer date of month dd as output
a = otherDate.getMinutes();
//can use getHours, getSeconds also
// a = otherDate.getTime();
//gives time as time stamp - gives output as no of seconds passed untill now since the defined date
a = otherDate.getMilliseconds(); 
//gives output as 0
// a = otherDate.getMonth();
//start counting from 0  
console.log(a); 

// otherDate.setDate(23);
// otherDate.setMonth(11);
// otherDate.setFullYear(1900);
// //setMinutes, setSeconds and setHours also
// console.log(otherDate);