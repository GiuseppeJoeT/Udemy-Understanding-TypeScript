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

class Human {
    constructor(public name: string, public surname: string, ageHuman: number) {

    }

    greetingHuman(message) {
        console.log(message);
    }
}

const human01 = new Human("Frank", "Lampard", 37);
console.log(human01);
human01.greetingHuman('Hi there, my name is:' + human01.name);


// Exercise 2 solution
class BaseObject {
// superclass

    width: number = 0;
    length: number = 0;
}

// INHERITANCE
class Rectangle extends BaseObject {
    private rectanglePosition: string;

    // constructor(width: number, rectanglePosition: string) {
    //     // super() will execute the constructor of the base class
    //     // super(width);
    //     this.rectanglePosition = rectanglePosition;
    // }
    // base class
    width: number = 5;
    length: number = 2;
    calcSize(width, length) {
        return this.width * this.length;
    }
}
// a new rectangle object
const rectangle01 = new (Rectangle);
console.log(rectangle01.calcSize(5,3));

class square extends BaseObject {
    constructor (side: number) {
        super(side);
    }
    calcArea(side) {
        return this.side * this.side;
    } 
}