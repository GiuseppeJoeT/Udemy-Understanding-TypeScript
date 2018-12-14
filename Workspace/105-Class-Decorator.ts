// @Decorators
//  A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. 
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class PersonDec {
    constructor() {
        console.log('hi!');
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class CarFactory {

} 