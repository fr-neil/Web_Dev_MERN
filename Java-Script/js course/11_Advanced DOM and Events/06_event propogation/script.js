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

const h1 = document.getElementById(`head`);
const alertH1 = function (e) {
  alert(`Great!`);
  h1.removeEventListener(`mouseenter`, alertH1);
};
h1.addEventListener(`mouseenter`, alertH1);

// capturing and bubbling phase
//when we click on the target anchor element, instead event happend on root of the document

// from there, capturing happens and travels from root to target element, and passes through every parent element
// as soon as event reaches target, the target phase begins
// events will be handeled at the target now, with event handlers

// after reaching target, event will travel all the way up to the root element, called as bubbling phase, and it passes through all of it's parent elements

// propogating ==> capturing and bubbling

// creating an random number
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// creating a random rgb color using randomInt function
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(`.nav__link`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINK`, e.target);

  // stoping event propogation
  e.stopPropagation();
});

document.querySelector(`.nav__links`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`LINKS`, e.target);
});

document.querySelector(`.nav`).addEventListener(`click`, function (e) {
  this.style.backgroundColor = randomColor();
  console.log(`nav`, e.target);
});
