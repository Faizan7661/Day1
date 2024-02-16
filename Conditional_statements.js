//if else 
let a = 1 ;

if(a==10){
    console.log("true")
} else {
    console.log("false")
}

// Several conditions: “else if”
let year = 2015

if (year < 2015) {
  console.log ('Too early...' );
} else if (year > 2015) {
console.log( 'Too late' );
} else {
console.log( 'Exactly!' );
}


// Conditional operator ‘?’

// let accessAllowed;
let age = 22

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// console.log(accessAllowed);


// let result = condition ? value1 : value2;

let accessAllowed = (age > 18) ? true : false;
console.log(accessAllowed);
