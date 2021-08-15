// 1. The world population is 7900 million people. Create a function declaration
// called 'percentageOfWorld1' which receives a 'population' value, and
// returns the percentage of the world population that the given population 
// represents. For example, China has 1441 million people, so it's about 18.2% of 
// the world population
// 2. To calculate the percentage, divide the given 'population' value by 7900 
// and then multiply by 100
// 3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
// store the results into variables, and log them to the console
// 4. Create a function expression which does the exact same thing, called 
// 'percentageOfWorld2', and also call it with 3 country populations (can be 
// the same populations)


// using function declaration

// `use strict`;
// const country = `india`;
// const populationOfWorld = 7900;

// function PercentageOfWorld1(population){
//     const populationPercentage = (population / populationOfWorld) * 100;
//     console.log(`${country} has ${population} million people, so it's about ${populationPercentage.toFixed(2)}% of the worlds population`)
// }
// PercentageOfWorld1(1035);



// // using function exepression

`use strict`;
const country1 = `india `;
const populationOfWorld2 = 7900;

const percentageOfWorld2 = function(population){
    const populationPercentage2 = (population / populationOfWorld2) * 100;
    console.log(`${country1} has ${population} million people, so it's about ${populationPercentage2.toFixed(2)}% of the worlds population`);
}
console.log(percentageOfWorld2(42))



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
