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
console.log("OPERATORS:");
//ARITHMETIC OPERATOR
console.log("Arithmetic:");
//Addition
console.log(10 + 5);
//Subtraction
console.log(10 - 5);
//Multiplication
console.log(10 * 5);
//Division
console.log(10 / 5);
//Modulo - Reminder
console.log(10 % 5);
//Power of first value
console.log(10 ** 5);


//INCRE-DECR OPERATOR
console.log("Incr-Decr:");
let i1=5;
console.log(i1++); //POSTFIX
let i2=5;
console.log(++i1); //PREFIX
let i3=5;
i3++;
console.log(i3);

let i4=5;
console.log(i4--);
let i5=5;
console.log(--i5);
let i6=5;
i6--;
console.log(i6);

//COMPARISON OPERATORS
console.log("Comparison:");
c1=5;
c2=6;
console.log(c1==c2);
console.log(c1!=c2);
console.log(c1>c2);
console.log(c1>=c2);
console.log(c1<c2);
console.log(c1<=c2);

//LOGICAL OPERATORS
console.log("Logical:");

console.log("logical OR:");
console.log(4>3 || 5>4);

console.log("logical AND:");
console.log(4>3 && 5>4);

console.log("logical NOT:");
console.log(!true);
console.log(!false);