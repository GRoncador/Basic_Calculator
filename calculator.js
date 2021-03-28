var displayNumber, displaySign, changeDisplay = false, selectedOperation, memoryDisplay

function clickNumber(button) {

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

    document.getElementById("display").innerText = "0"

    document.getElementById("sign").innerText = ""
    
};

function clickChangeSign(button) {
       
        if (document.getElementById("sign").textContent == "") {

        document.getElementById("sign").innerText = "-"

        } else {

        document.getElementById("sign").innerText = ""
        
        }
    
};

function clickOperation(button) {

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").innerText

    memoryDisplay = displaySign + displayNumber

    selectedOperation = button

    changeDisplay = true

};

function clickEqual(button) {

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