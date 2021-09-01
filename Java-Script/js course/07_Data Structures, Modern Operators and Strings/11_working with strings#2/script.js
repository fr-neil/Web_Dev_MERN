const airline = `Tap Air Portugal`;

console.log(airline.toLowerCase);


const passenger = `NiLEShh`;

const passenger1 = function(name){
	const lowerName = name.toLowerCase();
	const correctName = lowerName[0].toUpperCase() + lowerName.slice(1);
	return correctName;
};
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
console.log(passenger.toUpperCase());
console.log(passenger.toLowerCase());
console.log(passengerLower[0].toUpperCase() + passengerLower.slice(1));
console.log(passenger1(`BHauaAheyuJ`));
console.log(passenger1(`nIleSSSSSHHHaaaHJH`));


// replacing char and words

const msg = `ni-hao, i ain't someone, ain't u know that, ni-hao`;
console.log(msg.replaceAll(`ain't`, `are not`).replaceAll(`ni-hao`, `namaste`));

//methods which returns boolean

const plane = `Airbus A320neo`;
const planeLower = plane.toLowerCase();
console.log(planeLower.startsWith(`air`) + (` : plane starts with string 'air'`));
console.log(planeLower.includes(`320`) + (` : plane includes '320'`));
console.log(planeLower.endsWith(`neo`) + (` : plane ends with 'neo'`));

//use case

const checkPeeps = function(items){
	const baggage = items.toLowerCase();
	if(baggage.includes(`knife`) || baggage.includes(`gun`)){
		console.log(`You're not allowed on plane`);
	}else{
		console.log('welcome abroad!');
	}
};

checkPeeps(`hello, i've some snacks, some food and a knife`);
checkPeeps(`i have a gun to kill ya'll`);
checkPeeps(`i've butter`);
