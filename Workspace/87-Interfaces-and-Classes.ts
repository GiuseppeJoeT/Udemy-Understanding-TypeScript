interface PersonInterface {
    firstName: string;

    // age is an optional property
    nationality?: number;

    // readonly property
    readonly hobby?: string; 

    // method
    greet(lastName: string) : void;
} 

class PersonInterClass implements PersonInterface {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log("Hi, I'm " + this.firstName + " " + lastName)
    }
}

// Interface Inheritance
interface AgedPersonInterf extends PersonInterface {
    age: number
}

const myPersonInterClass = new PersonInterClass();
myPersonInterClass.firstName = 'Francesco';
myPersonInterClass.lastName = 'Totti';
myPersonInterClass.greet(myPersonInterClass.lastName);

const oldPersonInterf: AgedPersonInterf = {
    age: 32,
    firstName: 'Joe',
    greet(lastName: string) {
        console.log(lastName);
    }
}

console.log(oldPersonInterf);