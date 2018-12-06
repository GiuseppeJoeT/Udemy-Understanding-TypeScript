interface NamedPerson {
    firstName: string;
}

function greetInterface(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeNameInterface(person: NamedPerson) {
    person.firstName = "Anna";
}

const personObject = {
    firstName: "Joe",
    age: 32
};

greetInterface(personObject); // Hello, Joe
changeNameInterface(personObject);
greetInterface(personObject); // Hello, Anna