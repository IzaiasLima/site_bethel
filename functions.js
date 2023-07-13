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

const startClock = function () {
  return setInterval(() => {
    d = new Date(); 
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2;
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;

    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
  }, 1000);
};
