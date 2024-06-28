document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");

  setTimeout(function () {
    preloader.style.display = "none";
  }, 2000);
});



document.addEventListener("DOMContentLoaded", function () {
  var zoomContainer = document.getElementById("zoom-id");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;
    var zoomFactor = 1 - scrollPosition / 1000;

    zoomFactor = Math.max(0.8, Math.min(1, zoomFactor));

    zoomContainer.style.transform = "scale(" + zoomFactor + ")";

    if (zoomFactor < 1) {
      zoomContainer.classList.add("zoom-out");
    } else {
      zoomContainer.classList.remove("zoom-out");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var lazyBackgrounds = document.querySelectorAll('.lazy-background');

  lazyBackgrounds.forEach(function (element) {
    var imageUrl = element.getAttribute('data-bg');
    element.style.backgroundImage = 'url(' + imageUrl + ')';
  });
});

