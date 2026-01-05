// JavaScript Operators with Examples

/*
1. Arithmetic Operators: Used to perform mathematical operations.
   Types: Addition (+), Subtraction (-), Multiplication (*), Division (/), Modulus (%), Exponentiation (**)
*/
let a = 10, b = 5;
console.log(a + b); // Addition (+) -> 15
console.log(a - b); // Subtraction (-) -> 5
console.log(a * b); // Multiplication (*) -> 50
console.log(a / b); // Division (/) -> 2
console.log(a % b); // Modulus (%) -> 0 (Remainder)
console.log(a ** b); // Exponentiation (**) -> 100000

/*
2. Assignment Operators: Used to assign values to variables.
   Types: =, +=, -=, *=, /=, %=, **=
*/
let x = 10;
x += 5; // Equivalent to x = x + 5 (15)
x -= 3; // Equivalent to x = x - 3 (12)
x *= 2; // Equivalent to x = x * 2 (24)
x /= 4; // Equivalent to x = x / 4 (6)
x %= 5; // Equivalent to x = x % 5 (1)
x **= 2; // Equivalent to x = x ** 2 (1)

/*
3. Comparison Operators: Used to compare values.
   Types: ==, ===, !=, !==, >, <, >=, <=
*/
console.log(a == b); // Equal to (==) -> false
console.log(a === b); // Strict equal to (===) -> false (checks both value and type)
//  1=="1"//true    as  value   is  same    ==1
//1==="1"//false    as  the values  are same    but the types   are not equal   one is  of  number  type    and other   of  string  type
//1!=="1"   true
console.log(a != b); // Not equal to (!=) -> true
console.log(a !== b); // Strict not equal to (!==) -> true (checks both value and type)
console.log(a > b); // Greater than (>) -> true
console.log(a < b); // Less than (<) -> false
console.log(a >= b); // Greater than or equal to (>=) -> true
console.log(a <= b); // Less than or equal to (<=) -> false

/*
4. Logical Operators: Used to perform logical operations.
   Types: AND (&&), OR (||), NOT (!)
*/
let p = true, q = false;
console.log(p && q); // Logical AND (&&) -> false
console.log(p || q); // Logical OR (||) -> true
console.log(!p); // Logical NOT (!) -> false

/*
5. Bitwise Operators: Used for bitwise operations.
   Types: AND (&), OR (|), XOR (^), NOT (~), Left Shift (<<), Right Shift (>>), Unsigned Right Shift (>>>).
*/
console.log(a & b); // Bitwise AND (&) -> 0
console.log(a | b); // Bitwise OR (|) -> 15
console.log(a ^ b); // Bitwise XOR (^) -> 15
console.log(~a); // Bitwise NOT (~) -> -11
console.log(a << 1); // Left shift (<<) -> 20
console.log(a >> 1); // Right shift (>>) -> 5

/*
6. Ternary(Three  operands)Operator: A shorthand for an if-else statement.
   Syntax: condition ? expression_if_true : expression_if_false
*/
let result = (a > b) ? "A is greater" : "B is greater";
console.log(result); // -> "A is greater"

// Separate example for ternary operator
let age = 18;
let canVote = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log(canVote); // -> "Eligible to vote"

/*
7. Type Operators: Used to determine the type of a variable.
   Types: typeof, instanceof
*/
console.log(typeof a); // typeof -> "number"
console.log(a instanceof Number); // instanceof -> false (works with objects)

/*
8. String Operators: Used to manipulate strings.
   Types: Concatenation (+)
*/
let str1 = "Hello", str2 = " World";
console.log(str1 + str2); // Concatenation (+) -> "Hello World"

console.log( '1' + 2 ); // "12"
console.log( 2 + '1' ); // "21"
//See, it doesn’t matter whether the first operand is a string or the second one. The rule is simple:
//if either operand is a string, the other one is converted into a string as well


//increment  and   decrement   operators
//two types:   prefix   and   postfix

//prefix:   first increment   or decrement   then  assign/use   the   value
{
let   x=10;
console.log(++x);//11
// first x  is incremented x+1=11   then  the   value is assigned x=11

let   y=10;
console.log(y++);//10
//here   first value is used  y=10  but   for   next  time  y  is incremented y=11
console.log(y);//11


let   z=10;
console.log(++z+(z++)+(z++)+(++z));//48

//same   logic applies  for   the   decrements


}

//==operator   compares value
//<   , >,<=,>= are different   from  == and   they  change   the   values
//<,<=,etc  changes  the   value of null  to 0

console.log(null>0);//null converted   to zero
console.log(null==0);
console.log(null>=0);// null  is implicitly  converted   to 0
console.log(null<=0);   // converts the   null  to 0
console.log();

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);
console.log(undefined<=0);

// ***** Avoid the   comaprison  of the   different   datatypes   illustrated above***