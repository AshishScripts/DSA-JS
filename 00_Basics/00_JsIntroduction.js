console.log("Hello  World!");//logging  to  console


//Different ways    for logging output

//method    1
console.log("most   common  method");

//method    2
let a=10;
let b=20;
let c=30;
console.table([a,b,c]);

console.table({name:"abc",city:"xyz",contact:90909012334});


/* How  JS Source   code    is  interpreted?

Source Code
  ↓
Tokenization
  ↓
Parsing
  ↓
AST (syntax errors checked here)
  ↓
Bytecode Generation (JS engine  like    v8  ignition    coverts the AST to  bytecode)
  ↓
Bytecode Execution (ligthly optimized   code    is  interpreted instruction-by-instruction  by  the interpreter(ignition))
  ↓
Hot Code Detection
  ↓
JIT Compilation of  the hot code(frequently used    code)   later   it  is  replaced    with    the unoptimized code.
    ↓
Machine Code
*/