/*conditional   statements  are used    to control  the flow    of  the program based   upon    some    conditions.
//  Conditional   Statements  in  JS
1.if
2.if .....else
3.if....else if.....else
4.switch  statement
5.ternary   operator
*/

//if condition  example

let temperature=37;

if(temperature>30){
    console.log("its    too hot today!");
}

//if  else  example

let userAge=15;

if(userAge>=18){
    console.log("Eligible   to  vote!");
}else{
    console.log("Not    Elgible to  vote");
}

//if...else if...else

let score=91;

if(score>90){
    console.log("A  grade");
}else   if(score>75){
    console.log("B  grade");
}else   if(score>60){
    console.log("c  grade");
}else   if(score>50){
    console.log("d  grade");
}else{
    console.log("try    again   next    time!");
}

//Switch    case

let day=3;
switch(day){
    case    1:
        console.log("monday");
        break;
    case    2:
        console.log("tuesday");
        break;
    case    3:
        console.log("wednesday");
        break;
    case    4:
        console.log("thursday");
        break;
    case    5:
        console.log("friday");
        break;
    case    6:
        console.log("saturday");
        break;
    case    7:
        console.log("sunday");
        break;
}

//ternary   operator
let givenNum=7;
let result=(givenNum%2==0)?"Even":"odd";
console.log(result);