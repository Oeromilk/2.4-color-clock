(function () {
  "use strict";

  var hours = document.getElementById('hours');
  var mintues = document.getElementById('minutes');
  var seconds = document.getElementById('seconds');
  var bar = document.getElementById('inner-bar');
  var hover = document.getElementById('elapsed-time');
  //var body = document.getElementById('body');
  var currentDate = new Date();
  var currentHours = currentDate.getHours();
  var currentMinutes = currentDate.getMinutes();
  var currentSeconds = currentDate.getSeconds();
  var backGroundColor =  ["FF0000", "FF6400", "FFF700", "68FF00", "00FFE0", "0055FF"];


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

    //console.log(minutePercentage);
  }

  window.setInterval(displayTime, 1000);
  setInterval(change, 1000);

  var i = 0;
  function change() {
    var doc = document.getElementById("body");
    var color = ["black", "blue", "brown", "green"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  console.log(change);

  hover.addEventListener("mouseover", function(event) {
    event.target.style.color = "orange";
  } );

}())
