// It’s important to note that in TypeScript 1.5, the nomenclature has changed. “Internal modules” are now “namespaces”
namespace MyMath {
    const PI = 3.14;

    export function calculateCircumference(diameter: number) {
        return diameter + PI;
    }

    export function calculateRectangle(width: number, length: number) {
        return width * length;
    }
}

const PI = 2.99;

console.log('Rectangle area: ' + MyMath.calculateRectangle(10,30));
console.log('Circumference area: ' + MyMath.calculateCircumference(10));
console.log('PI: ' + PI);