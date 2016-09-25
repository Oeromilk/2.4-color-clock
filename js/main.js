(function () {
  "use strict";

  var hours = document.getElementById('hours');
  var mintues = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var bar = document.getElementById('inner-bar');
  var time = document.getElementById('elapsed-time');
  var body = document.getElementById('body');
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentSeconds = currentDate.getSeconds();
  var hexStr = "#" + currentHours + currentMinutes + currentSeconds;

  function displayTime (){
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();
    var minutePercentage = ((currentSeconds / 59) * 100);
    bar.style.width = minutePercentage + "%";
    hours.textContent = ("00" + currentHours).slice(-2);
    minutes.textContent = ("00" + currentMinutes).slice(-2);
    seconds.textContent = ("00" + currentSeconds).slice(-2);
    body.style.backgroundColor = hexStr;
  }

  displayTime();
  window.setInterval(displayTime, 1000);

}())
