const myCountry = `portugal`;
const spokenLaunguage = `portugese`;
const currentPopulation = 33;
const isIsland = false;

if (spokenLaunguage === 'english' && currentPopulation < 50 && !isIsland){
    console.log(`You should live in ${myCountry}`);   
}else{
    console.log(`${myCountry} does not meet your criteria!`);
}