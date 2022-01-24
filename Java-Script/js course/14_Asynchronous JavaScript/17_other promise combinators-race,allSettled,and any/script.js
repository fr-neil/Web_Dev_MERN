"use strict";

const getJsonData = (url, errorMsg = `something went wrong`) => {
  return fetch(url).then((Response) => {
    // console.log(Response);

    if (!Response.ok) {
      throw new Error(`${errorMsg}(${Response.status})`);
    }

    return Response.json();
  });
};

// other promise combinators

// 1> race: recieves an array of promises and eturns a promise, and this returned promise gets settled as soon as one of the input promise gets settled(value is availibele) it doesn't matter that promise got rejected or resolved
// !technically the first promise to be settled wins

(async function () {
  const res = await Promise.race([
    getJsonData(`https://restcountries.com/v3.1/name/india`),
    getJsonData(`https://restcountries.com/v3.1/name/italy`),
    getJsonData(`https://restcountries.com/v3.1/name/germany`),
  ]);
  console.log(res[0].capital);
})();

// timeout function if promise is not resolved in given time
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`timeout after ${sec} seconds`));
    }, sec);
  });
};

Promise.race([
  getJsonData(`https://restcountries.com/v3.1/name/japan`),
  timeout(35555),
])
  .then((res) => console.log(res[0]))
  .catch((err) => console.error(err));

// 2> Promise.all():- takes an array of promises as an input and returns an array of promises, but in case any prmise gets rejected, promise.all() immidiately gets short circuited and returns an error
Promise.all([
  Promise.reject(`Success`),
  Promise.reject(`Error`),
  Promise.resolve(`Conflicted`),
  Promise.resolve(`Conflicted`),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// 3> promise.allSettled:- takes an array of promises and returns an array of settled promises, no matter promises got rejected or not

Promise.allSettled([
  Promise.resolve(`Success`),
  Promise.reject(`Error`),
  Promise.resolve(`Conflicted`),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// 4:Promise.any:- returns the frst fulfilled promise, and ignores rejected promises
Promise.any([
  Promise.reject(`Success`),
  Promise.reject(`Error`),
  Promise.resolve(`Conflicted`),
  Promise.resolve(`Conflicted`),
])
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
