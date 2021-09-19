// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.

// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array.

const dogSarah = dogs.find((arr) => arr.owners.includes("Sarah"));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? `much` : `little!`
  }`
);

// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').

const ownersEatTooMuch = dogs
  .filter((dogs) => dogs.curFood > dogs.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dogs) => dogs.curFood < dogs.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3.
// like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(` and `)}'s dog eating too much'`);
console.log(`${ownersEatTooLittle.join(` and `)}'s dog eating too little'`);

// 5. Log to the console whether there is any dog eating exactly the amount of food
// just true or false

console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion
// Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.

const checkHealthy = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkHealthy));

// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)

console.log(dogs.filter(checkHealthy));

// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects )

const dogsSorted = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
