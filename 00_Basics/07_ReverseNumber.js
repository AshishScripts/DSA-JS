/*LeetCode  problem 7:Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed.
If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
*/

/*
 * @param {number} x
 * @return {number}
*/

const MAX_VAL=2147483647;

let reverse = function(x) {
    let reversed=0;
    let digit;
    let sign=(x < 0) ? -1 : 1;
    x= Math.abs(x);

    while(x > 0){
        digit= x % 10;
        if(reversed > Math.floor(MAX_VAL/10) || (reversed === Math.floor(MAX_VAL/10) && digit > 7 )){
            return 0;
        }
        reversed=( reversed * 10 ) + digit;
        x=Math.floor(x/10);
    }
    return reversed * sign;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
