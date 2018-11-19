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
    // in this SCOPE the variable is undefined yet so the compiler will get an error
    // console.log(variable);
    let variable = null;
    console.log(variable);
} 
reset();
// this log is to show you how the block scope works. The variable value has still the global scope value
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

const greet = () => {
    console.log("Hello!");
}
greet();

const greetFriend = friend => {
    console.log(friend);
}
greetFriend('Joe');


//  FUNCTIONS: DEFAULT PARAMETERS
console.log('FUNCTIONS: DEFAULT PARAMETERS');
const countDown = (start: number = 10): void => {
    while (start > 0) {
        start--;
        //  console.log(start);
    }
    console.log("Done!", start);
}
countDown();

// REST & SPREAD OPERATORS: They allow you to work with arrays and list of data.
console.log('REST & SPREAD OPERATORS');
const numbers = [1, 10 , 99, -5];

console.log(Math.max(1, 10 , 100, -5));
// the SPREAD operator turns this array into a list of values kind of like removing the square brackets.
console.log(Math.max(...numbers));

// the REST operator is the same as the SPREAD one but we can use it in a function parameter
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Joe", 1,2,3,5,7));

// DESTRUCTURING
console.log('DESTRUCTURING');
const myHobbies = ['swimming', 'walking'];
// destructuring Arrays
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

// destructuring Objects
const uData = { userName: "Joe", age: 32 };
const {userName: uName, age: uAge} = uData;
console.log(uName, uAge);

