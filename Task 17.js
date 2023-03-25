var numcal1 = +prompt("Enter first number: ")
var numcal2 = +prompt("Enter second number: ")
var operator = prompt("Enter an operator: ")
if (operator === "+") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 + numcal2 + "<br>")
}
if (operator === "-") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 - numcal2 + "<br>")
}
if (operator === "*") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 * numcal2 + "<br>")
}
if (operator === "/") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 / numcal2 + "<br>")
}
if (operator === "%") {
    document.write(numcal1 + operator + numcal2 + "=" + numcal1 % numcal2 + "<br>")
}

var ch = prompt('Enter any character or number:');
var a = ch.charCodeAt(0);
if ((a >= 48) && (a <= 57)) {
    alert('Input is a number.')
}
else if ((a >= 65) && (a <= 90)) {
    alert('Input is an uppercase letter.')
}
else if ((a >= 97) && (a <= 122)) {
    alert('Input is lowercase letter.')
}
else {
    alert('Invalid input');
}