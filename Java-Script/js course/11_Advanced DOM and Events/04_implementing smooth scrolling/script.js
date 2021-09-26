"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

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

// 1 ==> Styles
// to get all styles appliad to an element we use
// console.log(getComputedStyle(message));
// it listes all styles to applied to an element

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 18 + "px";

// working with costom js properties
// root element is equivalent to document element in js

// here, document is itself root element, and with setProperty we can change default value of our costom property to all instances
document.documentElement.style.setProperty("--color-primary", "orange");

// 2 ==> Attributes
// src, alt, class, id, href, and so on are all the attributes of an element
// with js we can change this attributes

const logo = document.querySelector(`.nav__logo`);

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// changing value
logo.alt = "Beautiful minimalist logo";

// Classes ==>
logo.classList.add();
logo.classList.remove();
logo.classList.toggle();
logo.classList.contains();
