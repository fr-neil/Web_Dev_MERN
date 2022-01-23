// `use strict`;
// const imgContainer = document.querySelector(`.images`);

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const createImg = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement(`img`);
//     img.src = imagePath;

//     img.addEventListener(`load`, function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener(`load`, function () {
//       reject(new Error(`Image not found`));
//     });
//   });
// };

// createImg(`./img/Francis Danby - The Deluge, Tate Britain.jpeg`)
//   .then((img) => {
//     currentImg = img;
//     console.log(`img is loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//     return createImg(
//       `./img/Frank Cadogan Cowper - Lucretia Borgia Reigns in the Vatican in the Absence of Pope Alexander VI, Tate Britain.jpeg`
//     );
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log(`img 2 is loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//   })
//   .catch((err) => console.error(err));

`use strict`;

const imgContainer = document.querySelector(`.images`);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImg = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement(`img`);
    img.src = imgPath;

    img.addEventListener(`load`, function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener(`load`, function () {
      reject(new Error(`Image not found`));
    });
  });
};

let currentImg;

createImg(`./img/Francis Danby - The Deluge, Tate Britain.jpeg`)
  .then((img) => {
    currentImg = img;
    console.log(`img 1 is loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
    return createImg(
      `./img/Frank Cadogan Cowper - Lucretia Borgia Reigns in the Vatican in the Absence of Pope Alexander VI, Tate Britain.jpeg`
    );
  })
  .then((img) => {
    currentImg = img;
    console.log(`ing 2 is loaded`);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
  })
  .catch((err) => console.error(err));
