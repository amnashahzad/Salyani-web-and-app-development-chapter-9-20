var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}


if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

var names = ["Michael", "John", "Tony"]
var obtainedscores = [320, 230, 480]
var totalmarks1 = 500
var percentagearray
for (i = 0; i < 3; i++) {
    document.write("Score of " + names[i] + " is " + obtainedscores[i] + ". Percentage: " + (obtainedscores[i] / totalmarks1 * 100) + "%" + "<br>")
}

var color = ['Red', 'Green', 'Blue']
document.write(color + '<br>')
var a = prompt('What color do you want to add to the beginning?')
color.unshift(a);
document.write(color + '<br>')
var b = prompt('What color do you want to add to the end?')
color.push(b)
document.write(color + '<br>')
color.unshift('Pink', 'Orange');
document.write(color + '<br>')
color.shift(0);
document.write(color + '<br>')
color.pop()
document.write(color + '<br>')
var d = prompt('What color do you want to add?')
var e = prompt('Give the position of color: ')
var f = parseInt(e)
color.splice(f, 0, d)
document.write(color + '<br>')
var g = prompt('What color do you want to delete?')
var h = prompt('Give the position of color: ')
var i = parseInt(e)
color.slice(i, 0, g)
document.write(color + '<br>')

var std_score = [320, 230, 480, 120]
document.write('Scores of Students: ' + std_score + '<br>')
var sort_score = std_score.sort()
document.write('Ordered Scores of Students: ' + sort_score)