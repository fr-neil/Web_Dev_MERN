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

whereAmI();

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJsonData(
    //   `https://restcountries.com/v3.1/name/${c1}`
    // );
    // const [data2] = await getJsonData(
    //   `https://restcountries.com/v3.1/name/${c2}`
    // );
    // const [data3] = await getJsonData(
    //   `https://restcountries.com/v3.1/name/${c3}`
    // );

    const data = await Promise.all([
      getJsonData(`https://restcountries.com/v3.1/name/${c1}`),
      getJsonData(`https://restcountries.com/v3.1/name/${c2}`),
      getJsonData(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (err) {
    console.error(err);
  }
};
get3Countries(`india`, `germany`, `japan`);
