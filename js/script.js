var navMain = document.querySelector(".main-nav");
var navToggle = navMain.querySelector(".main-nav__toggle");
var pricesTable = document.querySelector(".prices__table");
var pricesToggleFirst = document.querySelector(".prices__slider-controls-item:first-child");
var pricesToggleSecond = document.querySelector(".prices__slider-controls-item:nth-child(2)");
var pricesToggleThird = document.querySelector(".prices__slider-controls-item:nth-child(3)");
var reviewsSlideFirst = document.querySelector(".reviews__slide:first-child");
var reviewsSlideSecond = document.querySelector(".reviews__slide:nth-child(2)");
var reviewsSlideThird = document.querySelector(".reviews__slide:nth-child(3)");
var reviewsToggleFirst = document.querySelector(".reviews__slider-controls-item:first-child");
var reviewsToggleSecond = document.querySelector(".reviews__slider-controls-item:nth-child(2)");
var reviewsToggleThird = document.querySelector(".reviews__slider-controls-item:nth-child(3)");
var reviewsArrowRight = document.querySelector(".reviews__slider-arrow--right");
var reviewsArrowLeft = document.querySelector(".reviews__slider-arrow--left");

// Открытие/закрытие мобильного меню
navMain.classList.add("main-nav--closed");
navToggle.addEventListener("click", function(event) {
  event.preventDefault();
  navMain.classList.toggle("main-nav--closed");
});

// Переключение вида таблицы с ценами в мобильной версии
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

// Переключение слайдов с отзывами в мобильной и планшетной версиях
reviewsToggleFirst.addEventListener("click", function(event) {
  event.preventDefault();
  if (reviewsSlideFirst.classList.contains("reviews__slide--hidden")) {
    reviewsSlideFirst.classList.remove("reviews__slide--hidden");
    if (!(reviewsSlideSecond.classList.contains("reviews__slide--hidden"))) {
      reviewsSlideSecond.classList.add("reviews__slide--hidden");
    }
    if (!(reviewsSlideThird.classList.contains("reviews__slide--hidden"))) {
      reviewsSlideThird.classList.add("reviews__slide--hidden");
    }
    reviewsToggleSecond.classList.remove("slider-controls__item--active");
    reviewsToggleThird.classList.remove("slider-controls__item--active");
    reviewsToggleFirst.classList.add("slider-controls__item--active");
  }
});
reviewsToggleSecond.addEventListener("click", function(event) {
  event.preventDefault();
  if (reviewsSlideSecond.classList.contains("reviews__slide--hidden")) {
    reviewsSlideSecond.classList.remove("reviews__slide--hidden");
    if (!(reviewsSlideFirst.classList.contains("reviews__slide--hidden"))) {
      reviewsSlideFirst.classList.add("reviews__slide--hidden");
    }
    if (!(reviewsSlideThird.classList.contains("reviews__slide--hidden"))) {
      reviewsSlideThird.classList.add("reviews__slide--hidden");
    }
    reviewsToggleFirst.classList.remove("slider-controls__item--active");
    reviewsToggleThird.classList.remove("slider-controls__item--active");
    reviewsToggleSecond.classList.add("slider-controls__item--active");
  }
});
reviewsToggleThird.addEventListener("click", function(event) {
  event.preventDefault();
  if (reviewsSlideThird.classList.contains("reviews__slide--hidden")) {
    reviewsSlideThird.classList.remove("reviews__slide--hidden");
    if (!(reviewsSlideFirst.classList.contains("reviews__slide--hidden"))) {
      reviewsSlideFirst.classList.add("reviews__slide--hidden");
    }
    if (!(reviewsSlideSecond.classList.contains("reviews__slide--hidden"))) {
      reviewsSlideSecond.classList.add("reviews__slide--hidden");
    }
    reviewsToggleFirst.classList.remove("slider-controls__item--active");
    reviewsToggleSecond.classList.remove("slider-controls__item--active");
    reviewsToggleThird.classList.add("slider-controls__item--active");
  }
});

// Переключение слайдов с отзывами в десктопной версии
reviewsArrowRight.addEventListener("click", function(event) {
  event.preventDefault();
  if (!(reviewsSlideFirst.classList.contains("reviews__slide--hidden"))) {
    reviewsSlideSecond.classList.remove("reviews__slide--hidden");
    reviewsSlideFirst.classList.add("reviews__slide--hidden");
  } else if (!(reviewsSlideSecond.classList.contains("reviews__slide--hidden"))) {
    reviewsSlideThird.classList.remove("reviews__slide--hidden");
    reviewsSlideSecond.classList.add("reviews__slide--hidden");
  } else {
    reviewsSlideFirst.classList.remove("reviews__slide--hidden");
    reviewsSlideThird.classList.add("reviews__slide--hidden");
  }
});
reviewsArrowLeft.addEventListener("click", function(event) {
  event.preventDefault();
  if (!(reviewsSlideFirst.classList.contains("reviews__slide--hidden"))) {
    reviewsSlideFirst.classList.add("reviews__slide--hidden");
    reviewsSlideThird.classList.remove("reviews__slide--hidden");
  } else if (!(reviewsSlideSecond.classList.contains("reviews__slide--hidden"))) {
    reviewsSlideSecond.classList.add("reviews__slide--hidden");
    reviewsSlideFirst.classList.remove("reviews__slide--hidden");
  } else {
    reviewsSlideThird.classList.add("reviews__slide--hidden");
    reviewsSlideSecond.classList.remove("reviews__slide--hidden");
  }
});
