//Theory

/* 

VARIABLES

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

You use variables as symbolic names for values in your application. The names of variables, called identifiers, conform to certain rules.

A JavaScript identifier usually starts with a letter, underscore (_), or dollar sign ($). Subsequent characters can also be digits (0 – 9).
Because JavaScript is case sensitive, letters include the characters A through Z (uppercase) as well as a through z (lowercase).

Some examples of legal names are Number_hits, temp99, $credit, and _name.

Reserved names

For example: let, class, return, and function are reserved.

Variable scope

A variable may belong to one of the following scopes:

1) Global scope: The default scope for all code running in script mode.
2) Module scope: The scope for code running in module mode.
3) Function scope: The scope created with a function.
4) In addition, variables declared with let or const can belong to an additional scope:

=> Block scope: The scope created with a pair of curly braces (a block).
When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document.
When you declare a variable within a function, it is called a local variable, because it is available only within that function.
*/

// let - With the keyword const or let. For example, let y = 13. This syntax can be used to declare a block-scope local variable.

let Employee_name = "faizan"
console.log(Employee_name);

Employee_name = "Mohammed Faizan"
console.log(Employee_name);

// Var - With the keyword var. For example, var x = 42. This syntax can be used to declare both local and global variables, depending on the execution context.

// console.log(x); // ReferenceError
const x = 3;
console.log(x);

// console.log(y); // ReferenceError
let y = 3;
console.log(y);

/*Constants - To declare a constant (unchanging) variable, use const instead of let: Variables declared using const are called “constants”. They cannot be
  reassigned. An attempt to do so would cause an error:
  When a programmer is sure that a variable will never change, they can declare it with const to guarantee and clearly communicate that fact to everyone.
*/

const Employee_Birth_Day = "12-03-2001";
console.log(Employee_Birth_Day);


/*
Task

Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using console.log (must output “John”).

*/

let name = "John";
let admin = name;
console.log(admin);//Output - John