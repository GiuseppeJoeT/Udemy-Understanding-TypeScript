class Person {
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
const person = new Person("Joe", "joe");
console.log(person);
console.log(person.name, person.username); // Joe joe
person.printAge(); // 32 - Old guy
// person.setType("Cool guy"); // 