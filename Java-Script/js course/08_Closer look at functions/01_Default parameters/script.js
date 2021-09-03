// we set default values to function values, so in case we don't recieve values, we won't get any kind of error
`use strict`;

const bookings = [];

const createBookings = function (flightName, numCoustomers = 1, price = 199) {
  const booking = { flightName, numCoustomers, price };
  bookings.push(booking);
  console.log(bookings);
};

createBookings(`LBH001`);
createBookings(`LBH002`, 4, 200);
createBookings(`LBH003`, undefined, 1500);
