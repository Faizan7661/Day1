/*
Maths

The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
The first four are straightforward, while % and ** need a few words about them.

*/

// Remainder % => The remainder operator %, despite its appearance, is not related to percents.

// The result of a % b is the remainder of the integer division of a by b.

console.log( 5 % 2 ); // 1, the remainder of 5 divided by 2
console.log( 8 % 3 ); // 2, the remainder of 8 divided by 3
console.log( 8 % 4 ); // 0, the remainder of 8 dividedconsole.log

// Exponentiation ** =>  The exponentiation operator a ** b raises a to the power of b.

console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 2 ); // 2² = 4
console.log(2 ** 4 ); // 2⁴ = 16


// String concatenation with binary + => 

let s = "my" + "string";
console.log(s); // mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"

// Here’s a more complex example:

console.log(2 + 2 + '1' ); // "41" and not "221"
console.log('1' + 2 + 2); // "122" and not "14"

console.log( 6 - '2' ); // 4, converts '2' to a number
console.log( '6' / '2' ); // 3, converts both operands to numbers

// Chaining assignments

let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4

// Modify-in-place

// let n = 2;
// n = n + 5;
// n = n * 2;

// This notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14


// Increment/decrement => Increasing or decreasing a number by one is among the most common numerical operations.

// Increment ++ increases a variable by 1:

let counter1 = 2;
counter1    ++;        // works the same as counter = counter + 1, but is shorter
console.log( counter1 ); // 3

// Decrement -- decreases a variable by 1:

let counter2 = 2;
counter2--;        // works the same as counter = counter - 1, but is shorter
console.log( counter2 ); // 1


/*
Bitwise operators =>

The list of operators:

AND ( & )
OR ( | )
XOR ( ^ )
NOT ( ~ )
LEFT SHIFT ( << )
RIGHT SHIFT ( >> )
ZERO-FILL RIGHT SHIFT ( >>> )

*/

