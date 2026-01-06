//Iteraors  or  loops   are used    to  preform a   task    repetetively.

//1.for loop
let num=2;
for(let i=1;i<=10;i++){
    console.log(`${num}*${i}=${num*i}`);
}

//2.while   loop
console.log("\nPrinting    countdown")
let anotherNum=10;
while(anotherNum>0){
    console.log(anotherNum--);
}

//3.Do  while
let attempts=0;
do{
    console.log("Trying......")
    attempts++;
}while(attempts<3)

//break statement

for(let i=0;i<10;i++){
    console.log(i);
    if(i==7){
        break;
    }
}

//continue  statement
for(let i=0;i<10;i++){
    if(i==7){
        continue;
    }
    console.log(i);//skips  the current iteration   that    is  7
}


