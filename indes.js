console.log("js connected")
let number2 = 0;
document.getElementById("btn4").onclick = function(){
    console.log("btn4 clicked")
    number2 = number2 + 1;
    console.log(number2)
    document.getElementById("numm").innerHTML = number2

}
document.getElementById("btn6").onclick = function(){
    console.log("btn6 clicked")
    number2 = number2 - 1;
    if(number2 < 0){
        alert("you chose the wrong value!")
        number2 = 0;
    }else if(number2>7){
        alert("wrong value buddy!")
    }
    console.log(number2)
    document.getElementById("numm").innerHTML = number2
}
document.getElementById("btn5").onclick = function(){
    console.log("btn5 clicked")
    number2 = 0;
    console.log(number2)
    document.getElementById("numm").innerHTML = number2
}