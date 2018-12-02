// Namespace imports

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

let Pi = 3.14;

// If we don't want to still access everything on my the MyMaths namespace we can use the "import" keyword
import CircleMath = MyMaths.nestedCircle;

console.log('Rectangle area: ' + MyMaths.calcuRectangle(10, 5));

// using the import keyword
console.log('Circumference area: ' + CircleMath.calcuCircumference(11));
console.log(Pi);



