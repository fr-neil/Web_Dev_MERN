const flights =
  "_Delayed_Departure;fao94859;txl48933;11:25+_Arrival;bru84938;fao748398;11:45+_Delayed_Arrival;hel84939;fao08474;12:05+_Departure;fao84839;lis84938;12:30";

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split(`+`)) {
  const [type, from, to, time] = flight.split(`;`);
  const output = `${type.startsWith(`_Delayed`) ? `🔴` : ` `} ${type.replaceAll(
    `_`,
    ` `
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    `:`,
    `h`
  )})`.padStart(46);
  console.log(output);
}
// type.startswith(`_`) ? `🔴` : ``;
