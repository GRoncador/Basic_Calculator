var displayNumber, displaySign, changeDisplay = false, selectedOperation, memoryDisplay

function clickNumber(button) {

    displayNumber = document.getElementById("display").value

    if (changeDisplay == true) {

        document.getElementById("display").value = button

        document.getElementById("sign").innerText = ""
        
        changeDisplay = false

    } else if (displayNumber == "0") {

    document.getElementById("display").value = button
       
    } else {

        document.getElementById("display").value = displayNumber + button

    }

//    CallLog()

};

function clickDot(button) {

    displayNumber = document.getElementById("display").value

//    getDisplay()

    if (changeDisplay == true) {

        document.getElementById("display").value = "0."

        document.getElementById("sign").innerText = ""

        changeDisplay = false
                    
    } else if (displayNumber == "0") {

        document.getElementById("display").value = "0."
        
    } else if (displayNumber.split(".").length == 1) {

        document.getElementById("display").value = displayNumber + "."

    } else {}
    
//    CallLog()

};

function clickClear(button) {

    document.getElementById("display").value = "0"

    document.getElementById("sign").innerText = ""
    
//    CallLog()

};

function clickChangeSign(button) {

//    if (changeDisplay == false) {
       
        if (document.getElementById("sign").textContent == "") {

        document.getElementById("sign").innerText = "-"

        } else {

        document.getElementById("sign").innerText = ""
        
        }

  // }

//    CallLog()
    
};

function clickOperation(button) {

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").value

    memoryDisplay = displaySign + displayNumber

    selectedOperation = button

    changeDisplay = true

};

function clickEqual(button) {

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").value

    result = eval(memoryDisplay + selectedOperation + displaySign + displayNumber)
    
    document.getElementById("display").value = Math.abs(result).toString()

    if (result < 0) {

        document.getElementById("sign").innerText = "-"

    } else {

        document.getElementById("sign").innerText = ""

    }

    memoryDisplay = ""

    changeDisplay = true
    
};
function clickPercent(button) {

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").value

    result = eval(memoryDisplay + selectedOperation + displaySign + displayNumber)
    
    document.getElementById("display").value = Math.abs(result).toString()

    if (result < 0) {

        document.getElementById("sign").innerText = "-"

    } else {

        document.getElementById("sign").innerText = ""

    }

    memoryDisplay = ""

    changeDisplay = true
    
};

