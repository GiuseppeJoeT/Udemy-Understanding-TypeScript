// Exercise 1 - Maybe use an Arrow Function?
const Double = (value: number) => { 
    return value * 2; 
};
console.log(Double(100));


// Exercise 2 - If only we could provide some default values...
const Greet =  (name: string = 'Joe'):void => {
    console.log("Hello, " + name);
};
Greet();
Greet("Anna");

// Exercise 3 - Isn't there a shorter way to get all these Values?
let Numbers = [-3, 33, 38, 5];
console.log(Math.min(...Numbers));

// Exercise 4 - I have to think about Exercise 3 ...
let NewArray = [55, 20];
NewArray.push(...Numbers);
console.log(NewArray);

// Exercise 5 - That's a well-constructed array.
const TestResults = [3.89, 2.99, 1.38];
const [Result1, Result2, Result3] = TestResults;
console.log(Result1, Result2, Result3);

// Exercise 6 - And a well-constructed object!
const Scientist = {firstName: "Will", experience: 12};
const  {firstName: fName, experience: exp } = Scientist;
console.log(fName, exp);

