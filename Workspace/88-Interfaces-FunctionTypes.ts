// Function Types
interface DoubleValueFunct {
    (number1: number, number2: number): number;
}

let myDoubleValueFunct: DoubleValueFunct;

myDoubleValueFunct = function(val1: number, val2: number) {
    return (val1 + val2) * 2;
};

console.log(myDoubleValueFunct(11, 20));