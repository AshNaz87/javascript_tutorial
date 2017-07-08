"use strict";

alert("I'm JavaScript!");

let name = "John";
let admin = name;

alert(admin);

let userPlanetName = "Earth";
let currentUserName = "Ashraf";

alert(`My name is ${name}`);

alert(typeof 0);


let userAnswer = prompt("What's the official name of JavaScript?");

if (userAnswer == "ECMAScript") {
  alert("Right!");
} else {
  alert("You don't know? \"ECMAScript!\"");
}


let number = prompt("Please enter a number");

if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}


let login = prompt("Who's there?", "");

if (login == "Admin") {

  let password = prompt("What is the password?", "");

  if (password == "The Master") {
  alert("Welcome!");
  } else if (password == null || password == "") {
  alert("Cancelled");
  } else {
  alert("Wrong password");
  }

} else if (login == null || login == "") {
  alert("Cancelled");
} else {
  alert("I don't know you");
}


result = (a + b < 4) ? 'Below' : 'Over';

let message = (login == "Employee") ? "Hello" :
  (login == "Director") ? "Greetings" :
  (login == "") ? "No login" :
  "";

let age = prompt("What is your age?");

if (age >= 14 && age <= 90) {
  alert(`${age}`);
}

for (let i = 2; i < 11; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}


for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;

while (i < 3) {
  alert(i);
  i++;
}


let guess = prompt("Pick a number greater than 100");

function ageInDays(day, month, year) {
  var birthday = new Date(year, month - 1, day);
  return Math.round((Date.now() - birthday) / 86400000);
}

"use strict";  // Do not remove this line.

function splitTheBill(group) {
  var sum = 0;

  Object.keys(group).forEach(function (person) {
    sum += group[person];
  });

  Object.keys(group).forEach(function (person) {
    group[person] -= (sum / Object.keys(group).length);
  });
  return group;
}


module.exports = splitTheBill;  // Do not remove. We need this for the spec to know about your method.










