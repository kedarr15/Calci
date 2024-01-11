console.log("js connected")
let number3 = 0;
document.getElementById("btn7").onclick = function(){
    if(check1.checked){
        console.log("it is checked")
    console.log("btn7 clicked")
    number3 = number + number2;
    console.log(number3)
    document.getElementById("nummb").innerHTML = number3
}

    if(check2.checked){
        console.log("it is checked")
    console.log("btn7 clicked")
    number3 = number - number2;
    console.log(number3)
    document.getElementById("nummb").innerHTML = number3
}

    if(check3.checked){
        console.log("it is checked")
    console.log("btn7 clicked")
    number3 = number / number2;
    console.log(number3)
    document.getElementById("nummb").innerHTML = number3
    }

    if(check4.checked){
        console.log("it is checked")
    
    console.log("btn7 clicked")
    number3 = number * number2;
    console.log(number3)
    document.getElementById("nummb").innerHTML = number3
    }
}

