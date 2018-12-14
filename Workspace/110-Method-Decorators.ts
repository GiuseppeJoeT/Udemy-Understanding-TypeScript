// Method Decorator
function editable(value: boolean) {
    // PropertyDescriptor: The descriptor for the property being defined or modified (VanillaJS)
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class DecoratorProject {
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000 + '€');
    }
}

const project = new DecoratorProject('Decorator Project');
project.calcBudget(); // 1000

// update cacalcBudget() method
project.calcBudget = function() {
    console.log(2000 + '€');
};

project.calcBudget(); // 2000, if the @editable decorator is not FALSE 