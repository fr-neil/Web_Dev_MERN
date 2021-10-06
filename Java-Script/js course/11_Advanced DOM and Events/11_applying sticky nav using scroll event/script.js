"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(`.btn--scroll-to`);
const section1 = document.querySelector(`#section--1`);

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

const header = document.querySelector(`.header`);
const allSections = document.querySelectorAll(`.section`);
document.getElementById(`section--1`);
const buttons = document.getElementsByTagName(`button`);
const message = document.createElement(`div`);
message.classList.add(`cookie-message`);

message.innerHTML = `We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>`;
5;

header.prepend(message);
document
  .querySelector(`.btn--close--cookie`)
  .addEventListener(`click`, function () {
    message.remove();
  });
message.style.backgroundColor = "#37383d";

btnScrollTo.addEventListener(`click`, function () {
  section1.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  e.preventDefault();
  // matching startergy
  if (e.target.classList.contains(`nav__link`)) {
    const id = e.target.getAttribute(`href`);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

const tabs = document.querySelectorAll(`.operations__tab`);
const tabsContainer = document.querySelector(`.operations__tab-container`);
const tabsContent = document.querySelectorAll(`.operations__content`);

tabsContainer.addEventListener(`click`, function (e) {
  const clicked = e.target.closest(`.operations__tab`);

  if (!clicked) return;

  //removing active classes
  tabs.forEach((t) => t.classList.remove(`operations__tab--active`));
  tabsContent.forEach((t) => t.classList.remove(`operations__content--active`));

  //active tab
  clicked.classList.add(`operations__tab--active`);

  //active content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

//menu fade animations
const nav = document.querySelector(`.nav`);
const handleover = function (e) {
  if (e.target.classList.contains(`nav__link`)) {
    const link = e.target;
    const siblings = link.closest(`.nav`).querySelectorAll(`.nav__link`);
    const logo = link.closest(`.nav`).querySelector(`img`);

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
// passing "argument" into handler
nav.addEventListener(`mouseover`, handleover.bind(0.5));
nav.addEventListener(`mouseout`, handleover.bind(1));

//applying sticky navigation
// using scroll event, availible on window
const initCoords = section1.getBoundingClientRect();
window.addEventListener(`scroll`, function () {
  if (window.scrollY > initCoords.top) nav.classList.add(`sticky`);
  else nav.classList.remove(`sticky`);
});
