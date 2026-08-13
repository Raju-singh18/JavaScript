
class Person{

    constructor(name="Rohit", age=16){
     this.name=name;
     this.age=age;
    }

    greet(){
      console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);  
    }
}

const person1 = new Person("Raju",22);
person1.greet();
const person2 = new Person();
person2.greet();
