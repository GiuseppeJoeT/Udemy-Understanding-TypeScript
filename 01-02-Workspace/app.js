// Assign types
var joeAge;
joeAge = 32;
joeAge = '32';
// The compiler won't complain since I did't assign a type in the first var declaration
// assigning a type explicitly
var sAge;
sAge = 30;
// now we get a compiler error
// anotherAge = '30';
var firstName = 'Joseph';
var hobby = true;
// ARRAY
var hobbies = ["Cooking", "Sports"];
// npm start to test the project
console.log(hobbies[0]);
console.log(typeof hobbies);
// the compiler will get an error because it initializes an array of strings
// hobbies = [100];
var anyArrayItem = ['string', 100, true];
// TUPLES: are really just arrays with mixed types and a limited number of items.
// declare a Tuple type
var x;
// initialize it
x = ['hello', 11];
// the type order is fundamental
var address = ['Superstreet', 99];
console.log('The Tuple values are ' + address);
// ENUM: a way of giving more friendly names to sets of numeric values.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; // ?
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log('The Enum (Color.Blue) value is ' + myColor);
