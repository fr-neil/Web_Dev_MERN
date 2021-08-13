const country = 'portugal';
const isIsland = false;
const launguage = 'portuguese';
const continent = 'europe';
let population = 110000000;

if (population > 330000000){
    console.log(`${country}s population is above average`);
}else{
    const belowAverage = 330000000 - population;
    console.log(`${country}s population is ${belowAverage} below average`);

}

