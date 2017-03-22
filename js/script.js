var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");
var pricesTable = document.querySelector(".prices__table");
var pricesToggleFirst = document.querySelector(".prices__slider-controls-item--first");
var pricesToggleSecond = document.querySelector(".prices__slider-controls-item--second");
var pricesToggleThird = document.querySelector(".prices__slider-controls-item--third");


navMain.classList.add("main-nav--closed");
navToggle.addEventListener("click", function(event) {
  event.preventDefault();
  navMain.classList.toggle("main-nav--closed");
});

pricesToggleFirst.addEventListener("click", function(event) {
  event.preventDefault();
  if (!(pricesTable.classList.contains("prices__table--first-slide"))) {
    pricesTable.classList.remove("prices__table--second-slide", "prices__table--third-slide");
    pricesTable.classList.add("prices__table--first-slide");
    pricesToggleSecond.classList.remove("slider-controls__item--active");
    pricesToggleThird.classList.remove("slider-controls__item--active");
    pricesToggleFirst.classList.add("slider-controls__item--active");
  }
});
pricesToggleSecond.addEventListener("click", function(event) {
  event.preventDefault();
  if (!(pricesTable.classList.contains("prices__table--second-slide"))) {
    pricesTable.classList.remove("prices__table--first-slide", "prices__table--third-slide");
    pricesTable.classList.add("prices__table--second-slide");
    pricesToggleThird.classList.remove("slider-controls__item--active");
    pricesToggleFirst.classList.remove("slider-controls__item--active");
    pricesToggleSecond.classList.add("slider-controls__item--active");
  }
});
pricesToggleThird.addEventListener("click", function(event) {
  event.preventDefault();
  if (!(pricesTable.classList.contains("prices__table--third-slide"))) {
    pricesTable.classList.remove("prices__table--first-slide", "prices__table--second-slide");
    pricesTable.classList.add("prices__table--third-slide");
    pricesToggleFirst.classList.remove("slider-controls__item--active");
    pricesToggleSecond.classList.remove("slider-controls__item--active");
    pricesToggleThird.classList.add("slider-controls__item--active");
  }
});
