var displayNumber, displaySign, changeDisplay = true, selectedOperation, memoryDisplay

function clickNumber(button) {

    console.log("clickNumber(" + button + ")")

    displayNumber = document.getElementById("display").innerText

    if (changeDisplay == true) {

        document.getElementById("display").innerText = button

        document.getElementById("sign").innerText = ""
        
        changeDisplay = false

    } else if (displayNumber == "0") {

    document.getElementById("display").innerText = button
       
    } else {

        document.getElementById("display").innerText = displayNumber + button

    }

};

function clickDot(button) {

    console.log("clickDot(" + button + ")")

    displayNumber = document.getElementById("display").innerText

    if (changeDisplay == true) {

        document.getElementById("display").innerText = "0."

        document.getElementById("sign").innerText = ""

        changeDisplay = false
                    
    } else if (displayNumber == "0") {

        document.getElementById("display").innerText = "0."
        
    } else if (displayNumber.split(".").length == 1) {

        document.getElementById("display").innerText = displayNumber + "."

    } else {}
    
};

function clickClear(button) {

    console.log("clickClear(" + button + ")")

    document.getElementById("display").innerText = "0"

    document.getElementById("sign").innerText = ""
    
};

function clickChangeSign(button) {

    console.log("clickChangeSign(" + button + ")")
       
        if (document.getElementById("sign").textContent == "") {

        document.getElementById("sign").innerText = "-"

        } else {

        document.getElementById("sign").innerText = ""
        
        }
    
};

function clickOperation(button) {

    console.log("clickOperation(" + button + ")")

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").innerText

    memoryDisplay = displaySign + displayNumber

    selectedOperation = button

    changeDisplay = true

};

function clickEqual(button) {

    console.log("clickEqual(" + button + ")")

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").innerText

    var equation = memoryDisplay + " " + selectedOperation + " " + displaySign + displayNumber
    
    var result = eval(equation)

    document.getElementById("history-list").innerHTML = document.getElementById("history-list").innerHTML + "<li>" + equation + " = " + result.toString() + "</li>"
    
    document.getElementById("display").innerText = Math.abs(result).toString()

    if (result < 0) {

        document.getElementById("sign").innerText = "-"

    } else {

        document.getElementById("sign").innerText = ""

    }

    selectedOperation = ""

    memoryDisplay = ""

    changeDisplay = true
    
};
function clickPercent(button) {

    console.log("clickPercent(" + button + ")")

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").innerText

    var equation = memoryDisplay + " " + selectedOperation + " " + displaySign + displayNumber + "%"

    if (memoryDisplay) {

        if (selectedOperation == "+" || selectedOperation == "-") {

            var result = eval(memoryDisplay + selectedOperation + "(" + memoryDisplay + "*" + displaySign + displayNumber + "/100)")

        } else {

            var result = eval(memoryDisplay + selectedOperation + displaySign + displayNumber + "/100")
            
        }

    } else {

        var result = eval(displaySign + displayNumber + "/100")

    }

    document.getElementById("history-list").innerHTML = document.getElementById("history-list").innerHTML + "<li>" + equation + " = " + result.toString() + "</li>"
    
    document.getElementById("display").innerText = Math.abs(result).toString()

    if (result < 0) {

        document.getElementById("sign").innerText = "-"

    } else {

        document.getElementById("sign").innerText = ""

    }

    selectedOperation = ""

    memoryDisplay = ""

    changeDisplay = true
    
};

function backSpace(button) {

    console.log("backSpace(" + button + ")")

    displayNumber = document.getElementById("display").innerText

    if (changeDisplay == false && displayNumber != "0" && displayNumber.length > 1) {

        document.getElementById("display").innerText = displayNumber.substring(0,displayNumber.length-1)

    } else if (displayNumber.length <= 1 || changeDisplay == true) {
        
        document.getElementById("display").innerText = "0"

    }
    
}

document.addEventListener("keydown", function(event) {

    console.log("Keydown:" + event.key)

    if (event.key >= 0) {

        clickNumber(event.key.toString())

    } else if (event.key === "." || event.key === ",") {

        clickDot(".")

    } else if (event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/") {

        clickOperation(event.key.toString())

    } else if (event.key === "Enter" || event.key === "=") {

        clickEqual("=")

    } else if (event.key === "Delete" || event.key === "c") {

        clickClear('Clear')

    } else if (event.key === "Backspace") {

        backSpace(event.key)

    }

})