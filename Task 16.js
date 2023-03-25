var number3 = +prompt("Enter any number to check if it is even or odd: ")
if (number3 % 2 === 0) {
    document.write(number3 + " is an even number" + "<br>")
}
else {
    document.write(number3 + " is an odd number" + "<br>")
}

var temp = prompt("Tell us the temperature")
if (temp > 40) {
    document.write("It is too hot outside" + "<br>")
}
else if (temp > 30) {
    document.write("The Weather today is Normal" + "<br>")
}
else if (temp > 20) {
    document.write("Today’s Weather is cool" + "<br>")
}
else if (temp > 10) {
    document.write("OMG! Today’s weather is so Cool" + "<br>")
}