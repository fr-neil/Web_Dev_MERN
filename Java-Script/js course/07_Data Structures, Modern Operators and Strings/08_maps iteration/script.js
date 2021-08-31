// maps // similar to objects
// more useful than sets // used to  map values to keys
// maps can have any data type for key, unlike objects where we can use only string as an key
// also we can use arrays or objects && even booleans as keys
// const rest = new Map(); // it's always a good practice to make an empty map and then add elements to it
// rest.set(`name`, `classics`);
// rest.set(1, `italy`);
// rest.set(2, `india`);
// console.log(rest);

// // to get an value of specific key
// // eg.

// rest
//   .set(`categories`, [`pizza`, `pasta`, `risotto`, `pani-puri`])
//   .set(`open`, 11)
//   .set(`close`, 23)
//   .set(true, `we're open`)
//   .set(false, `we're closed!`);

// console.log(rest.get(`categories`));
// console.log(rest.get(`open`));
// console.log(rest.get(`close`));

// const time = 17;
// console.log(rest.get(time > rest.get(`open`) && time < rest.get(`close`)));

// // using arrays and objects as keys

// const arr = [1, 2];
// const obj = { party: `up?` };
// rest.set(arr, `ka 4`);
// rest.set(obj, `nah, not now!`);
// console.log(rest);

const question = new Map([
  [`question`, `which is your favorite programming language?`],
  [1, `python`],
  [2, `java`],
  [3, `cpp`],
  [4, `c`],
  [5, `javascript`],
  [`correct`, 2],
  [true, `your answer is correct 🎉`],
  [false, `your answer is incorrect 📛`],
]);

console.log(question);

console.log(question.get(`question`));
for (const [key, value] of question) {
  if (typeof key === `number`) console.log(`answer ${key}: ${value}`);
}

const answer = Number(prompt(`enter your answer:`));
console.log(answer);
console.log(question.get(question.get(`correct`) === answer));
