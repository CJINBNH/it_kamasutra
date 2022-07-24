// var buttonPlus = document.getElementById('buttonPlus');
// var buttonMinus = document.getElementById('buttonMinus');
// var buttonMultiply = document.getElementById('buttonMultiply');
// var buttonSplit = document.getElementById('buttonSplit');
//var operationButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonSplit];

var operationButtons = document.getElementsByClassName('operation-button');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

// function getNumber1() {
//     return Number(input1.value);
// }
// function Number(input1.value) {
//     return Number(input2.value);
// }
function makeOperation(operationCode) {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    } else {
        window.alert('operation is unknown');
    }
    window.alert(result);
}
// function makeOperation() {
//     makeOperation('+');
// }
// function onButtonMinusClick() {
//     makeOperation('-');
// }
// function onButtonMultiplyClick() {
//     makeOperation('*');
// }
// function onButtonSplitClick() {
//     makeOperation('/');
// }
function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}
// function addCommonEventListener(i) {
//     operationButtons[i].addEventListener('click', onOperationButtonClick);
// }
for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i];
    button.addEventListener('click', onOperationButtonClick);
}
// addCommonEventListener(0);       
// addCommonEventListener(1);       
// addCommonEventListener(2);       
// addCommonEventListener(3);       
// operationButtons[0].addEventListener('click', onOperationButtonClick);
// operationButtons[1].addEventListener('click', onOperationButtonClick);
// operationButtons[2].addEventListener('click', onOperationButtonClick);
// operationButtons[3].addEventListener('click', onOperationButtonClick);
