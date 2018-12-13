// Create a generic Map (an Object like an Array, but instead with Key-Value Pairs). 
// The key will always be a string.

class MyMap<T> {
    private map: {[key: string]: T} = {};
    
    setItem(key: string, item: T) {
        this.map[key] = item;
    }
    getItem(key: string) {
        return this.map[key];
    }
    // should remove all key-value pairs
    clear()  {
        this.map = {};
    }
    // should output key-value pairs
    printMap() {
        for (let key in this.map) {
            console.log(key, this.map[key]);
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('apples'));
numberMap.printMap();
numberMap.clear();
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
