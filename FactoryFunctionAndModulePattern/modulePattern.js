
const person =(
    function(){
        let secret = "I am Private";

        return{
            value(){
                console.log(secret);
            }
        }
    }
)()

person.value();


const counter = (function () {
    let count = 0; // private

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        return count;
    }

    return {
        increment,
        decrement,
        getCount
    };
})();

counter.increment();
counter.increment();

console.log(counter.getCount()); // 2

counter.decrement();

console.log(counter.getCount()); // 1
