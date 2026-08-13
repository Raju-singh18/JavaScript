
function createPerson(name, age) {
    return {
        name: name,
        age: age,

        sayHello() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

const person1 = createPerson("Alice", 22);
const person2 = createPerson("Raju", 23);

person1.sayHello();
person2.sayHello();
