'use strict'

function getInputValues() {
    return [Number(document.querySelector('.input1').value),
            Number(document.querySelector('.input2').value)];
}

function clearFields() {
    document.querySelector('.input1').value = '';
    document.querySelector('.input2').value = '';
}

function validateFields(input1, input2) {
    if (!(input1 && input2)) {
        alert('Try again entering valid numbers');
        return false;
    }
    return true;
}

function calculateSum() {
    const [input1, input2] = getInputValues();
    document.querySelector('.calculations').innerText = 
        validateFields(input1, input2) ? Number(input1) + Number(input2) : 0;
    clearFields();
}

function calculateDifference() {
    const [input1, input2] = getInputValues();
    document.querySelector('.calculations').innerText =
        validateFields(input1, input2) ? Number(input1) - Number(input2) : 0;
    clearFields();
}

function calculateMultiplication() {
    const [input1, input2] = getInputValues();
    document.querySelector('.calculations').innerText =
        validateFields(input1, input2) ? Number(input1) * Number(input2) : 0;
    clearFields();
}

function calculateDivision() {
    const [input1, input2] = getInputValues();
    document.querySelector('.calculations').innerText =
        validateFields(input1, input2) ? (Number(input1) / Number(input2)).toFixed(3) : 0;
    clearFields();
}
