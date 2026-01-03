//Taking    User    Input   in  Js

//browser   method
//const name=prompt("Enter your name");
//console.log("name:", name);
//op:- name: John  Doe

//Using node readline   module
import  readline    from    "node:readline";

const   r1=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

r1.question("Enter  your    name:",(answer)=>{
    console.log(`hello ${answer}`);
    r1.close();
});