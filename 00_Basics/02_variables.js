//Variables in  JS:-    named   memory  location    whose   values  can change.
//constants:-   values  remains the same    throughout  the program.

//There are two methods to  declare variables   in  js
//1.var
//2.Let

//constants are declared    using   const   keyword

const   PI= 3.14;
const   MAX=100;

//MAX=1000;//TypeError: Assignment to constant variable.

var myVar1=10;
console.log(myVar1);

let myVar2=20;
console.log(myVar2);

/* var  vs  let
*   1.var    can be  hoisted, while let    and     const   are   also    hoisted but in  TDZ .
*   2.var   can be  redeclared  and reassigned  while   let cant    be  redeclared  it  can only    be  reassigned.
*   3.var   is  function    scoped  and let is  block   scpoed({})
*/


/* Hoisting in JavaScript is a behavior where variable and function declarations
are moved to the top of their containing scope during the compilation phase, before the code is executed.

only    declarations    are hoisted not the assigned    values.

*/

//Funtion   Hoisting
greet();

function    greet(){
    console.log("Hello");
}

//variable  hoisting

console.log(hoistedVariable);//undefined
var hoistedVariable=100;

//console.log(hoistedVariable2);//ReferenceError: Cannot access 'hoistedVariable2' before initialization
//let hoistedVariable2=1000;//let   cant    be  hoisted like    var
