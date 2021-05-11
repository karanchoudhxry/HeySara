function greetings() {
  if (h < 12) {
    responsiveVoice.speak("Good Morning User!");
  } else if (h >= 12 && h < 16) {
    responsiveVoice.speak("Good Afternoon User!");
  } else if (h >= 16) {
    responsiveVoice.speak("Good evening User!");
  }
}

const body = document.body;
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
body.onload = () => {
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 1000);
  greetings();
};
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
