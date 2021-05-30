var displayNumber, displaySign, changeDisplay = true, selectedOperation, memoryDisplay, memoryNumber = 0, memoryClear = false

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

    memoryClear = false

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

    memoryClear = false
    
};

function clickClear(button) {

    console.log("clickClear(" + button + ")")

    document.getElementById("display").innerText = "0"

    document.getElementById("sign").innerText = ""

    memoryClear = false
    
};

function clickChangeSign(button) {

    console.log("clickChangeSign(" + button + ")")
       
    if (document.getElementById("sign").textContent == "") {

    document.getElementById("sign").innerText = "-"

    } else {

    document.getElementById("sign").innerText = ""
    
    }

    memoryClear = false
    
};

function clickOperation(button) {

    console.log("clickOperation(" + button + ")")

    displaySign = document.getElementById("sign").textContent

    displayNumber = document.getElementById("display").innerText

    memoryDisplay = displaySign + displayNumber

    selectedOperation = button

    changeDisplay = true

    memoryClear = false

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

    memoryClear = false
    
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

    memoryClear = false
    
};

function clickMemory(button) {
   
    console.log("clickMemory(" + button + ")")

    if (button == "Clear" && memoryClear == false && memoryNumber != 0) {

        document.getElementById("display").innerText = Math.abs(memoryNumber).toString()

        if (memoryNumber < 0) {

            document.getElementById("sign").innerText = "-"
    
        } else {
    
            document.getElementById("sign").innerText = ""
    
        }
        
        memoryClear = true

    } else if (button == "Clear" && memoryClear == true && memoryNumber != 0) {

        memoryNumber = ""

        memoryClear = false

    } else if (button == "+" || button == "-") {

        memoryNumber = eval(memoryNumber + button + document.getElementById("sign").innerText + document.getElementById("display").innerText)

    }

    if (memoryNumber == 0) {

        document.getElementById("memory-indicator").innerText = ""

    } else  if (memoryNumber != 0) {

        document.getElementById("memory-indicator").innerText = "M"

    }
    
    changeDisplay = true
    
};

function clickSqr(button) {

    console.log("clickSqr(" + button + ")")

    displaySign = document.getElementById("sign").innerText

    if (displaySign == "-") {

        document.getElementById("display").innerText = "Err"

    } else {

        displayNumber = document.getElementById("display").innerText

        document.getElementById("display").innerText = Math.sqrt(displayNumber)

        document.getElementById("history-list").innerHTML = document.getElementById("history-list").innerHTML + "<li>&#8730;(" + displayNumber + ") = " + Math.sqrt(displayNumber) + "</li>"

    }

    changeDisplay = true

    memoryClear = false
    
};

function backSpace(button) {

    console.log("backSpace(" + button + ")")

    displayNumber = document.getElementById("display").innerText

    if (changeDisplay == false && displayNumber != "0" && displayNumber.length > 1) {

        document.getElementById("display").innerText = displayNumber.substring(0,displayNumber.length-1)

    } else if (displayNumber.length <= 1 || changeDisplay == true) {
        
        document.getElementById("display").innerText = "0"

    }
    
};

document.addEventListener("keydown", function(event) {

    if (event.key >= 0) {
        
        clickNumber(event.key.toString())
                
    } else {
        
        switch (event.key) {
            
            case "." :
            case "," : clickDot("."); break

            case "+" :
            case "-" :
            case "*" :
            case "/" : clickOperation(event.key.toString()); break

            case "Enter" :
            case "=" : clickEqual("="); break

            case "Delete" :
            case "c" : clickClear('Clear'); break
    
            case "Backspace" : backSpace(event.key); break

            case "%" : clickPercent('%'); break
  
        }
        
    }
    
});