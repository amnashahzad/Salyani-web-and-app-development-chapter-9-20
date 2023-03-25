var city = prompt("What is your city name?")
if (city === "Karachi" || city === "karachi") {
    document.write("Welcome to city of lights" + "<br>")
}
else {
    document.write("")
}

var gender1 = prompt("What is your gender?")
if (gender1 === "Male" || gender1 === "male") {
    document.write("Good Morning Sir" + "<br>")
}
else if (gender1 === "Female" || gender1 === "female") {
    document.write("Good Morning Ma’am" + "<br>")
}

var signalcolor = prompt("Tell the color of traffic signal on road?")
if (signalcolor === "Red" || signalcolor === "red") {
    document.write("Must Stop" + "<br>")
}
else if (signalcolor === "Yellow" || signalcolor === "yellow") {
    document.write("Ready to move" + "<br>")
}
else if (signalcolor === "Green" || signalcolor === "green") {
    document.write("Move now" + "<br>")
}