//OBJECTS
console.log("OBJECTS:");

const obj={
    name:"abc",//key:value
    age:21,
    "last name":"def",
    
    fun:function(){
        console.log("Inside Function");
    },

    arr:[20,30,40]

}
console.log(obj.name);
console.log(obj.age);
console.log(obj["last name"]);
obj.fun();

const itm="key2";
obj.key="item1";
obj[itm]="item2";
console.log(obj);

console.log(" ");

//OBJECT INSIDE ARRAY
console.log("OBJECT INSIDE ARRAY:");
const arr=[
    {user:1,name:"Thomas"},
    {user:2,name:"Arthur"},
    {user:3,name:"John"},
]
console.log(arr);

for(const i in arr){
    console.log(arr[i]);
}

const [item1,item2]=arr;
console.log(item1);
console.log(item2);

console.log(" ");


//FUNCTION INSIDE FUNCTIOn
console.log("Function Inside Function:");

function funn(){
    console.log("Inside Function: 1");
    function funn2(){
        console.log("Inside Function: 2");
    }
    funn2();
}
funn();

console.log(" ");

//LEXICAL SCOPE
console.log("Lexical Scope:");

function fun1(){
    const f1=1;
    console.log("Inside Function:"+f1);
    function fun2(){
        const f1=2; //value inside same function
        console.log("Inside Function:"+f1); //LEXICAL SCOPE [access values from outside function]
    }
    fun2();
}
fun1();

console.log("");

//DEBUGGER
console.log("DEBUGGER:")
function fundeb(){
    //debugger;
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
fundeb();

console.log("");

//SETS
console.log("SETS:");
const arr_set=[10,20,30,40,50,30];
console.log(arr_set);

const s=new Set([10,20,30,40,50,30]); //takes only unique value - no repeated value
console.log(s);