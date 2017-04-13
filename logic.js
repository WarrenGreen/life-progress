months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

for (var index in months) {
  var c = document.createElement("option");
  c.text = months[index];
  var x = document.getElementById("month").options.add(c);
}

for (i = 1; i <= 31; i++) {
  var c = document.createElement("option");
  c.text = i;
  var x = document.getElementById("day").options.add(c);
}

for (i = 2017; i >= 1930; i--) {
  var c = document.createElement("option");
  c.text = i;
  var x = document.getElementById("year").options.add(c);
}

document.getElementById("year").options.selectedIndex = 24
document.getElementById("month").options.selectedIndex = 4
document.getElementById("day").options.selectedIndex = 18

$("select").change(function() {
  changeEvent();
});

$(document).ready(function() {
  changeEvent();
});


function changeEvent() {
  updatePercent(document.getElementById("day").options.selectedIndex + 1,
    document.getElementById("month").options.selectedIndex + 1,
    2017 - document.getElementById("year").options.selectedIndex)
}

function updatePercent(birthDay, birthMonth, birthYear) {
  var birth = new Date(birthYear, birthMonth, birthDay);
  var now = new Date();
  var death = new Date(birthYear+77, 11, 00);
  var start = birth.getTime();
  var current = now.getTime() - start;
  var end = death.getTime() - start;
  var percent = (100 * current / end).toFixed(2);
  document.getElementById("percent").innerHTML = percent;
  document.getElementById("bar").value=percent
}
