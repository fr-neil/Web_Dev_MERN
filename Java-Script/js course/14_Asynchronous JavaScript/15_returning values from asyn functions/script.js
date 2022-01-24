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
};

///////

const renderError = (msg) => {
  countriesContainer.insertAdjacentText(`beforeend`, msg);
};

const getJsonData = (url, errorMsg = `something went wrong`) => {
  return fetch(url).then((Response) => {
    console.log(Response);

    if (!Response.ok) {
      throw new Error(`${errorMsg}(${Response.status})`);
    }

    return Response.json();
  });
};

///////

const getCountryData = (country) => {
  getJsonData(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country not found`
  )
    .then((data) => {
      renderCountry(data[0]);
    })
    .catch((err) => {
      console.error(`${err} ~_~ ~_~ ~_~`);
      renderError(`Something went wrong😥😥 ${err.message}, Try again later!`);
    })

    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

///////

btn.addEventListener("click", () => {
  getCountryData(`india`);
});

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();

    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse groCoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    if (!resGeo.ok) throw new Error(`problem getting location data`);

    return `you are in ${dataGeo.city}`;

    //country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error(`problem getting country`);

    const data = await res.json();
    renderCountry(data[0]);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

console.log(`1: i will get location`);
// const city = whereAmI();
// console.log(city);
// console.log(`3: finished getting location`);

// whereAmI()
//   .then((city) => console.log(city))
//   .catch((err) => console.log(err))
//   .finally(() => console.log(`3: finished getting location`));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2 ${err}`);
  }
  console.log(`3: finished getting location`);
})();
