const pi = 2.99;

console.log('Rectangle area: ' + MyMath.calcRectangle(10,30));
console.log('Circumference area: ' + MyMath.calcCircumference(10));
console.log('PI: ' + pi);

// we can use concatenated output using the --outFile flag to compile all of the input files into a single JavaScript output file
// tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts