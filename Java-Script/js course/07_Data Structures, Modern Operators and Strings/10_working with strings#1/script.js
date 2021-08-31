const checkMiddleSeat = function (seat) {
  const sit = seat.slice(-1);
  if (sit === `B` || sit === `E`) {
    console.log(`you got the middle seat, #sedlyf`);
  } else {
    console.log(`congratulations you got the window seat`);
  }
};

checkMiddleSeat(`11B`);
checkMiddleSeat(`22E`);
checkMiddleSeat(`21A`);
