const calculator = (a, b, operator) => {
    let result = 0;

    if(operator === '+'){
        return result = a + b;
    }
    if(operator === '-'){
        return result = a - b;
    }
    if(operator === '*'){
        return result = a * b;
    }
    if(operator === '/'){
        return result = a / b;
    }

}

module.exports = calculator;