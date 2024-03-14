const myDiv = document.getElementById("my-div");

document.addEventListener("mousemove",(e)=>{
    move(e);
})

const move = (e)=>{
    var x = e.pageX;
    var y = e.pageY;

    myDiv.style.left = x +"px";
    myDiv.style.top = y +"px";
    console.log(e);
}