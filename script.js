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
let makeCalc = () =>
{
    let firstNumberCon = parseInt(firstNumber);
    let secondNumberCon = parseInt(secondNumber);
    return operate(firstNumberCon, operation, secondNumberCon);
}
const numbers = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const backSpace = document.querySelector('.back-space');
const bigDisplay = document.querySelector('.big-display');
const minDisplay = document.querySelector('.min-display');
let firstNumber = '';
let secondNumber = '';
let operation = '';
//To switch input from firstNumber to secondNumber
let operationClicked = false;


numbers.forEach(number => number.addEventListener('click', () => {
    if (!operationClicked) {
        firstNumber = firstNumber + number.textContent;
        bigDisplay.textContent = firstNumber;
    }
    else
    {
        secondNumber = secondNumber + number.textContent;
        bigDisplay.textContent = `${firstNumber} ${operation} ${secondNumber}`;
    }
}));
operations.forEach(operations => operations.addEventListener('click', () => {
    operation = operations.textContent;
    operationClicked = true;
    bigDisplay.textContent = `${firstNumber} ${operation}_`;
}));
equal.addEventListener('click', () => {
    bigDisplay.textContent = makeCalc();
    minDisplay.textContent = `${firstNumber} ${operation} ${secondNumber}`;
    firstNumber = makeCalc();
    secondNumber = '';
});
clear.addEventListener('click', () => {
    operationClicked = false;
    firstNumber = '';
    secondNumber = '';
    bigDisplay.textContent = '';
    minDisplay.textContent = '';
})
backSpace.addEventListener('click', () => {
    let text = bigDisplay.textContent;
    if (charAt(text.length - 1) === '_')
    {
        bigDisplay.textContent = text.slice(0, -3);
        operationClicked = false;
    }
    else
    {
        bigDisplay.textContent = text.replace(/ .$/, '');
        operationClicked = false;
    }
});