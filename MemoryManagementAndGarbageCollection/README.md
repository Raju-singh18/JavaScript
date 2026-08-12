
JavaScript automatically manages memory for you. You don't normally need to manually allocate and free memory like in C/C++.

The two important concepts are:

Memory Management = allocating, using, and releasing memory.
Garbage Collection = automatically finding memory that is no longer reachable and reclaiming it.

1. JavaScript Memory Lifecycle

Whenever you create data in JavaScript, memory is required.

The basic lifecycle is:

        JavaScript Code
              │
              ▼
       ┌─────────────┐
       │ Allocation  │
       └──────┬──────┘
              │
              ▼
       ┌─────────────┐
       │    Usage    │
       └──────┬──────┘
              │
              ▼
       ┌─────────────┐
       │ Reachability│
       │   Check     │
       └──────┬──────┘
              │
       Object unreachable?
              │
          ┌───┴───┐
         Yes      No
          │        │
          ▼        ▼
     Garbage     Keep in
     Collection  memory
          │
          ▼
      Memory freed
2. Memory Allocation

When you create variables, objects, arrays, functions, etc., JavaScript needs memory.

Example:

let name = "Raju";
let age = 24;

const user = {
    name: "Raju",
    age: 24
};

const numbers = [10, 20, 30];

Conceptually:

Memory
┌─────────────────────────────┐
│ name → "Raju"               │
│ age  → 24                   │
│                             │
│ user ────────┐             │
│              ↓             │
│        ┌──────────────┐    │
│        │ name: "Raju" │    │
│        │ age: 24      │    │
│        └──────────────┘    │
│                             │
│ numbers ──────┐            │
│               ↓            │
│        [10, 20, 30]        │
└─────────────────────────────┘
3. Stack and Heap

A simplified model of JavaScript memory is:

              JavaScript Memory
                     │
            ┌────────┴────────┐
            │                 │
          Stack              Heap
            │                 │
      Primitive values    Objects
      References          Arrays
      Function calls      Functions
                          Maps
                          Sets
Stack

The stack is commonly associated with:

Primitive values
References
Function execution contexts
Local variables

Example:

let age = 24;
let isStudent = true;

Conceptually:

Stack
┌──────────────┐
│ age = 24     │
│ student=true │
└──────────────┘
Heap

Objects and other dynamically allocated data are generally stored in heap memory.

const user = {
    name: "Raju",
    age: 24
};

Conceptually:

Stack                    Heap

user ──────────────────→ {
                           name: "Raju",
                           age: 24
                         }

Important: The stack/heap distinction is a simplified conceptual model. The ECMAScript specification does not require a particular physical memory layout.

4. What is Reachability?

Garbage collection is primarily based on reachability.

An object is considered alive if it can still be reached through references from GC roots.

Example:

let user = {
    name: "Raju"
};

user references the object:

Root
 │
 ▼
user ───────→ Object
              │
              └── name: "Raju"

The object is reachable, so it cannot be garbage collected.

5. Making an Object Unreachable

Now:

let user = {
    name: "Raju"
};

user = null;

Initially:

Root
 │
 ▼
user ─────→ Object

After:

user = null;
Root
 │
 ▼
user → null

Object
  ↑
  │
No reference

The object is now unreachable.

The garbage collector can eventually reclaim its memory.

6. Garbage Collection

JavaScript engines automatically run a garbage collector.

A simplified process:

        GC Roots
           │
           ▼
     Find reachable
        objects
           │
           ▼
    Mark reachable
           │
           ▼
   Find unreachable
        objects
           │
           ▼
     Reclaim memory

This is commonly described using the Mark-and-Sweep approach.

7. Mark-and-Sweep

Consider:

let user = {
    name: "Raju"
};

let admin = {
    name: "Admin"
};

user = null;

Initially:

GC Root
 │
 ├────→ user ─────→ Object A
 │
 └────→ admin ────→ Object B

After:

user = null;
GC Root
 │
 └────→ admin ────→ Object B


Object A
   ↑
   │
unreachable

The garbage collector:

Mark

Marks reachable objects:

Object B → MARKED
Object A → UNMARKED
Sweep

Removes unreachable objects:

Object A → Garbage Collected
8. Circular References

A common misconception is that circular references automatically cause memory leaks.

Modern garbage collectors can handle cycles.

Example:

let user1 = {};
let user2 = {};

user1.friend = user2;
user2.friend = user1;

This creates:

user1 ─────→ user2
  ↑            │
  │            ↓
  └────────────┘

Now:

user1 = null;
user2 = null;

There is still a cycle internally:

Object A ───→ Object B
   ↑             │
   └─────────────┘

But if nothing from the GC roots can reach these objects, they are still unreachable.

Therefore:

Circular references themselves do not necessarily cause a memory leak.

9. Memory Leak

A memory leak occurs when memory that is no longer needed remains reachable, preventing garbage collection.

For example:

const users = [];

function addUser(user) {
    users.push(user);
}

If users keeps growing forever:

users
 │
 ├── User 1
 ├── User 2
 ├── User 3
 ├── User 4
 ├── User 5
 ├── ...
 └── User 1,000,000

Those objects remain reachable through users.

Therefore, the garbage collector cannot remove them.
