let num1 = "0";
let num2 = "0";
let isFirst = true
let result
let aufgabe

const equal = document.querySelector(".equal")

//to display the result 
const resultHtm = document.querySelector(".result")




equal.addEventListener('click',(rhino) => {
    rhino.preventDefault()

    if (aufgabe == 'plus') {
        result = Number(num1) + Number(num2)
    } else if (aufgabe == 'minus') {
        result = Number(num1) - Number(num2)
    } else if (aufgabe == 'multiply') {
        result = Number(num1) * Number(num2)
    } else if (aufgabe == 'divide') {
        result = Number(num1) / Number(num2)
    }

    num1 = String(result)
    num2 = "0"
    //isFirst = true
    aufgabe = undefined
    resultHtm.innerText = result
})


const number = (newInput) => {
    
    if (isFirst) {
        if (num1 == "0") {
            num1 = String(newInput);
        } else {
            num1 = num1 + newInput;
        }
        
        resultHtm.innerText = num1

    } else {
        if (num2 == "0") {
            num2 = String(newInput);
        } else {
            num2 = num2 + newInput;
        }
        resultHtm.innerText = num2
    }
}

function selectTask(task) {
    aufgabe = task
    isFirst = false
}

const clearDisplay = () => {
    resultHtm.innerText = 0
    result = undefined
    aufgabe = undefined
    num1 = "0"
    num2 = "0"
}