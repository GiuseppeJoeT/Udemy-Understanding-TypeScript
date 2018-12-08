// an Interface basically is a contract signed by an object which says 
// I guarantee you that I have certain properties and methods
interface NamedPerson {
    firstName: string;
    // the ? (question mark) means that is an optional property
    age?: number;
    //  But then you might have some properties where you don't know the name of the properties in advance. You can use:
    [undefinedProperty: string] : any;
}

function greetInterface(personObject: NamedPerson) {
    console.log("Hello, " + personObject.firstName);
}

function changeNameInterface(personObject: NamedPerson) {
    personObject.firstName = "Anna";
}

const personObject = {
    firstName: "Joe",
    hobbies: ["Cooking", "Swimming"],
    age: 32
};

greetInterface({firstName: "Joseph", age: 32}); // Hello, Joe
changeNameInterface(personObject);
greetInterface(personObject); // Hello, Anna

function hola(person: any) {
    console.log("Hola, " + person);
}

hola('Josè');

// a custom type definition 
const carInfo: { model: number, brand: string } = {model: 488, brand: 'Ferrari'};

// another Interface sample
interface CarInterface {
    model: number,
    brand: string
}

const car001: CarInterface = { model: 430, brand: 'Ferrari' };