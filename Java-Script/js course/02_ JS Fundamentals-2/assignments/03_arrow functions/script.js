
// `use strict`;
// const country1 = `india `;
// const populationOfWorld2 = 7900;

// const percentageOfWorld2 = function(population){
//     const populationPercentage2 = (population / populationOfWorld2) * 100;
//     console.log(`${country1} has ${population} million people, so it's about ${populationPercentage2.toFixed(2)}% of the worlds population`);
// }
// console.log(percentageOfWorld2(42))



//another way

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
//     }
//     const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100;
//     };
//     const percPortugal1 = percentageOfWorld1(10);
//     const percChina1 = percentageOfWorld1(1441);
//     const percUSA1 = percentageOfWorld1(332);
//     console.log(percPortugal1, percChina1, percUSA1);

`use strict`;
const country = `India`;
const populationOfWorld = 7900;

const percentageOfWorld = population =>{
    const populationPercentage = (population / populationOfWorld) * 100;
    console.log(`${country} has ${population} million population, so it's about ${populationPercentage.toFixed(2)}% of world's population`);
}
console.log(percentageOfWorld(1035))