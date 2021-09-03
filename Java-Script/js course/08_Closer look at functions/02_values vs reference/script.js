//js does not suppport passing by refference it only supports passing by values

const flight1 = `BHY23`;

const Cylax = {
  Name: `Cylax programmer`,
  passport: 234567890,
};

const checkIn = function (flightName, passenger) {
  const flight = `Fvh893`;
  passenger.Name = `Mr.` + passenger.Name;

  if (passenger.passport === 234567890) {
    alert(`Checked in`);
  } else {
    alert(`Passport incorrect!`);
  }
};
checkIn(flight1, Cylax);
console.log(Cylax);
