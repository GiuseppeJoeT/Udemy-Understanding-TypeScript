// String
let myName = 'Joe';

// try to compile it! 
myName = 32;

// As you can see that type number is not assignable to type string.
// That cannot be possible in TypeScript with the STATIC STYPES, instead you can do that in JavaScript with Dynamic Types

// Tuple
let driver: [string, number] = ['Ayrton Senna', 3];

// Enum
enum PuntoCardinale {Nord, Sud, Ovest, Est};
const nord: PuntoCardinale = PuntoCardinale.Nord; // 0