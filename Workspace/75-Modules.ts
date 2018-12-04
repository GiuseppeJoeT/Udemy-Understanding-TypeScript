// Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
// TypeScript will look for: .ts , .tsx , .dts file.
import {PiCirc, calcCircomf} from "./mathModule/circle";

console.log(PiCirc);
console.log(calcCircomf(11));
// console.log();