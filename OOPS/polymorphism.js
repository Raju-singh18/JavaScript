
//! Polymorphism using Method Overriding

// class Animal {
//     sound() {
//         console.log("Animal makes a sound");
//     }
// }

// class Dog extends Animal {
//     sound() {
//         console.log("Dog barks");
//     }
// }

// class Cat extends Animal {
//     sound() {
//         console.log("Cat meows");
//     }
// }

// const dog = new Dog();
// const cat = new Cat();

// dog.sound(); // Dog barks
// cat.sound(); // Cat meows

//! Method Overriding
// Polymorphism is commonly achieved through method overriding.

// class Employee {
//     work() {
//         console.log("Employee is working");
//     }
// }

// class Developer extends Employee {
//     work() {
//         console.log("Developer is writing code");
//     }
// }

// class Designer extends Employee {
//     work() {
//         console.log("Designer is designing UI");
//     }
// }

// const employees = [
//     new Employee(),
//     new Developer(),
//     new Designer()
// ];

// employees.forEach(employee => {
//     employee.work();
// });

//! Polymorphism with Objects
// JavaScript doesn't require classes for polymorphism.

// const car = {
//     start() {
//         console.log("Car starts with a key");
//     }
// };

// const bike = {
//     start() {
//         console.log("Bike starts with a button");
//     }
// };

// function startVehicle(vehicle) {
//     vehicle.start();
// }

// startVehicle(car);
// startVehicle(bike);


//! Polymorphism with a Common Function
// We can make one function work with different objects:

class Dog {
    sound() {
        console.log("Bark");
    }
}

class Cat {
    sound() {
        console.log("Meow");
    }
}

function makeSound(animal) {
    animal.sound();
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Bark
makeSound(cat); // Meow
