let today = new Date();
console.log(today);
// typeof object
// Sun Jul 17 2022 16:23:55 GMT+0530 (India Standard Time)

let otherDate = new Date('8-4-2003 04:54:08');
console.log(otherDate);
// Mon Aug 04 2003 04:54:08 GMT+0530 (India Standard Time)

// if mentioned date which cannot exist then gives output as invalid date

otherDate = new Date('12 June 1976');
console.log(otherDate);
// Sat Jun 12 1976 00:00:00 GMT+0530 (India Standard Time)

otherDate = new Date('6/12/1976'); 
// mm/dd/yy should be followed otherwise error
console.log(otherDate);
// Sat Jun 12 1976 00:00:00 GMT+0530 (India Standard Time)


let a = otherDate.getDay();
// gives output as integer starting from sunday as 0 and uptil saturday as 6
console.log(a); 
// 6

a = otherDate.getDate(); 
// gives integer date of month dd as output
console.log(a); 
// 12

a = otherDate.getMinutes();
console.log(a); 
// 0

// can use getHours, getSeconds also

a = otherDate.getTime();
console.log(a);
// 203365800000 
// gives time as time stamp - gives output as no of seconds passed untill now since the defined date

a = today.getMilliseconds(); 
console.log(a); 
// 544
// a = otherdate.getmilliseconds()  
// 0

a = otherDate.getMonth();
// start counting from 0  


otherDate.setDate(23);
otherDate.setMonth(11);
otherDate.setFullYear(1900);
// setMinutes, setSeconds and setHours also

console.log(otherDate);
// Sun Dec 23 1900 00:00:00 GMT+0521 (India Standard Time)