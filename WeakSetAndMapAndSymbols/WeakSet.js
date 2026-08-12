
// ! Weak Set
// WeakSet is a collection that stores objects only and holds them weakly, meaning that storing an object in a WeakSet does not prevent that object from being garbage collected when there are no other strong references to it.

const user1 ={
    name:'Raju'
};
const user2={
    name:"JOhn"
}

const weekSet = new WeakSet();

weekSet.add(user1);
weekSet.add(user2);
console.log(weekSet.has(user1)) //true
 