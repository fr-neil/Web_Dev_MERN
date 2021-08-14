// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were right
const first = '9' - '5';
console.log(first); //4

const second = '19' - '13' + '17';
console.log(second) //617

const third = '19' - '13' + 17;
console.log(third); //23

const fourth = '123' < 57;
console.log(fourth); //false

const fifth = 5 + 6 + '4' + 9 - 4 - 2;
console.log(fifth) // 1143