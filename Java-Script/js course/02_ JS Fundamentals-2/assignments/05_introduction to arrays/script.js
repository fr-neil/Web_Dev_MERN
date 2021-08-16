// 1. Create an array containing 4 population values of 4 countries of your choice. 
// You may use the values you have been using previously. Store this array into a 
// variable called 'populations'
// 2. Log to the console whether the array has 4 elements or not (true or false)
// 3. Create an array called 'populations' containing the populations of the 
// world population for these 4 population values. Use the function 
// 'percentageOfWorld1' that you created earlier to compute the 4 
// percentage values

const percentageOfWorld1 = population => (population / 7900) * 100;

const describePopulation = (country, population) =>{
    const percentage = percentageOfWorld1(population);
    let description= `${country} has ${population} million population, which is about ${percentage.toFixed(2)}% of world's population`;
    console.log(description);
}
describePopulation(`india`, 1035); 
describePopulation(`China`, 1441); 
describePopulation(`russia`, 550);
describePopulation(`canada`, 330)

const populations = [1035, 1441, 550, 330];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3],)
];
console.log(percentages)