// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target",  target);
    console.log("methodName", methodName);
    console.log("paramIndex", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log('The students number is: ' + 10000);
        } else {
            console.log('The freshmen students are: ' + 2000);
        }
    }
}

const course = new Course("Programming foundamentals course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);