interface PersonInterface {
    firstName: string;
    // age is an optional property
    age?: number;
    
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

const myPersonInterClass = new PersonInterClass();
myPersonInterClass.firstName = 'Francesco';
myPersonInterClass.lastName = 'Totti';
myPersonInterClass.greet(myPersonInterClass.lastName);
