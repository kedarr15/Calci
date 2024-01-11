console.log("js connected")
let number = 0;
document.getElementById("btn1").onclick = function(){
    console.log("btn1 clicked")
    number = number + 1;
    console.log(number)
    document.getElementById("num").innerHTML = number

}
document.getElementById("btn3").onclick = function(){
    console.log("btn3 clicked")
    number = number - 1;
    if(number < 0){
        alert("you chose the wrong value!")
        number = 0;
    }else if(number>7){
        alert("wrong value buddy!")
    }
    console.log(number)
    document.getElementById("num").innerHTML = number
}
document.getElementById("btn2").onclick = function(){
    console.log("btn2 clicked")
    number = 0;
    console.log(number)
    document.getElementById("num").innerHTML = number
}
