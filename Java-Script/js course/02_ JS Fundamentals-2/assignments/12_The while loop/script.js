// 1. Recreate the challenge from the lecture 'Looping Arrays, Breaking and Continuing', 
// but this time using a while loop (call the array 'percentages3')


const percentageOfWorld1 = population => (population / 7900) * 100;

const populations = [1035, 1441, 550, 330];

const percentages2 = [];
for(let i = 0; i < populations.length; i++){
    const percent = percentageOfWorld1(populations[i])
    percentages2.push(percent)
}
console.log(percentages2);

percentages3 = [];
let i = 0;
while(i < populations.length){
    const percent = percentageOfWorld1(populations[i]);
    percentages3.push(percent)
    i++;
}
console.log(percentages3)