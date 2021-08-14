// TEST DATA ONE
let weightMark = 78;
let heightMark = 1.69;

let weightJohn = 92;
let heightJohn = 1.95;

let bmiMark = weightMark / heightMark ** 2;
console.log('mark\'s BMI: ' + bmiMark.toFixed(2))
let bmiJohn = weightJohn / heightJohn ** 2;
console.log('John\'s BMI: ' + bmiJohn.toFixed(2))

let markHigherBmi = bmiMark > bmiJohn;
console.log(markHigherBmi)

if(markHigherBmi){
    console.log(`Mark's BMI ${bmiMark.toFixed(1)} is higher than John's ${bmiJohn.toFixed(1)} BMI`);
}else{
    console.log(`John's BMI (amount.tofixed(1)${bmiJohn}) is higher than Mark's ${bmiMark} BMI`)
};

// TEST DATA TWO
// let weightMark = 95;
// let heightMark = 1.88;

// let weightJohn = 85;
// let heightJohn = 1.76;

// let bmiMark = weightMark / heightMark ** 2;
// console.log('mark\'s BMI: ' + bmiMark)
// let bmiJohn = weightJohn / heightJohn ** 2;
// console.log('John\'s BMI: ' + bmiJohn)

// let markHigherBmi = bmiMark > bmiJohn;
// console.log(markHigherBmi)