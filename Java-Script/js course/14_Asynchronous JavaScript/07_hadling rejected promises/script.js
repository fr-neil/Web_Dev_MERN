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
            <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.INR.name
            }</p>
          </div>
</article>
  `;

  countriesContainer.insertAdjacentHTML(`beforeend`, html);
  // countriesContainer.style.opacity = 1;
};

const renderError = (msg) => {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = (country) => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (Response) => Response.json() //,
      // (err) => alert(err)
    )
    // we caught the error here, with passing th second argument to the then function
    // but if the error happens somewhere else we have to catch error there too
    // so, to escape such hasle, we catch the error at he end of the function
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err} ~_~ ~_~ ~_~`);
      renderError(`Something went wrong😥😥 ${err.message}, Try again later!`);
    })
    //NOTE: we can also use .finally() to execute code after the promise is resolved or rejected
    //finally method is used to execute some code after the try and catch block
    // eg. to close the connection to the server or to free up some resources etc.
    // eg. loading spinner when something async is happening, and hide it when the action is done
    // then or finally this function works only if previous function returns a promise
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", () => {
  getCountryData(`india`);
});
