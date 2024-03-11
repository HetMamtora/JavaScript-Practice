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
console
console.log(obj.name);
console.log(obj.age);
console.log(obj["last name"]);
obj.fun();

const itm="key2";
obj.key="item1";
obj[itm]="item2";
console.log(obj);