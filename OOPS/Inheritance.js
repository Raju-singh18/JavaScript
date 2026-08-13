class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Raju", 22);

student1.greet();
student1.study();
