"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data) {
  const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
          </div>
</article>
  `;
  console.log(data);
  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  countriesContainer.style.opacity = 1;
};

///////

const renderError = (msg) => {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
};

///////

const getJsonData = (url, errorMsg = `something went wrong`) => {
  return fetch(url).then((Response) => {
    console.log(Response);

    if (!Response.ok) {
      throw new Error(`${errorMsg}(${Response.status})`);
    }

    return Response.json();
  });
};

/////////

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then((response) => {
      if (!response.ok)
        throw new Error(`Problem with geoCoding ${response.status}`);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.city} ${data.country}`);

      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((Response) => {
      console.log(Response);

      if (!Response.ok) {
        throw new Error(`${errorMsg}(${Response.status})`);
      }

      return Response.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err} ~_~ ~_~ ~_~`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
