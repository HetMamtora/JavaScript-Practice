//CONDITIONAL

//IF-NESTED IF
console.log("IF & NESTED-IF:")
let age=19;
let name="John";
if(age>=18){
    if(name=="John"){
        console.log("You are eligible.");
    }
    else{
        console.log("Name mismatch");
    }
}
else{
    console.log("Not Eligible.");
}

//ELSE IF
console.log("ELSE IF LADDER:");
let a=10;
let b=15;

if(a>b){
    console.log("A is greater");
}
else if(b>a){
    console.log("B is greater");
}
else{
    console.log("Both are equal")
}

//SWITCH CASE
console.log("SWITCH CASE:")
let ch=3;

switch(ch){
    case 1: console.log("Inside Case-1");
            break;
    case 2: console.log("Inside Case-2");
            break;
    case 3: console.log("Inside Case-3");
            break;
    default: console.log("Wrong Choice/Input");

}

//LOOPS

//FOR-LOOP
console.log("FOR LOOP:")
for(var i=0;i<=10;i++){
    //console.log("2 x "+i+" = " +2*i); //METHOD-1
    console.log(`2 x ${i} = 2*${i}`); //METHOD-2 - BACK TICK METHOD
}

//WHILE-LOOP
console.log("WHILE-LOOP:")
var w=1;
while(w<=10){
    console.log("2 x "+w+" = " +2*w);
    w++;
}

//DO_WHILE-LOOP
console.log("DO_WHILE-LOOP:")
var d=1;
do{
    console.log("2 x "+d+" = " +2*d);
    d++;   
}while(d<=10)