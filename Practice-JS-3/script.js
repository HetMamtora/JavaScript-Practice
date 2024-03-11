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
console.log("Local-Global Concept: ")
const a=5; //global
function local(){
    const b=3; //local 
    console.log(b);
}
local();
console.log(a);

//Anonymoys Function
console.log("Anonymous Function:");
const fun = function(){
    console.log("Hello");
}
fun();

//Immediately invoked function
console.log("Immediate Invoke Function:");
(function(){
    console.log("Hello");
})()

//Arrow Function
console.log("Arrow Function:");
const a1=(a,b)=>{ 
    return a+b;
}
console.log(a1(2,3));

const a2=(a,b)=> console.log(a+b);
console.log(a2(2,3));


//ARRAYS 
console.log("ARRAYS:");
const arr1=["John","Jane","Rick"];
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);

const arr2=["John",1,true,null,undefined];
console.log(arr2);

const arr3=["John",1,true,null,undefined];
arr3.push("abc");
console.log(arr3);
arr3.unshift("bcd");
console.log(arr3);
arr3.splice(1,2,"splice");
console.log(arr3);

const arr4=[10,20,30,40,50];
console.log(arr4);
for(i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}

arr4.forEach((val,index,array)=>{
    console.log("["+index+"] "+val+" - "+array);
})

const num1=[10,20,30,40,50];
const num2=[60,70,80,90,100];
console.log(num1.concat(num2));
console.log(num1.indexOf(20));
console.log(num1.reverse());


//FOR-IN -- FOR-OF
console.log("For-In & For-Of");

let ary=[10,20,30,40];
for(const ar in ary){
    console.log(ar);
    console.log(ary[ar]);
}

//MULTIDIMENSIONAL ARRAY
const ard=[
    ["john",30],
    ["robert",22],
    ["thomas",36]
];
console.log(ard);
console.log(ard[1]);
console.log(ard[1][1]);

for(let i=0;i<ard.length;i++){
    for(let j=0;j<ard[i].length;j++){
        console.log(ard[i][j]);
    }
}

//COPY AND SPREAD