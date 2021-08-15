// 1. Write a function called 'describeCountry' which takes three parameters: 
// 'country', 'population' and 'capitalCity'. Based on this input, the 
// function returns a string with this format: 'Finland has 6 million people and its 
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the 
// returned values in 3 different variables, and log them to the console

function describeCountry( country, population, capitalCity){
    const msg = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
    return msg;
}
console.log(describeCountry(`Finland`, 6, `helsinki`))

// ANOTHER APPROACH

// function describeCountry( country, population, capitalCity){
//     const msg = `${country} has ${population} million people and it's capital city is ${capitalCity}`;
//     return msg;
// }

// const country = prompt(`Enter your country`);
// const population = prompt(`What's your country's population?`);
// const capitalCity = prompt(`Which is the capital city of your country?`);
// console.log(describeCountry(country, population, capitalCity))