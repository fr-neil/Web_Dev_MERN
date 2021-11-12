const personProto = {
  calcAge: function () {
    console.log(2037 - this.yearOfBirth);
  },
  init(firstName, yearOfBirth) {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
  },
};

const studentProto = Object.create(personProto);
studentProto.init = function (firstName, yearOfBirth, course) {
  personProto.init.call(this, firstName, yearOfBirth);
  this.course = course;
};
studentProto.introduce = function () {
  console.log(
    `Hi, my name is ${this.firstName} and i'm in course ${this.course}.`
  );
};
const yogi = Object.create(studentProto);
yogi.init(`Yogesh`, 2000, `B.Tech`);
yogi.introduce();
yogi.calcAge();
