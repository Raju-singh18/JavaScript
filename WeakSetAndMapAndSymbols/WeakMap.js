
//! WeakMap is a collection of key-value pairs where keys must be objects. Its keys are held weakly, so when an object is no longer strongly reachable elsewhere, it can be garbage collected along with its WeakMap entry. WeakMap provides set(), get(), has(), and delete() but is not iterable and has no size property.

// const user={
//     name:"Raju"
// }
// const Weekmap = new WeakMap();
// Weekmap.set(user,"Rohit");
// console.log(Weekmap.get(user));


const weakMap = new WeakMap();
const user = {
    name: "Raju"
};
weakMap.set(user, {
    role: "Developer",
    age: 22
});
console.log(weakMap.get(user));
console.log(weakMap.has(user));
weakMap.delete(user);
console.log(weakMap.has(user));
