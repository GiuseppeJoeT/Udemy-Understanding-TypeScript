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
console.log('So whilst NAMESPACES here are a great tool for smaller applications you probably want to fall back' 
+ 'to either ES6 modules or modules in general,'
+ 'which are best for working on medium sized and large projects.')



