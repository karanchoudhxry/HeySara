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
};
function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}
