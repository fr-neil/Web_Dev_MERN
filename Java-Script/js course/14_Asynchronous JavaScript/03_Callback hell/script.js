"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderCountry = function (data) {
  const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.INR.name
            }</p>
          </div>
</article>
  `;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  //old school ajax call
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // //get neighbour country
    // const [neighbours] = data.borders;

    // if (!neighbours) return;

    // const request2 = new XMLHttpRequest();
    // request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbours}`);
    // request2.send();

    // request2.addEventListener("load", function () {
    //   const data2 = JSON.parse(this.responseText);
    //   console.log(data2);
    //   renderCountry(data2);
    // });
  });
};

getCountryData("india");
