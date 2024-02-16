/*
Theory 

DATA TYPES

A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript.


*/

// 1) Number - The number type represents both integer and floating point numbers.

let n = 123;
n = 12.345;


// 2) BigInt - In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than 
// -(253-1) for negatives.

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;   

// 3) String - A string in JavaScript must be surrounded by quotes.
// In JavaScript, there are 3 types of quotes.
// Double quotes: "Hello".
// Single quotes: 'Hello'.
// Backticks: `Hello`.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

// Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

// Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!

// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

// 4) BOOLEAN - The boolean type has only two values: true and false. This type is commonly used to store yes/no values: true means “yes, correct”,
// and false means “no, incorrect”.


let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

let isGreater = 4 > 1;

console.log( isGreater ); // true (the comparison result is "yes")

// 5) null -> The special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the 
// null value:

//It’s just a special value which represents “nothing”, “empty” or “value unknown”. The code Below states that age is unknown.

let age = null;

// 6) undefined => The special value undefined also stands apart. It makes a type of its own, just like null. The meaning of undefined is “value is not assigned”. 
// If a variable is declared, but not assigned, then its value is undefined:

let cage;

console.log(cage); // shows "undefined"

//  7) Objects and Symbols => The object type is special.
//  All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). 
//  In contrast, objects are used to store collections of data and more complex entities.

let object1 = {
    "name" : "Mohammed Faizan",
    "age"  : 22,
}

console.log(object1.name)// output is Mohammed Faizan


/*
The typeof operator

The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick 
check.

A call to typeof x returns a string with the type name:

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

*/