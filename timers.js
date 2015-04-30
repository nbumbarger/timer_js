function advanceTime() {
   interval = setInterval(updateTimeDisplay, 1000);
}

function updateTimeDisplay(clear) {
   this.clear = clear || false;
   if(this.clear === false) {
      timer.innerHTML = "elapsed: " + seconds;
      seconds++;}
   else {
      timer.innerHTML = "Stop Watch";
      seconds = 0;}
}

var timer = document.getElementById('timer');
var seconds = 0;
var interval;
document.getElementById('start').addEventListener('click',
   function() { advanceTime(); });
document.getElementById('pause').addEventListener('click',
   function() { clearInterval(interval); });
document.getElementById('reset').addEventListener('click',
   function() { clearInterval(interval); updateTimeDisplay(true); });
