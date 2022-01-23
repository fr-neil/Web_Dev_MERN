"use strict";
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// const renderCountry = function (data) {
//   const html = `
//   <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.hin}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies.INR.name
//             }</p>
//           </div>
// </article>
//   `;

//   countriesContainer.insertAdjacentHTML(`beforeend`, html);
// };

// ///////

// const renderError = (msg) => {
//   countriesContainer.insertAdjacentText(`beforeend`, msg);
// };

// ///////

// const getJsonData = (url, errorMsg = `something went wrong`) => {
//   return fetch(url).then((Response) => {
//     // console.log(Response);

//     if (!Response.ok) {
//       throw new Error(`${errorMsg}(${Response.status})`);
//     }

//     return Response.json();
//   });
// };

// ///////

// const getCountryData = (country) => {
//   getJsonData(
//     `https://restcountries.com/v3.1/name/${country}`,
//     `Country not found`
//   )
//     .then((data) => {
//       renderCountry(data[0]);
//     })
//     .catch((err) => {
//       console.error(`${err} ~_~ ~_~ ~_~`);
//       renderError(`Something went wrong😥😥 ${err.message}, Try again later!`);
//     })

//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// ///////

// btn.addEventListener("click", () => {
//   getCountryData(`india`);
// });

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`lottery draw is happenimg`);
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(`You won the fking prize!!`);
//     } else {
//       reject(new Error(`get the f out of here!!`));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log(`wait is over`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`waited for 1 sec`);
//   });
