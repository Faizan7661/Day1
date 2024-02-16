// String Conversion => String conversion happens when we need the string form of a value.

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

// Numeric Conversion => Numeric conversion in mathematical functions and expressions happens automatically. For example, when division / is applied to non-numbers:

alert( "6" / "2" ); // 3, strings are converted to numbers

// We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num); // number

// Boolean conversion => 

/*
The conversion rule:

Values that are intuitively “empty”, like 0, an empty string, null, undefined, and NaN, become false.
Other values become true.

*/

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

// note: the string with zero "0" is true . Some languages (namely PHP) treat "0" as false. But in JavaScript, a non-empty string is always true.

alert( Boolean("0") ); // true
alert( Boolean(" ") ); // spaces, also true (any non-empty string is true)

/*

undefined    => NaN
null         => 0
true / false => 1 / 0
string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.

*/