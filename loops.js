// Loops: while and for

// The “while” loop The while loop has the following syntax:

// while (condition) {
//   // code
//   // so-called "loop body"
// }

let i = 5;
while (i < 6) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// The “do…while” loop The condition check can be moved below the loop body using the do..while syntax:

// do {
//   // loop body
// } while (condition);
let j = 0;
do {
  console.log( j );
  i++;
} while (j < 3);


// The “for” loop => The for loop is more complex, but it’s also the most commonly used loop.

// for (begin; condition; step) {
//   // ... loop body ...
// }

for(let k=0; k<6;k++){
    console.log(i)
    break;
}