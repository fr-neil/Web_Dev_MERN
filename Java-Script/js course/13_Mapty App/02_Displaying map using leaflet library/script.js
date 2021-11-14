// USING LEAFLET LIBRARY TO LOAD THE MAP
// leaflet is open source library which helps users to create mobile free maps
// we have to copy paste the above code from laeflet website to get the map

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
      // we need an empty div of id name map in html
      // L is a global variable that we can use to create a map
      const coords = [latitude, longitude];

      const map = L.map("map").setView(coords, 13); // here 13 is zoom level
      L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
    },
    function () {
      alert("Could not get your position");
    }
  );
}
