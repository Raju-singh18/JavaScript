
function Person(name){
    this.name=name;
    this.sayHello = function(){
        console.log("Hello, my name is " + this.name);
    }
}

const person1 = new Person("Alice");
person1.sayHello();
