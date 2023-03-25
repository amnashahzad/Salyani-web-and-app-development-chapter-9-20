var greeting, hour = 13
if (hour < 18) {
    greeting = "Good day"
}
else {
    greeting = "Good evening"
}

var time = prompt("Enter time in 2 hour format: ")
if (time >= 0000 && time < 1200) {
    document.write("Good Morning!" + "<br>")
}
else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!" + "<br>")
}
else if (time >= 1700 && time < 2100) {
    console.log("Good Evening!" + "<br>")
}
else if (time >= 2100 && time < 2359) {
    dconsole.log("Good Night!" + "<br>")
}

var students = []

var student = new Array()

var student = new Array("std1", "std2", "std3", "std4", "std5")

var numArray = [1, 2, 5, 6, 7, 8, 6, 7]

var boolArray = [true, false]

var mixedArray = [1, 'string1', true, 8, false, 'string 2']

var qual = ('Qualification in console:' + '<br>').bold()
document.write(qual + "<br>")
var qualification = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD']
var i;
for (i = 0; i < qualification.length; i++) {
    console.log((i + 1) + ') ' + qualification[i] + "<br>")
}