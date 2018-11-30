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

console.log(MyMath.calculateRectangle(10,30));
console.log(MyMath.calculateCircumference(10));
console.log(PI);