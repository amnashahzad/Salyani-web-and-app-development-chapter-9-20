var int1 = +prompt("Enter first integer to be compared")
var int2 = +prompt("Enter second integer to be compared")
if (int1 > int2) {
    document.write(int1 + " is larger than " + int2 + "<br>")
}
else if (int1 < int2) {
    document.write(int2 + " is larger than " + int1 + "<br>")
}
else if (int1 == int2) {
    document.write(int1 + " is equal to " + int2 + "<br>")
}

var integer1 = +prompt("Enter an integer")
if (integer1 > 0) {
    document.write(int1 + " is larger than zero" + "<br>")
}
else if (integer1 < 0) {
    document.write(int2 + " is smaller than zero" + "<br>")
}
else if (integer1 == 0) {
    document.write(int1 + " is equal to zero" + "<br>")
}

var char = prompt("Enter any character")
if ((char === 'a') || (char === 'e') || (char === 'i') || (char === 'o') || (char === 'u')) {
    document.write("It is a vowel" + "<br>")
}
else {
    document.write("It is not a vowel" + "<br>")
}

var corpass = pakistan
var guesspass = prompt("Enter your password" + "<br>")
if (corpass === guesspass) {
    document.write("Correct! The password you entered matches the original password" + "<br>")
}
else if (corpass !== guesspass) {
    document.write("Incorrect password" + "<br>")
}
else {
    document.write("Please enter your password" + "<br>")
}