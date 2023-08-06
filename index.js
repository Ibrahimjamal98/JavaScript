// 1.Basic Understanding of Hoisting 
console.log(a); //Undefined becuase every VAR value is set by defualt in VC to (UNDIFINED)
var a = 5;

console.log(b);
let b = 5; //error becuase we can`t access before initialization

console.log(c);
const c = 5; //error becuase we can`t access before initialization




//..........................................................................................................................................................
// 2.Understanding Function Hoisting 

console.log(myFuncDecl()); // the output will be the string because Hoisting can access to functions and it can replace the elements between top and right.
function myFuncDecl() {
    return "Hello from function declaration!";
}
console.log(myFuncExpr()); // the output will be error becuase hoisting cannot access to variables . so it can`t read the outputs before the variables .
var myFuncExpr = function() {
    return "Hello from function expression!";
}




//..........................................................................................................................................................
//3.Nested Scopes and Hoisting

const x = "global";

function outerFunc() {
    let y = "outer";

    function innerFunc() {
        var z = "inner";
        console.log(x); // "global" becuase its global 
        console.log(y); // "outer" becuase its inside the block 
    }
    innerFunc();
    console.log(z); // error
}
outerFunc();





//..........................................................................................................................................................
//4.


const a = 1;

function b() {
    const a = 10;
    c();
    return;

    function c() {
        console.log(a); // the output is "10" becuase its inside the block of function "c".
    }
}
b();
console.log(a); // error becuase its outside the block of function (b).
foo();

function foo() {
    console.log(x); //Undefined Becuase as we said the default value for VAR is Undefined , so when we still doing the output before the variable it`ll still Undefined but when we put the output after the variable it will be "hello world" also hoisting cant access to the Variables .
    var x = "Hello, world!";
    
    bar();

    function bar() {
        console.log(x); // Error
        let x = "Hello, scope!";
    }
}