//FUNCTIONS

console.log("FUNCTIONS:")

console.log("Normal Function: ")
function name(){
    console.log("Hello");
}
name();

console.log("Parameter Passing Function: ")
function name1(a){
    console.log("Hello "+a);
}
name1("World");

function name2(a,b){
    console.log(a+b);
}
name2(3,3);

const f1=5;
const f2=5;
function name3(a,b){
    return a+b;
}
console.log(name3(f1,f2));

//local-global concept
const a=5; //global
function local(){
    const b=3; //local 
    console.log(b);
}
local();