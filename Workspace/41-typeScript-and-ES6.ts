// Let & const
console.log('LET & CONST!');
let variable = "Test";
console.log(variable);

variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; -> error, we can't reassign a Constant


// Block scope
function reset() {
    // in this SCOPE the variable is undefined yet
    console.log(variable);
    let variable = null;
    console.log(variable);
} 
reset();
// this log to show you how the block scope works. The variable has the global scope value
console.log(variable);


// ARROW FUNCTIONS
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(14, 3));

const multiplyNumbers = (number1: number, number2: number) => { 
    return number1 * number2;
}
console.log(multiplyNumbers(10, 3));
