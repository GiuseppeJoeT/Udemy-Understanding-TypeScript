class Person {
// superclass

    name: string;
    private type: string;
    
    // PROTECTED and PRIVATE properties are only available or accessible from the object you created
    protected age: number = 32;
    // Additionally they're also accessible from any objects or classes which inherit from this class.

    constructor(name: string, public username: string) {
        // the USERNAME property basically is a shortcut for:
        // 1) creating a property; 
        // 2) getting the argument 
        // 3) assigning the argument
        this.name = name;
    }
    // how you create methods which you may access from outside
    printAge() {
        console.log(this.age);
        this.setType("Old guy");
    }
    setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

// Let's instantiate the Person class
const person = new Person("Max", "max");
console.log(person);
console.log(person.name, person.username); // Max max
person.printAge(); // 32 - Old guy
// person.setType("Cool guy"); // 


// INHERITANCE
class Joe extends Person {
// base class

    // the content  you find in the main class here always overrides the content of you a superclass of your parent class
    name = "Joe";

    constructor(username: string) {
        // super() will execute the constructor of the base class.
        super("joe32", username);
        // access a protected property
        this.age = 69;
    }
}

const joe = new Joe("joe"); // Joe(username) {}
console.log(joe);