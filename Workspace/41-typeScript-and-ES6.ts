// Let & const
let variable = "Test";
console.log(variable);

variable = "another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99; -> error, we can't reassign a Constant


// Block scope
function reset() {
    let variable = null;
    console.log(variable);
} 

reset();
console.log(variable);