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
console.log(hobbies[0]); // Cooking
console.log(typeof hobbies); // object
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
    Color[Color["Blue"] = 101] = "Blue"; // ? -> 101
    // So it continues incrementing with the latest number with the number of the item prior to this one.
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log('The Enum (Color.Blue) value is ' + myColor); // 101
// ANY: We may need to describe the type of variables that we do not know when we are writing an application. Use it carefully!
var car = "BMW";
console.log(car);
car = {
    brand: 'BMW',
    series: 3
};
console.log(car);
// FUNCTIONS
function returnMyName() {
    return firstName;
}
console.log(returnMyName());
// VOID: There is nothing to be returned. The absence of having any type at all, the opposite of ANY
function sayHello() {
    console.log("hello!");
}
// ARGUMENT TYPES
function multiply(val1, val2) {
    return val1 * val2;
}
// console.log(multiply(2, 'Joe')); // NaN
console.log(multiply(16, 2));
// FUNCTION TYPES: has two parts: the type of the arguments and the return type. The name of the arguments is totally ignored. The TYPE is the important part
var myMultiply;
// myMultiply = sayHello;
// myMultiply(); error, because sayHello() has a VOID type
myMultiply = multiply;
console.log(myMultiply(16, 2));
// OBJECTS: The names of the properties are important to really identify the properties we're talking about.
var userData = {
    name: 'Joe',
    age: 32
};
