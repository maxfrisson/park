window.addEventListener("scroll", function () {
  var header = this.document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

function toggle() {
  var menu = document.getElementById("menu");
  var toggle = document.getElementById("toggle");

  menu.classList.toggle("active");
  toggle.classList.toggle("active");
}

var mainSlider = new Swiper(".main__slider", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  grabCursor: true,
  effect: "fade",
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});

var testimonialsSlider = new Swiper(".main__testimonials", {
  direction: "horizontal",
  loop: true,
  speed: 1000,
  grabCursor: true,
  effect: "slide",
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
});

var texts = document.getElementsByClassName("swiper-slide-subtext");
var text = [...texts];
var word = text.map((element) => element.getElementsByTagName("span"));

var i = 0;

function rotator() {
  word[0][i].style.display = "none";
  word[1][i].style.display = "none";
  word[2][i].style.display = "none";
  word[3][i].style.display = "none";
  word[4][i].style.display = "none";
  i = (i + 1) % word[0].length;
  word[0][i].style.display = "initial";
  word[1][i].style.display = "initial";
  word[2][i].style.display = "initial";
  word[3][i].style.display = "initial";
  word[4][i].style.display = "initial";
}
setInterval(rotator, 1000);
