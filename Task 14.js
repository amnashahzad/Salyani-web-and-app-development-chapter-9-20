var som1 = +prompt("Marks obtained in Subject 1: ")
var stm1 = +prompt("Total marks in Subject 1: ")
var som2 = +prompt("Marks obtained in Subject 2: ")
var stm2 = +prompt("Total marks in Subject 2: ")
var som3 = +prompt("Marks obtained in Subject 3: ")
var stm3 = +prompt("Total marks in Subject 3: ")
var percentage1 = (som1 + som2 + som3) / (stm1 + stm2 + stm3) * 100
document.write("Marks Sheet" + "<br><br>")
document.write("Total marks : " + (stm1 + stm2 + stm3) + "<br>")
document.write("Marks obtained : " + (som1 + som2 + som3) + "<br>")
document.write("Percentage : " + percentage1 + "%" + "<br>")
if (percentage1 < '100' && percentage1 >= '80') {
    document.write("Grade : A-one" + "<br>")
    document.write("Remarks : Excellent" + "<br>")
}
else if (percentage1 < '80' && percentage1 >= '70') {
    document.write("Grade : A" + "<br>")
    document.write("Remarks : Good" + "<br>")
}
else if (percentage1 < '70' && percentage1 >= '60') {
    document.write("Grade : B" + "<br>")
    document.write("Remarks : You need to improve" + "<br>")
}
else if (percentage1 < '60' && percentage1 >= '0') {
    document.write("Grade : Fail" + "<br>")
    document.write("Remarks : Sorry" + "<br>")
}