// split() and join() methods

const test1 = `cylax+developer`
const sol1 = test1.split(`+`);
console.log(sol1);
const [name, job] = sol1;

const newName = [`Mr.`, name, job].join(` `);
console.log(newName);


const nameRappers = `tupac+biggie+eazy+snoop+remember+dr`
const rappers = nameRappers.split(`+`);
console.log(rappers);

const lastName = `shakur+smalls+-E+-doggy+-ice+-dre`;
const fullRappers = lastName.split(`+`);
console.log(fullRappers);

console.log(rappers.join(` & `));

//padding
//padStart(`final length of string`, `what to add`);
//padEnd -//-

const msg = `Come, here and join us!`;
console.log(msg.padStart(`35`, `_-_`));
console.log(msg.padEnd(`40`, `-_-`));

//some use cases for this, let's do eith a atm card no


const hideCC = function(number){
	const str = number + ``;
	const mainDigits = str.slice(-4);
	return mainDigits.padStart(str.length, `X`);
};

console.log(hideCC(4512366974521789));
console.log(hideCC(`457961.303697416841`));

//to repeat the same string multiple times

const msg1 = `Because of bad weather, your daparture delayed!!`;
console.log(msg1.repeat(10));
