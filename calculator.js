let num = '';
const result = document.getElementById("result");

function updateElement(value) {
    num += value;
    result.innerText = num;
}

function calculate() {
    try {
        if (num !== '') {
            num = Function('"use strict";return (' + num + ')')().toString();
            result.innerText = num;
        }
    }
    catch {
        result.innerText = "Invalid Expression";
        num = '';
    }
}

function clearDisplay() {
    num = '';
    result.innerText = '0';
}