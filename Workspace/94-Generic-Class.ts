// Generic Class
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    multiply(): number {
        // the plus sign means: force the CAST and convert this value to a NUMBER (in this case) 
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = '10';
simpleMath.multiplyValue = '20';
console.log('The moltiplication result is: ' + simpleMath.multiply()); 