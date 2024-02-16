/*
There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression;
 */

//syntax

// let func = function(arg1, arg2, ..., argN) {
//     return expression;
//   };

//example 


let sum = (a,b)=> a+b
console.log(sum(1,2));

// Multiline arrow functions 

let sum1 = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  console.log( sum1(1, 2) ); // 3