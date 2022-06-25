const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });



}

navSlide();

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand')
const minuteHand = document.querySelector('[data-minute-hand')
const secondHand = document.querySelector('[data-second-hand')

function setClock() {
    const currentDate = new Date ()
    const secondsRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined

    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()

    }
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break

            default:
                return
            

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        }else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }


    updateDisplay () {
        this.currentOperandTextElement.innerText = this.getDisplayNumber
        (this.currentOperand)
        if (this.operation != null){
            this.previousOperandTextElement.innerText = 
            `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`

        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click' , button => {
    calculator.compute()
    calculator.updateDisplay()
})


allClearButton.addEventListener('click' , button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click' , button => {
    calculator.delete()
    calculator.updateDisplay()
})

function takeOut(el) {
    el.parentElement.remove();
  }
  
document.getElementById('myButton').onclick = function () {
    const doIt = document.getElementById('toDo').value;
    const li = '<li id="item">' + doIt + '<button type="button" onClick="takeOut(this)" id="clearOne">x</button>' + '</li>';
    document.getElementById('list').insertAdjacentHTML('beforeend', li);
    document.getElementById('toDo').value = '';
    document.getElementById('clearList').onclick = function() {
        const ul = document.getElementById('list');
        while (ul.hasChildNodes()) {
            ul.removeChild(ul.firstChild);
        }
    }
    document.getElementById('clearOne').onclick = function () {
        const currentLi = document.getElementById('item');
        currentLi.remove();
    };
}
function takeOut2(ll) {
    ll.closest('tr').remove();
  }

document.getElementById('myButton2').onclick = function () {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const amount = document.getElementById('amount').value;
    const nameTd = '<td>' + name + '</td>';
    const dateTd = '<td>' + date + '</td>';
    const amountTd = '<td>' + '$'+ amount + '</td>' + '<td>' + 
    '<button id="removeBtn"type="button" onClick="takeOut2(this)">X</button></td>';
    const tr = '<tr>' + nameTd + dateTd +  amountTd + '</tr>';
    document.getElementById('table').insertAdjacentHTML('beforeend', tr);
    document.getElementById('clearList2').onclick = function () {
        const cl = document.getElementById('table');
        while (cl.hasChildNodes()) {
            cl.removeChild(cl.firstChild);
        }
    }
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('date').value = '';
}    




