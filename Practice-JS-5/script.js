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

function loadingData(callback){
    setTimeout(()=>{
        console.log("1) Loading Data...");
        callback();
    },4000);
};
function collectingData(callback){
        setTimeout(()=>{
            console.log("2) Collecting Data...");    //CALL BACK HELL TAKES ANOTHER TIME 
            callback();
        },5000)
        
};
function approvingData(){
    console.log("3) Approving Data...");
}
function approved(){
    console.log("4) Data Approved.");
}


loadingData(function(){
    collectingData(function(){ //funciton inside function creates call back hell can be resolved using promise
        approvingData();
        approved();
    });
    
});



console.log("");

//PROMISE
console.log("PROMISE:");

function funp(task){
    return new Promise((resolve,reject)=>{
        if(task){
            resolve("Completed");
        }
        else{
            reject("Not Completed");
        }
    })
}

const onResolve = (res)=>{
    console.log(res);
}
const onReject = (err)=>{
    console.log(err);
}

funp(true).then(onResolve).catch(onReject);
funp(false).then(onResolve).catch(onReject);

//resolving callback hell with promise
//check video

console.log("");

//ASYNC_AWAIT
console.log("ASYNC_AWAIT:");
async function ex(){
    await loadingData();
    await collectingData();
    await approvingData();
    await approved();
}
ex().then(collectingData).catch((err)=>{
    console.log(err);
});