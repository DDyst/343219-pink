var nav = document.querySelector(".main-nav");
var toggle = nav.querySelector(".main-nav__toggle");

nav.classList.add("main-nav--closed");
toggle.addEventListener("click", function(event) {
  event.preventDefault();
  nav.classList.toggle("main-nav--closed");
});
