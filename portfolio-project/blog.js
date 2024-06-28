document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById("preloader");

  setTimeout(function () {
    preloader.style.display = "none";
  }, 2000);
});

filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");

  if (c == "all") {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  } else {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    var filteredElements = document.getElementsByClassName(c);
    for (i = 0; i < filteredElements.length; i++) {
      filteredElements[i].style.display = "block";
    }
  }
}
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active");
  });
}
