const percentageOfWorld1 = population => (population / 7900) * 100;

const describePopulation = (country, population) =>{
    const percentage = percentageOfWorld1(population);
    let description= `${country} has ${population} million population, which is about ${percentage.toFixed(2)}% of world's population`;
    console.log(description);
}

describePopulation(`india`, 1035); 
describePopulation(`China`, 1441); 
describePopulation(`russia`, 550);