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
const h1 = document.querySelector(`h1`);

// going downwards: child
// here we're specifically selecting child elements of h1
// if there are more highlight classes in html, they won't get selected!!
console.log(h1.querySelectorAll(`.highlight`));
console.log(h1.childNodes); // comments, text and everything
console.log(h1.children); // gives actually useful elements // direct children

h1.firstElementChild.style.color = `rgb(100, 31, 210)`; // only the first child element gets affected!!
h1.lastElementChild.style.color = `rgba(100, 31, 210, 0.4)`; // only the last child element gets affected!!

//going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest(`.header`).style.background = `yellow`; // most useful
// closest gives the direct parent element

//going sideways: siblings
// we can only access direct siblings, only the previous and nest ones
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// to get all siblings we can use a trick, go to the parent element and list all children elements of it!!
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = `scale(1.5)`;
});
