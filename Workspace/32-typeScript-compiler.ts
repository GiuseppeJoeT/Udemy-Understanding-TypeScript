let myFirstName: string = 'Joe';
let myAge:number = 32;

// implicit set to ANY type
let anything;
anything = 30;

// myFirstName = 30; -> error, the value is a STRING

// Compiler improvements with TypeScript 3.0
function controlMe(isTrue: boolean, somethingElse: boolean) {
    let result: number;
    if (isTrue) {
        result = 17;
    }
}