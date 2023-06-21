window.addEventListener("scroll", fade);

function fade() {
  var objs = document.querySelectorAll(".fade");

  for (i = 0; i < objs.length; i++) {
    var height = window.innerHeight;
    var top = objs[i].getBoundingClientRect().top;
    var pos = 100;

    if (top < height - pos) {
      objs[i].classList.add("active");
    } else {
      objs[i].classList.remove("active");
    }
  }
}
