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

// !!!recreating this part of code below using async await
// createImg(`./img/Francis Danby - The Deluge, Tate Britain.jpeg`)
//   .then((img) => {
//     currentImg = img;
//     console.log(`img 1 is loaded`);
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
//     console.log(`ing 2 is loaded`);
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = `none`;
//   })
//   .catch((err) => console.error(err));

//PART 1:- Recreacting coding challenge 2 using async await
const loadNPause = async function () {
  try {
    // load img 1
    let img = await createImg(
      `./img/Francis Danby - The Deluge, Tate Britain.jpeg`
    );
    console.log(`img 1 is loaded`);
    await wait(2);
    img.style.display = `none`;

    // load img 2
    img = await createImg(
      `./img/Frank Cadogan Cowper - Lucretia Borgia Reigns in the Vatican in the Absence of Pope Alexander VI, Tate Britain.jpeg`
    );
    console.log(`img 2 is loaded`);
    await wait(2);
    img.style.display = `none`;
  } catch (err) {
    console.error(err);
  }
};
loadNPause();

//PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImg(img));
    console.log(imgs);

    const imgEl = await Promise.all(imgs);
    console.log(imgEl);

    imgEl.forEach((img) => img.classList.add(`parallel`));
  } catch (err) {
    console.error(err);
  }
};
loadAll([
  `./img/Francis Danby - The Deluge, Tate Britain.jpeg`,
  `./img/Frank Cadogan Cowper - Lucretia Borgia Reigns in the Vatican in the Absence of Pope Alexander VI, Tate Britain.jpeg`,
  `./img/70.jpg`,
]);
