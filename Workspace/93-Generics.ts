// Simple Generic
function echo(data: any) {
    return data;
}

console.log('My name length is: ' + echo('Joe').length);
console.log(echo('32'));
console.log(echo({name: 'Joe', age: 32}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log('My name length is: ' + betterEcho('Joe').length);
console.log(betterEcho<number>(32));
console.log(betterEcho({name: 'Joe', age: 32}));

// Built-in Generics
const testGeneric: Array<number> = [1.94, 2.33];
testGeneric.push(-2.99);
//  testGeneric.push('string'); // Error
console.log(testGeneric);

const consoles2018: Array<string> = ['PS4', 'Xbox One S', 'Switch'];

// Generics and Arrays
function printAll<T>(args: T []) {
    args.forEach((element) => console.log(element));
}

printAll<string>(["apple", "banana", "strawberry"]);

// Generics Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>('SOMETHING')); // SOMETHING