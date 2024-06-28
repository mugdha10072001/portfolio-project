document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");

  setTimeout(function () {
    preloader.style.display = "none";
  }, 2000);
});


function startTimer(duration) {
  var timer = duration, hours, minutes, seconds;
  var interval = setInterval(function () {
    hours = parseInt(timer / 3600, 20);
    minutes = parseInt((timer % 3600) / 60, 10);
    seconds = parseInt(timer % 60, 10);

    document.getElementById("days").textContent = Math.floor(hours / 24);
    document.getElementById("hours").textContent = hours % 24;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (--timer < 0) {
      clearInterval(interval);
      localStorage.removeItem("timerValue");
      timer = duration;
    }
    localStorage.setItem("timerValue", timer);
  }, 1000);
}

var storedTimerValue = localStorage.getItem("timerValue");
if (storedTimerValue !== null) {
  startTimer(parseInt(storedTimerValue));
} else {
  // Start the timer with a duration of 30 days (30 days * 24 hours * 60 minutes * 60 seconds)
  startTimer(30 * 24 * 60 * 60);
}