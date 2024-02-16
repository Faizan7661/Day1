// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition

// function showMessage() {
//     console.log( 'Hello everyone!' );
//   }

//   showMessage()

// Local variables => A variable declared inside a function is only visible inside that function.


// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function


// Outer variables => A function can access an outer variable as well, for example:

let userName = 'Faizan';

function showMessage() {
  let message = 'Hello, ' + userName;
  console.log(message);
}

showMessage(); // Hello, John

// Returning a value => A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
console.log( result ); // 3

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return false
    }
  }
  
  let age = 18;

  function checkAge(age) {
    return (age > 18)? true : 'Did parents allow you?';
    
  }

  checkAge(age)