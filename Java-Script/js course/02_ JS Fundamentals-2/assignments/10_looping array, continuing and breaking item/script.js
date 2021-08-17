// 1. Let's bring back the 'populations' array from a previous assignment
// 2. Use a for loop to compute an array called 'percentages2' containing the 
// percentages of the world population for the 4 population values. Use the 
// function 'percentageOfWorld1' that you created earlier
// 3. Confirm that 'percentages2' contains exactly the same values as the 
// 'percentages' array that we created manually in the previous assignment, 
// and reflect on how much better this solution is

const percentageOfWorld1 = population => (population / 7900) * 100;

const populations = [1035, 1441, 550, 330];

const percentages2 = [];
for(let i = 0; i < populations.length; i++){
    const percent = percentageOfWorld1(populations[i])
    percentages2.push(percent)
}
console.log(percentages2);

// const percentages = [
//     percentageOfWorld1(populations[0]),
//     percentageOfWorld1(populations[1]),
//     percentageOfWorld1(populations[2]),
//     percentageOfWorld1(populations[3],)
// ];
// console.log(percentages)