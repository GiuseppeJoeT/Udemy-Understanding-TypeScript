// Assign types
let myRealAge;

myRealAge = 32;
myRealAge = '32';
// The compiler won't complain since I did't assign a type in the first var declaration

// assigning a type explicitly
let anotherAge: number;
anotherAge = 30;

// now we get a compiler error
// anotherAge = '30';

let myRealName: string = 'Joseph';
let joeHasHobbies: boolean = true;