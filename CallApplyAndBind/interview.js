
const obj1={
    name:"Raju Singh",
    age:13,
    greet: function(){
        console.log(`My name is: ${this.name}`)
    }
};

// const getval = obj1.greet; //[Function: greet]
const getval = obj1.greet.bind(obj1);
console.log(getval());
