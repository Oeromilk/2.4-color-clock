(function () {
  "use strict";

  var hours = document.getElementById('hours');
  var mintues = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var bar = document.getElementById('inner-bar');
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentSeconds = currentDate.getSeconds();

  function displayTime (){
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();
    var minutePercentage = ((currentSeconds / 59) * 100);
    bar.style.width = minutePercentage + "%";
    hours.textContent = (0 + currentHours);
    minutes.textContent = (0 + currentMinutes);
    seconds.textContent = (0 + currentSeconds);
    console.log(minutePercentage);
  }


  /*((v2 / v1) * 100).toFixed(2);*/

  window.setInterval(displayTime, 1000);



}())
