interface PersonInterface {
    firstName: string;
    // age is an optional property
    age?: number;
    [undefinedProperty: string] : any;
    
    // method
    greet(lastName: string) : void;
} 

const person001: PersonInterface = {
    firstName: 'Joseph',
    greet(lastName: string) {
        console.log("Hi, I'm " + this.firstName + " " + this.lastName);
    }
};

person001.greet('Tiberi');