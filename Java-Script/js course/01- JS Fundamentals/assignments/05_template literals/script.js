const country = 'portugal';
const isIsland = false;
const launguage = 'portuguese';
const continent = 'europe';
let population = 110000000;


let partCountry = population / 2;
console.log('population lives in each half: ' + partCountry);

population++
console.log(population)

let finlandPopulation = 6000000;
console.log(population > finlandPopulation)

let averagePopulation = 33000000;
console.log(averagePopulation > population)

// const description = 'Portugal is in Europe, and its 11 million people speak portuguese';
let description = `${country} is in ${continent} , and its 11 million people speak ${launguage}`;
console.log(description)

