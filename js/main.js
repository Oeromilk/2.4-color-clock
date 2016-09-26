(function () {
  "use strict";

  var hours = document.getElementById('hours');
  var minutes = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var bar = document.getElementById('inner-bar');
  var time = document.getElementById('elapsed-time');
  var body = document.getElementById('body');

  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentSeconds = currentDate.getSeconds();

  var isHovering = false;

  var currentRed = ('0' + currentHours.toString(16)).slice(-2);
  var currentGreen = ('0' + currentMinutes.toString(16)).slice(-2);
  var currentBlue = ('0' + currentSeconds.toString(16)).slice(-2);
  var colorCode = '#' + currentRed + currentGreen + currentBlue;

  function displayTime (){
    var currentDate = new Date();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();
    var minutePercentage = ((currentSeconds / 59) * 100);
    bar.style.width = minutePercentage + "%";

    if(isHovering === false){
      hours.textContent = ('0' + currentHours).slice(-2);
      minutes.textContent = ('0' + currentMinutes).slice(-2);
      seconds.textContent = ('0' + currentSeconds).slice(-2);
    } else {
      hours.textContent = ('0' + currentHours.toString(16)).slice(-2);
      minutes.textContent = ('0' + currentMinutes.toString(16)).slice(-2);
      seconds.textContent = ('0' + currentSeconds.toString(16)).slice(-2);
    }

    body.style.backgroundColor = colorCode;

  }

  displayTime();
  window.setInterval(displayTime, 100);

  time.addEventListener('mouseover', mouseOverHandler);

  function mouseOverHandler(){
    isHovering = true;
  }



  time.addEventListener('mouseout', mouseOffHandler);

  function mouseOffHandler(){
    isHovering = false;
  }

}())
