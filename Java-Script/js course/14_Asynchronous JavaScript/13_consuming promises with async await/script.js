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

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geoCoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       console.log(res);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0]))
//     .catch((err) => console.error(`${err.message} lol`));
// };

// btn.addEventListener(`click`, whereAmI);

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //Geolocation
  const pos = await getPosition();

  const { latitude: lat, longitude: lng } = pos.coords;

  //reverse groCoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  //country data
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  const data = await res.json();
  renderCountry(data[0]);
  console.log(data);
};
whereAmI();
console.log(`yo bro!`);
