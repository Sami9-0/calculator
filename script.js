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
    else if (operation === '/')
    {
        return divide(a, b);
    }
    else{
        console.log('wrong');
    }
};