class Person {
// superclass

    // 1) public property by default. Freely access to that property
    name: string;

    // the same as above
    public nome: string;

    // private property cannot be accessed from outside of its containing class
    private type: string;
    
    // PROTECTED and PRIVATE properties are only available or accessible from the object you created
    protected age: number = 32;
    // Additionally PROTECTED properties are also accessible from any objects or classes which inherit from this class.

    // 2) getting the argument 
    constructor(name: string, public username: string) {
        // the USERNAME property basically is a shortcut for:
        // 1) creating a property; 
        // 2) getting the argument

        // 3) assigning the argument
        this.name = name;
    }
    // methods which you may access from outside
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
const person = new Person("Max", "max69");
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


// -- ABSTRACT Classes --
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

// you have to inherit from Abstract classes, always!
class ITProject extends Project {

     // abstract method implementation
    changeName(name: string): void {
        this.projectName = name;
    }
}


console.log('ABSTRACT CLASSES: So what is the sense of abstract classes then? ' 
 + 'Well you have to inherit from them always.' 
 + 'They are basically just there TO BE well INHERITED FROM. '
 + 'Well maybe because this class NEVER needs to be INSTANTIATED but only provide some basic set up over'
 + 'more specialized classes which then will be instantiated.'
 + 'And this allows you to set up a CLASS where you only want to HAVE ONE INSTANCE during RUNTIME.');


let newProject = new ITProject();
console.log(newProject); // ITProject {projectName: "Default project"} -> so 1 object with 1 property

newProject.changeName("IT Project n.001");
console.log(newProject);

// Private Constructors - SINGLETON PATTERN
class OnlyOne {
    // We can't access it from outside.
    private static instance: OnlyOne;


    // private constructor to avoid creating objects from external classes
    private constructor(public name: string, public readonly surname: string) {}
 
    // The getInstance() method create the only instance of the object, subsequent invocations of getInstance() method return the reference to the same object.
    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('name', 'Surname');
        }
        return OnlyOne.instance;
    }
}

//  let wrongInstance = new OnlyOne('The Only One'); -> this won't compile 
let rightInstance = OnlyOne.getInstance();
console.log(rightInstance);

// from private constructor
console.log(rightInstance.name);

// NAME is a public property, let's change it!
rightInstance.name = ' "name" property updated!';
console.log(rightInstance.name);

// readonly property
// rightInstance.surname = 'this will not work because surname is a readonly property ';
console.log(rightInstance.surname);