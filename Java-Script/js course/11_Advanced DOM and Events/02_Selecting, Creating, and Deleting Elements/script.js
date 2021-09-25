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

/// 1==> selecting elements
// selecting all elements with documentElement()
console.log(document.documentElement);
console.log(document.body);
console.log(document.head);
// with documentElement property we can select all html elements of the page
// eg. we can style whole body by using documentElement to select entire webpage
// but, documentElement returns node list
// html collection doesn't updates automatically
// eg. if we delete an element from html, html collection won't updates

// on the other hand queryselector only selects first element matches with input!!!
const header = document.querySelector(`.header`);

// that is why, we usually use querySelectorAll
const allSections = document.querySelectorAll(`.section`);

// as well as, we can use getElementById to select an id from html
document.getElementById(`section--1`);

// and, getelementsByTagName to select all instances of same id name

const buttons = document.getElementsByTagName(`button`);
// but, getElementsByTagName returns live html collection
// html collection updates automatically
// eg. if we delete an element from html, html collection updates automatically

// and getElementsByClassName is similar to getElementByTagName, but it selects all instance of given classes
// it also returns live htmk collection
console.log(document.getElementsByClassName(`btn`));

// 2 ==> creating and inserting elements
const message = document.createElement(`div`); // creating an div element
message.classList.add(`cookie-message`); // adding an already created css class to newly created element
message.innerHTML = `We use cookies for improved functionality and analytics. <button class = "btn btn--close--cookie">Got it!</button>`;

// creating textcontent for newly created element
header.prepend(message); // prepend adds html as the first child of selected html element, here we're adding our msg in header element
// to add element as the last child of selected html element, we use append method
// eg. header.append(message)
// but when we try to write both methods, prepend and append, our element moves with second method
// if we want to insert element at multiple places,we've to copy element first, to copy element-
// we use cloneNode(Boolean) eg.
header.append(message.cloneNode(/*true*/)); // here true means, copy all child elements of this element

// there are two more methods to insert an element
// before and after, as the name suggests
// before adds element before the selected element and vice versa
// eg. header.before(message)

// 3 ==> delete elements
// let's delete cookie msg by clicking the button
document
  .querySelector(`.btn--close--cookie`)
  .addEventListener(`click`, function () {
    message.remove(); // here we've to call remove method by parenthesis
  });
