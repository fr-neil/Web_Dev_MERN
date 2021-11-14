"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

// Check if browser supports geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    // getgeolocation takes two parameters, one when the position is found and one when it fails
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert("Could not get your position");
    }
  );
}
