// @Decorators
//  A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. 

function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class PersonDec {
    
}