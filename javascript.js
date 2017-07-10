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

function runChallenges() {

  // Ex 1. Read the content of the email input
  var email = $('#email').val();  // TODO: replace null, keep the email variable.

  // Ex 2. Fill the content of the email input with your email
  $('#email').val('ashraf.caspian@gmail.com');

  // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
  //       The text should be emphasized using a <strong> tag
  var emailHint = $('#email-hint');
  var text = $('<strong>').text("This is my email now");
    emailHint.html(text);


  // Ex 4. Add the .blue CSS class to the table header cells (th elements)
  var blue = $('th').addClass('blue');


  // Ex 5. Count the number of table body rows there are (team count!)
  // TODO: replace 0, keep the team_count variable.
  var teamCount = $('tbody tr').length;

  // Ex 6. Say there is a 15th team added to the table.
  //       Add a row at the bottom, this new team should have zero points.
  var row = $('<tr>').html('<td>' + (teamCount + 1) + '</td><td>New Team</td><td>0</td></tr>');
  $('tbody').append(row);


  // Ex 7. Write some code to sum all points given to all teams
  // TODO: replace 0 with your sum result, keep the sum variable.
  var sum = 0;
  var scores = $('tbody tr td:last-child');
  scores.each(function(i, item) {
    sum += parseInt($(item).text())
  });


  // Ex 8. Change the background color of all table header cells to #DDF4FF
  $('th').css({'background-color': '#DDF4FF'});


  // Ex 9. Translate the #results list 20px downward (animation would be great ^_^)
  $('#results').css({'transform': 'translateY(20px)'});

  // Ex 10. Remove the "Email:" label from the DOM
  $('label').remove();


function hasNewMessage() {
  // TODO: return true with a probability of 20%.
  var probability = Math.random();
  if (probability <= 0.2) {
    return true;
  } else {
    return false;
  }
}

function randomSample(array) {
  return array[Math.round(Math.random() * array.length)];
}

function newMessage() {
  var senders = [ 'GitHub', 'YouTube', 'Google', 'Instagram' ];
  var subjects = [ 'You Got Mail!', 'Check it out!', 'You won\'t believe it...', 'Look at these pics!' ];

  return {
    sender: randomSample(senders),
    subject: randomSample(subjects)
  };
}

function appendMessageToDom(message) {
  // TODO: append the given message to the DOM (as a new row of `#inbox`)
   var line = '<div class="row message unread"><div class="col-xs-3">'
   + message['senders']
   + '</div><div class="col-xs-9>'
   + message['subjects']
   + '</div>';
   $('#inbox').prepend(line);
}

function updateUnreadCount() {
  var unreadCount = $('.message.unread').length;
  $('#count').text('(' + unreadCount + ')');
  document.title = '(' + unreadCount + ') Fake Inbox';
}

function refresh() {
  // TODO: Implement the global refresh logic. If there is a new message,
  //       append it to the DOM. Update the unread counter in title as well.
  if (hasNewMessage()) {
    appendMessageToDom(newMessage());
    updateUnreadCount();
  }
}


$(document).ready(function () {
  setInterval(refresh, 1000); // Every 1 second, the `refresh` function is called.
});



$(function(){

  $(".tab").on("click", function(e){
    // Change active tab
    $(".tab").removeClass('active');
    $(this).addClass('active');
    // Hide all tab-content (use class="hidden")
    $(".tab-content").addClass('hidden');
    // Show target tab-content (use class="hidden")
    $($(this).data('target')).removeClass('hidden');
  });

});













