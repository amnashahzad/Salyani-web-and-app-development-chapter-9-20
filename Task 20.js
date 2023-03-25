var cities = ['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']
console.log('Cities List: ' + '<br>' + cities + '<br>')
var sel_cities = cities.slice(1, 4)
console.log('Selected Cities: ' + '<br>' + sel_cities + '<br>')

var arr = ['This ', ' is ', ' my ', 'cat'];
console.log('Array: ' + '<br>' + arr + '<br>');
var join = arr.join(' ');
console.log('String: ' + '<br>' + join + '<br>');

var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = 0; i < 4; i++) {
    console.log('Out: ' + '<br>' + a[i] + '<br>');
}

var a = [];
var i;
for (i = 0; i < 4; i++) {
    a.push(prompt("Enter Devices:"));
}
for (i = a.length - 1; i >= 0; i--) {
    console.log('Out: ' + '<br>' + a[i] + '<br>');
}

var temp = [];

var temp = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];
var i;
var j;
for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
        console.log(temp[i][j]);
    }
    console.log('<br');
}

var i;
for (i = 1; i <= 10; i++) {
    console.log(i + '<br>')
}

var num = prompt('Enter a number to show its multiplication table: ');
var len = prompt('Enter length of multiplication table: ');
console.log('Multiplication table of ' + num + '<br>');
console.log('Lenth ' + len + '<br>' + '<br>');
var i;
for (i = 1; i <= len; i++) {
    console.log(num + 'X' + i + '=' + num * i + '<br>');
}