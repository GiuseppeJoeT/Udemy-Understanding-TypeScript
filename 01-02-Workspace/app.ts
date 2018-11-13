// Assign types
let joeAge;

joeAge = 32;
joeAge = '32';
// The compiler won't complain since I did't assign a type in the first var declaration

// assigning a type explicitly
let sAge: number;
sAge = 30;

// now we get a compiler error
// anotherAge = '30';

let firstName: string = 'Joseph';
let hobby: boolean = true;

// ARRAY
let hobbies = ["Cooking", "Sports"];

// npm start to test the project
console.log(hobbies[0]);
console.log(typeof hobbies);

// the compiler will get an error because it initializes an array of strings
// hobbies = [100];

let anyArrayItem: any = ['string', 100, true];

// TUPLES: are really just arrays with mixed types and a limited number of items.

// declare a Tuple type
let x: [string, number];
// initialize it
x = ['hello', 11];

// the type order is fundamental
let address: [string, number] = ['Superstreet', 99];
console.log('The Tuple values are ' + address);


// ENUM: a way of giving more friendly names to sets of numeric values.
enum Color {
    Gray, // 0
    Green = 100,
    Blue // ?
}

let myColor: Color = Color.Blue;
console.log('The Enum (Color.Blue) value is ' + myColor);