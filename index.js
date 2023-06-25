let button = document.getElementById("button")
let firstBox = document.getElementById("firstBox")
let firstHexCode = document.getElementById("firstHexCode")
let secondBox = document.getElementById("secondBox")
let secondHexCode = document.getElementById("secondHexCode")
let thirdBox = document.getElementById("thirdBox")
let thirdHexCode = document.getElementById("thirdHexCode")


const hexadecimalNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

function generatesRandomNumber() {
    let randomNumber = Math.round(Math.random() * 16)
    return randomNumber
}

const buttonClick = function() { 
   let firstCode = "#"
   for(let myFirstLoop = 0; myFirstLoop < 6; myFirstLoop++){
        let firstRandomHexCode = hexadecimalNumber [generatesRandomNumber()]
        firstCode += firstRandomHexCode
   }

   firstBox.style.backgroundColor = firstCode
   firstHexCode.innerText = firstCode

    let secondCode = "#"
    for(let mySecondLoop = 0; mySecondLoop < 6; mySecondLoop++){
        let secondRandomHexCode = hexadecimalNumber [generatesRandomNumber()]
        secondCode += secondRandomHexCode
    }

    secondBox.style.backgroundColor = secondCode
    secondHexCode.innerText = secondCode
   
    let thirdCode = "#"
    for(let myThirdLoop = 0; myThirdLoop < 6; myThirdLoop++){
        let thirdRandomHexCode = hexadecimalNumber [generatesRandomNumber()]
        thirdCode += thirdRandomHexCode
    }

    thirdBox.style.backgroundColor = thirdCode
    thirdHexCode.innerText = thirdCode
}

button.addEventListener("click", function(){
    buttonClick()
})
