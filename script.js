var minSpan = document.getElementById('min');
var hrSpan = document.getElementById('hr');
var secSpan = document.getElementById('sec');
var dateDiv = document.getElementById('date');
var ampmSpan = document.getElementById('ampm');

function format(val) {
  return val < 10 ? '0' + val : val;
}

function updateClock() {
  var now = new Date();

  var minutes = now.getMinutes();
  var hours = now.getHours();
  var seconds = now.getSeconds();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;

  hrSpan.innerText = format(hours);
  minSpan.innerText = format(minutes);
  secSpan.innerText = format(seconds);
  ampmSpan.innerText = ampm;

  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  var day = dayNames[now.getDay()];
  var date = now.getDate();
  var month = monthNames[now.getMonth()];
  var year = now.getFullYear();

  dateDiv.innerText = `${day}, ${date} ${month} ${year}`;
}

setInterval(updateClock, 1000);
updateClock();
