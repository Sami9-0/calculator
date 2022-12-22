let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;
let operate = (a, operation, b) => {
    if (operation === '+')
    {
        return add(a, b);
    }
    else if (operation === '-')
    {
        return subtract(a, b);
    }
    else if (operation === 'x')
    {
        return multiply(a, b);
    }
    else if (operation === '÷')
    {
        return divide(a, b);
    }
};
let makeCalc = () => {
    let firstNumberCon = parseFloat(firstNumber);
    let secondNumberCon = parseFloat(secondNumber);
    let answer = operate(firstNumberCon, operation, secondNumberCon);
    answer = (Math.round(answer * 10)) / 10;
    return (answer.toString());
};
let checkForDot = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == '.')
        {
            return true;
        }
    }
    return false;
};
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.back-space');
const dot = document.querySelector('.dot');
const bigDisplay = document.querySelector('.big-display');
const minDisplay = document.querySelector('.min-display');
let firstNumber = '';
let secondNumber = '';
let operation = '';
//To switch input from firstNumber to secondNumber
let operationClicked = false;
//To check if operation clicked twice
let operationCounter = 0;
let dotCounter = 0;


numbers.forEach(number => number.addEventListener('click', () => {
    if (!operationClicked) {
        firstNumber = firstNumber + number.textContent;
        bigDisplay.textContent = firstNumber;
    }
    else
    {
        secondNumber = secondNumber + number.textContent;
        bigDisplay.textContent = `${firstNumber}${operation}${secondNumber}`;
    }
}));
operations.forEach(operations => operations.addEventListener('click', () => {
    if (!(firstNumber == ''))
    {
        operationClicked = true;
        dotCounter = 0;
        operationCounter++;
        //If operation pressed more then once in a calc
        if (operationCounter === 2)
        {
            if (secondNumber === '')
            {
                operation = operations.textContent;
                operationCounter = 1;
                bigDisplay.textContent = `${firstNumber}${operation}`;
            }
            else
            {
                operationCounter = 1;
                firstNumber = makeCalc();
                operation = operations.textContent;
                secondNumber = '';
                minDisplay.textContent = bigDisplay.textContent;
                bigDisplay.textContent = `${firstNumber}${operation}`;
            }
        }
        else 
        {
            operation = operations.textContent;
            bigDisplay.textContent = `${firstNumber}${operation}`;
        }
    }
}));
equal.addEventListener('click', () => {
    bigDisplay.textContent = makeCalc();
    minDisplay.textContent = `${firstNumber}${operation}${secondNumber}`;
    firstNumber = makeCalc();
    secondNumber = '';
    operation = '';
    operationClicked = false;
    operationCounter = 0;
    if (!checkForDot(firstNumber)){
        dotCounter = 0;
    }
});
clear.addEventListener('click', () => {
    operationClicked = false;
    firstNumber = '';
    secondNumber = '';
    bigDisplay.textContent = '';
    minDisplay.textContent = '';
    operationCounter = 0;
    dotCounter = 0;
})
backSpace.addEventListener('click', () => {
    /*To check where I'm at during 
    backspace with reference to last char 
    of the display*/
    let text = bigDisplay.textContent;
    let lastChar = text[text.length - 1];
    if (text === firstNumber)
    {
        firstNumber = firstNumber.slice(0, -1);
        bigDisplay.textContent = firstNumber;
    }
    else if (operationClicked === true && lastChar === operation)
    {
        operation = '';
        operationClicked = false;
        bigDisplay.textContent = firstNumber;
        operationClicked--;
    }
    else if (operationClicked === true && !(lastChar === operation))
    {
        secondNumber = secondNumber.slice(0, -1);
        bigDisplay.textContent = `${firstNumber}${operation}${secondNumber}`;
    }
    if (lastChar === '.')
    {
        dotCounter = 0;
    }
});
dot.addEventListener('click', () => {
    dotCounter++;
    if (dotCounter === 1)
    {
        if (!operationClicked) {
            firstNumber = `${firstNumber}.`;
            bigDisplay.textContent = firstNumber;
        }
        else
        {
            secondNumber = `${secondNumber}.`;
            bigDisplay.textContent = `${firstNumber}${operation}${secondNumber}`;
        }
    }
});