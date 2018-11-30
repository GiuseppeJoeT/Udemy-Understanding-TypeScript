// Exercise 1 solution
class Car {
// superclass
    
    acceleration: number;

    constructor(public name: string) {
        this.acceleration = 0;
    }

    honk() {    
        console.log("hoooooooooonk!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}
// a new Car object
const car01 = new Car ("Ferrari");
car01.honk(); // hoooooooooonk!
console.log("The car accelaration start to: " + car01.acceleration);

let maxSpeed = car01.accelerate(270);
console.log("The max speed is: " + maxSpeed + " km/h"); 

console.log("The car accelaration start to: " + car01.acceleration);

class footballPlayer {
    sayHi: string;
    constructor(message: string) {
        this.sayHi = message;
    }
    greet(nome: string) {
        return "Hi, " + this.sayHi + nome;
    }
}

let footballPlayer01 = new footballPlayer('my name is ');
console.log(footballPlayer01.greet('Francis'));

// Exercise 2 solution
class BaseObject {
// superclass
    width: number = 0;
    length: number = 0;
}

// INHERITANCE
class Rectangle extends BaseObject {
    // base class
    width: number = 5;
    length: number = 2;
    calcSize() {
        return this.width * this.length;
    }
}
// a new rectangle object
const rectangle01 = new (Rectangle);

// update rectangle01.width
rectangle01.width = 10;
console.log('The rectangle area is ' + rectangle01.calcSize() + ' square meters');


// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    } 
} // close Person class

const person01 = new Person();
console.log(person01.firstName); // '' -> getter
person01.firstName = 'Jo'; // 'Jo' -> setter, no output
console.log(person01.firstName); // Jo 
person01.firstName = "Joseph"; // 'Joseph' -> setter, no output
console.log(person01.firstName); // '' -> because it is > 3
