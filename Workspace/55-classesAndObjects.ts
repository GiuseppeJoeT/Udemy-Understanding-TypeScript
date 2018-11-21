class Person {
// superclass

    // public property by default. Freely access to that property
    name: string;

    // private property cannot be accessed from outside of its containing class
    private type: string;
    
    // PROTECTED and PRIVATE properties are only available or accessible from the object you created
    protected age: number = 32;
    // Additionally PROTECTED properties are also accessible from any objects or classes which inherit from this class.

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
    private setType(type: string) {
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


//  GETTERS & SETTERS
class Plant {
    private _species: string = "Default plant";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default plant";
        }
    }
}

let plant = new Plant();
// plant.species -> is getting this._species -> Default
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species); // -> Default
// setting
plant.species = 'Evergreen plant';
// getting
console.log(plant.species); 


// Static Properties & Methods
class Helpers {
    // static members of a class are visible on the class itself rather than on the instances
    static PI: number = 3.14;
    static calcCircumference(diameter: number) {
        return this.PI * diameter;
    }
};

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(10));


// Abstract Classes
abstract class Project {
    // Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
    projectName: string = "Default project";
    budget: number;

    // abstract method: do not contain an implementation and must be implemented in derived classes (eg: ITProject)
    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("IT Project n.001");
console.log(newProject);