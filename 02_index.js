console.time("Code executing time");

console.log(34*4);

console.log(true);
// prints boolean true

console.log([3,5,4]);
// prints array

console.log(["meet", 65, true]);

console.log({meet: 'boy', marks: 100});
// prints object

console.table({meet: 'boy', marks: 100});
// prints object in tabular form

console.warn('this is a warning');
// shows warning inside console

console.timeEnd('Code executing time');
// from time start to time end will show the amount of time took to execute the code in this file.

console.clear();
// clears console

// to check code. give conditions here according to code to check if it works properly or not
console.assert(893<189, "this age is not possible")

console.error('this is an error');