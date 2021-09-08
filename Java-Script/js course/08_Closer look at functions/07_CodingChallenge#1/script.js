//A poll has a question, an array of options from which people can choose, and an
//array with the number of replies for each option. This data is stored in the starter
//'poll' object below.

`use strict`;
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          `\n`
        )} \n (Enter option number :)`
      )
    );
    console.log(answer);
    typeof answer === `number` &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults(`string`);
  },

  displayResults(type = `array`) {
    if (type === `array`) {
      console.log(`Poll results : ${this.answers}`);
    } else if (type === `string`) {
      console.log(`Poll results : ${this.answers.join(`, `)}`);
    }
  },
};

document
  .querySelector(`.poll`)
  .addEventListener(`click`, poll.registerNewAnswer.bind(poll));
