//VARIABLES
console.log("VARIABLES:")
//"use strict" // makes keyword mandatory to use
b=5;
console.log(b);


var a=5; // old method
console.log(a);

let a1=5;  //good practice to use let & const
const a2=5;
console.log(a1);
console.log(a2);

let a3= "Hello";
console.log(a3);

const a4="Hello World"
const a5=a4;
console.log(a5);

console.log(" ");

//DATA-TYPES
console.log("DATA-TYPES:")
//1) PRIMITIVE DATA-TYPES
//1.1 - Number
const num=50;
console.log(typeof num);

//1.2 - String
const str="Hello World";
console.log(typeof str);

//1.3 - Boolean
const bool=true;
console.log(typeof bool);

//1.4 - Null
const n=null;
console.log(n);
console.log(typeof n);

//1.5 - Undefined
let u;
console.log(typeof u);

//2) PRIMITIVE DATA-TYPES
//2.1 - Object
//2.2 - Array
//2.3 - Function

//STUDY LATER IN SESSION

console.log(" ");

//TYPE-CONVERSION
console.log("TYPE-CONVERSION:")
//Implecit Type Conversion

result='3'+2;
console.log(result);
console.log(typeof result);

//Explicit Type conversion
result1=null;
result1=String(result1);
console.log(result1);
console.log(typeof result1);

console.log("");

//OPERATORS
//ARITHMETIC OPERATOR