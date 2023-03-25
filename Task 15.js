var secretNumber = 5
var guessSecretNumber = +prompt("Guess the Secret Key")
var guessSecretNumberAddOne = (guessSecretNumber - 1)
if (secretNumber === guessSecretNumber) {
    document.write("Bingo! Correct answer" + "<br>")
}
else if (secretNumber === guessSecretNumberAddOne) {
    document.write("Close enough to the correct answer" + "<br>")
}

var number2 = +prompt("Enter any number: ")
if (number2 % 3 === 0) {
    document.write(number2 + " is divisible by 3" + "<br>")
}
else {
    document.write(number2 + " is not divisible by 3" + "<br>")
}

var fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
var i;
for (i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + '<br>')
}
for (i = 0; i < fruits.length; i++) {
    document.write('Element at index ' + i + ' is ' + fruits[i] + '<br>')
}

var i;
document.write('Counting: ' + '<br>' + '<br>');
for (i = 1; i <= 15; i++) {
    document.write(i + ', ');
}

document.write('Reverse Counting: ' + '<br>' + '<br>');
for (i = 10; i >= 1; i--) {
    document.write(i + ', ');
}

document.write('Even: ' + '<br>' + '<br>');
for (i = 0; i <= 20; i + 2) {
    document.write(i + ', ');
}

document.write('Odd: ' + '<br>' + '<br>');
for (i = 1; i < 20; i + 2) {
    document.write(i + ', ');
}

document.write('Series:' + '<br>' + '<br>');
for (i = 2; i <= 20; i + 2) {
    document.write(i + 'k, ');
}

var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var b = prompt('Welcome to ABC Bakery. What do you want to order Sir/Ma' + "'" + 'am');
var i;
for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
        document.write(b + 'availabe at index ' + i + ' of our bakery.');
        break;
    }
    else {
        document.write('We are Sorry. ' + b + ' is not available at our bakery.')
    }
}

var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] < a[j]) {
            f = a[j];
        }
    }
}
document.write('The Largest number is ' + f);

var a = [24, 53, 78, 91, 12];
var i, j;
var f;
for (i = 0; i < a.length; i++) {
    for (j = 0; j < a.length; j++) {
        if (a[i] > a[j]) {
            f = a[j];
        }
    }
}
document.write('The Smallest number is ' + f);
var i;
for (i = 1; i <= 20; i++) {
    document.write(5 * i + ', ');
}