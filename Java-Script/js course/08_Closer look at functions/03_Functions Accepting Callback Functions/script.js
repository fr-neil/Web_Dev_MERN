// we will use this functions as callback for higher order func
const oneWord = function (str) {
  return str.replace(/ /g, ``).toLowerCase();
};

// we will use this functions as callback for higher order func
const upperFirst = function (str) {
  const [first, ...others] = str.split(` `);
  return [first.toUpperCase(), ...others].join(` `);
};

// higher order function, calling other functions
// this enables us to use abstraction, hence higher order functions don't really know the code
const transformer = function (str, func) {
  console.log(`Original string : ${str}`);
  console.log(`Modified string : ${func(str)}`);

  console.log(`Transformed by : ${func.name}`);
};

transformer(`Javascript is really overwheling`, upperFirst);
transformer(`Javascript is really overwheling`, oneWord);
