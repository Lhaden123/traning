function changeColor(){
    let myColor = document.getElementById("color-picker");
    let colorValue = myColor.value;
    document.body.style.backgroundColor = colorValue;
}


document.addEventListener("DOMContentLoaded", function (){
    const button = document.getElementById("button");
    button.style.backgroundColor = "blue";
    button.style.color ="white";
});

button.addEventListener("click", function (){
    console.log("Button clicked");
});
document.addEventListener("dblclick", function (){
    console.log("Double click");
});
document.addEventListener("click", function(){
    console.log("click");
});