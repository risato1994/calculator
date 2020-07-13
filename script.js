const numbers = document.querySelectorAll(`.number`);
const calculatorScreen = document.querySelector(`.calculator-screen`);
let prevNumber = ` `;
let calculationOperator = ` `;
let currentNumber = `0`;

numbers.forEach(number => {
    number.addEventListener(`click`, event => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })
});

function updateScreen(number) {
    calculatorScreen.value = number;
}

function inputNumber(number) {
    if (currentNumber === `0`) {
        currentNumber = number;
    } else {
        currentNumber += number;
    }

}

const operators = document.querySelectorAll(`.operator`);

operators.forEach(operator => {
    operator.addEventListener(`click`, event => {
        inputOperator(event.target.value);
    })
})

function inputOperator(operator) {
    if (calculationOperator === ``) {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = `0`;
}

const equalSign = document.querySelector(`.equal-sign`);

equalSign.addEventListener(`click`, () => {
    calculate();
    updateScreen(currentNumber);
});

function calculate() {
    let result = ``;
    switch (calculationOperator) {
        case `+`:
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case `-`:
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case `*`:
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case `/`:
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        default:
            return;
    }

    currentNumber = result;
    calculationOperator = ``;
}

const clearBtn = document.querySelector(`.all-clear`);

clearBtn.addEventListener(`click`, () => {
    clearAll();
    updateScreen(currentNumber);
});

function clearAll() {
    prevNumber = ``;
    calculationOperator = ``;
    currentNumber = ``;
}

const decimal = document.querySelector(`.decimal`);

decimal.addEventListener(`click`, event => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

function inputDecimal(dot) {
    if (currentNumber.includes(`.`)) {
        return;
    }
    currentNumber += dot;
}

const percentage = document.querySelector(`.percentage`);

percentage.addEventListener(`click`, event => {
    inputPercentage(calculatorScreen.value);
    updateScreen(currentNumber);
});

function inputPercentage(number) {
    let result = ``;
    if (currentNumber.length !== 0 && currentNumber !== 0) {
        result = parseFloat(number) * 1 / 100;
    }

    currentNumber = result;

}