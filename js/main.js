// Scope

// var, let, const

// var

/* var x = 1;
var x = 2;
console.log(x); */

// let

/* let y = 1;
let y = 2;
console.log(y); */

// The code above will cause error because let variable can't be redeclared

/* let z = 1;
z = 2;
console.log(z);
 */

// You can re-assign a value to let variable but you can't re-declare it

// const

/* const a = 1;
a = 2;
console.log(a);
 */
// In the case of const you cannot re-declare that variable and you can't reassign a value to it

// This is why it is prefered to use const to declare a variable if you know that you don't need to re-assign it another value, if you need to re-assign another value use let

// Scope
// Global Scope

/* var x = 1;
let y = 2;
const z = 3; */

// Are all global scope variables

// Local Scope

// 2 Types of local scope variables

{
  let y = 4;
  console.log(y); // This won't give an error
}

/* console.log(y); */ // This will give an error

// When console logging y outside the local scope it will give an error "y is not defined"

function myFic() {
  const z = 5;
  console.log(z);

  {
    // The value of y here is not available to be used anywhere but inside the block, in which it is defined
    let y = 4;

    console.log(z); // This won't give an error
  }
}

myFic();

// Another Example

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function Funcc() {
  var x = 10;
  const z = 5;
  {
    var x = 11; // var function scopped
    const z = 6; // const block scope
    let y = 7; // let is also block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

Funcc();
