// Starting with ECMAScript 2015, JavaScript has a concept of modules. TypeScript shares this concept.
// TypeScript will look for: .ts , .tsx , .dts file.
import * as Circle from "./mathModule/circle";
import { calcRectangleArea } from "./mathModule/rectangle";
import defaultRec from "./mathModule/dafaultRectangle";

console.log(Circle.PiCirc);
console.log(Circle.calcCircomf(11));
console.log('The rectangle area is: ' + calcRectangleArea(30,50) + ' cm^2');
console.log('The default rectangle area is: ' + defaultRec(5,3));