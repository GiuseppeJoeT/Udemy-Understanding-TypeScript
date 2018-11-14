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
console.log(hobbies[0]); // Cooking
console.log(typeof hobbies); // object

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
    Blue // ? -> 101
    // So it continues incrementing with the latest number with the number of the item prior to this one.
}

let myColor: Color = Color.Blue;
console.log('The Enum (Color.Blue) value is ' + myColor); // 101

// ANY: We may need to describe the type of variables that we do not know when we are writing an application. Use it carefully!
let car: any = "BMW";
console.log(car);
car = {
    brand: 'BMW',
    series: 3
}
console.log(car);

// FUNCTIONS
function returnMyName(): string {
    return firstName;
}
console.log(returnMyName());

// VOID: There is nothing to be returned. The absence of having any type at all, the opposite of ANY
function sayHello(): void {
    console.log("hello!");
} 

// ARGUMENT TYPES
function multiply(val1: number, val2: number): number {
    return val1 * val2;
}
// console.log(multiply(2, 'Joe')); // NaN
console.log(multiply(16, 2));

// FUNCTION TYPES: has two parts: the type of the arguments and the return type. The name of the arguments is totally ignored. The TYPE is the important part
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply(); error, because sayHello() has a VOID type
myMultiply = multiply;
console.log(myMultiply(16, 2));

// OBJECTS: The names of the properties are important to really identify the properties we're talking about.
let userData: { name: string, age: number } = {
    name: 'Joe',
    age: 32
}

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

//TYPE ALIAS: create a new name for a type.
type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data
    }
};

// UNION TYPES: we may chain more than 2 types.
let myRealRealAge: number | string = 32;
myRealRealAge = '32';
// myRealRealAge = true; // error, it's not a number neither a string

// CHECK TYPES
let finalValue = 30;
if (typeof finalValue == "number") {
    console.log('Final value is a number');
}