//ASYNCHRONOUS
//JS is Synchronous
console.log("ASYNCHRONOUS:");
//SET-TIMEOUT
console.log("Set-Timeout:");
/*setTimeout(()=> {
    console.log("Asynchronous");
},1000);*/

setTimeout(fun,0);
console.log("This");

function fun(){
    console.log("Asynchronous");
}
console.log("is");

//console.log("");

//SET TIMEOUT
//console.log("SET TIMEOUT:");


console.log("");

//CALL-BACK
console.log("CALL-BACK:");

function fun1(val){
    console.log(val);
}
function add(a,b,callback){
    const sum=a+b;
    callback(sum);
}
add(5,10,fun1)


console.log("");

//CALL-BACK HELL
console.log("CALL-BACK HELL:");


loadingData();
collectingData();
approvingData();
approved();


//console.log("");

//PROMISE
//console.log("PROMISE:");


//console.log("");

//ASYNC_AWAIT
//console.log("ASYNC_AWAIT:");