/*
String comparison => To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
In other words, strings are compared letter-by-letter.
*/

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true      

/*
The algorithm to compare two strings is simple:

Compare the first character of both strings.
If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second.
We’re done.
Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
Repeat until the end of either string.
If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

*/

// Comparison of different types => When comparing values of different types, JavaScript converts the values to numbers.

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1 

// For boolean values, true becomes 1 and false becomes 0.

alert( true == 1 ); // true
alert( false == 0 ); // true

// A regular equality check == has a problem. It cannot differentiate 0 from false:

alert( 0 == false ); // true

// The same thing happens with an empty string:

alert( '' == false ); // true

// A strict equality operator === checks the equality without type conversion.

// In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

alert( 0 === false ); // false, because the types are different

// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check === These values are different, because each of them is a different type.

alert( null === undefined ); // false

// For a non-strict check == There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.

alert( null == undefined ); // true

