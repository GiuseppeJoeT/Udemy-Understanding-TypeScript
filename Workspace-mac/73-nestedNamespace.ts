namespace Math00 {
    export namespace Circle {
        const PiCircle = 3.14;

        export function calculCircumference(Diameter: number) {
            return Diameter * PiCircle;
        } 
    } 
}

console.log('The nested namespace shows the Circle Circumference: ' 
+ Math00.Circle.calculCircumference(10));