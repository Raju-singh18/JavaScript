1. Execution Context in JavaScript

An Execution Context is the environment in which JavaScript code is evaluated and executed.

JavaScript mainly has three types:

Global Execution Context
Function Execution Context
Eval Execution Context — rarely used
2. Global Execution Context

When JavaScript starts running a file, it first creates the Global Execution Context (GEC).

Example:

var name = "Raju";

let age = 24;

function greet() {
    console.log("Hello");
}

JavaScript creates the Global Execution Context.

Conceptually:

Global Execution Context
│
├── Global Object
│
├── this
│
├── name → undefined
├── age → <uninitialized>
└── greet → function

The Global Execution Context has two important phases.

Phase 1: Creation Phase

JavaScript prepares memory for variables and functions.

var name = "Raju";

function greet() {
    console.log("Hello");
}

During creation:

name  → undefined
greet → function

For let and const, memory is allocated but they remain in the Temporal Dead Zone (TDZ) until their declaration is executed.

Phase 2: Execution Phase

JavaScript executes the code line by line.

name = "Raju";

Now:

name → "Raju"
3. Function Execution Context

Whenever a function is called, JavaScript creates a new Function Execution Context.

Example:

let x = 10;

function add(a, b) {
    let result = a + b;
    return result;
}

let answer = add(5, 3);

When this happens:

Global Execution Context
        │
        │ calls add()
        ▼
Function Execution Context
        │
        ├── a → 5
        ├── b → 3
        └── result → 8

After the function finishes:

Function Execution Context
        ↓
removed from Call Stack

4. Call Stack

The Call Stack keeps track of execution contexts.

Think of it like a stack of plates.

       ┌────────────────────┐
       │ Function Context   │ ← Running
       ├────────────────────┤
       │ Global Context     │
       └────────────────────┘

JavaScript follows:

LIFO → Last In, First Out

Example:

function first() {
    second();
}

function second() {
    console.log("Hello");
}

first();

Execution:

1. Global Context
        ↓
2. first()
        ↓
3. second()
        ↓
4. console.log()

Call Stack:

          ┌───────────────┐
          │ console.log() │
          ├───────────────┤
          │ second()      │
          ├───────────────┤
          │ first()       │
          ├───────────────┤
          │ Global        │
          └───────────────┘

After console.log() finishes:

console.log()
     ↓
removed

Then second() finishes:

second()
     ↓
removed

Then first() finishes.

5. What is the Event Loop?

Now comes the important part.

JavaScript is single-threaded, meaning JavaScript code normally executes one piece of synchronous JavaScript at a time.

But browsers provide APIs that allow asynchronous operations such as:

setTimeout
fetch
DOM events
setInterval
Promises
Web APIs

The Event Loop coordinates these asynchronous operations with the Call Stack.

6. Complete JavaScript Runtime

A simplified browser JavaScript runtime looks like this:

                 JavaScript Runtime
┌─────────────────────────────────────────────┐
│                                             │
│             ┌───────────────┐               │
│             │  Call Stack   │               │
│             └───────┬───────┘               │
│                     │                       │
│                     │                       │
│             ┌───────▼───────┐               │
│             │   Event Loop  │               │
│             └───────┬───────┘               │
│                     │                       │
│          ┌──────────┴──────────┐            │
│          │                     │            │
│     Microtask Queue       Task Queue        │
│     (Promise)             (setTimeout)      │
│                                             │
└─────────────────────────────────────────────┘
             │
             │
       Browser Web APIs
             │
      ┌──────┼──────────┐
      │      │          │
   Timer   Fetch      DOM Events
7. Example of Event Loop

Consider:

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

console.log("End");

Output:

Start
End
Timeout

You might wonder:

Why doesn't setTimeout(..., 0) execute immediately?

Because setTimeout is asynchronous.

Step-by-step
Step 1
console.log("Start");

Call Stack:

console.log("Start")

Output:

Start

Then it is removed.

Step 2
setTimeout(() => {
    console.log("Timeout");
}, 0);

The timer is handled by the browser's timer API.

Call Stack             Browser API

setTimeout()  ───────→ Timer
                         │
                         │ 0ms
                         ↓
                     Task Queue

The callback does not immediately go into the Call Stack.

Step 3

JavaScript continues:

console.log("End");

Output:

End
Step 4

The synchronous code has finished.

Now the Event Loop checks the queues and moves the eligible callback to the Call Stack.

Task Queue
    │
    │
    ▼
Call Stack
    │
    ▼
console.log("Timeout")

Output:

Timeout

Therefore:

Start
End
Timeout
8. Promise and Microtask Queue

Promises have an important priority.

Example:

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

Output:

Start
End
Promise
Timeout

Why?

Because Promise callbacks go into the Microtask Queue, while setTimeout callbacks generally go into the Task/Macrotask Queue.

The Event Loop gives microtasks priority after the current synchronous task finishes.

9. Complete Flow
                JavaScript Code
                       │
                       ▼
              ┌─────────────────┐
              │   Call Stack    │
              └────────┬────────┘
                       │
             Synchronous code
                       │
          ┌────────────┴────────────┐
          │                         │
          ▼                         ▼
    Browser Web APIs           Promise
    setTimeout()               .then()
    fetch()
    DOM events
          │                         │
          ▼                         ▼
     Task Queue              Microtask Queue
          │                         │
          └────────────┬────────────┘
                       │
                       ▼
                  Event Loop
                       │
                       ▼
                  Call Stack
                       │
                       ▼
                    Execute
10. Most Important Priority Rule

A useful simplified rule is:

Synchronous Code
       ↓
Microtask Queue
       ↓
Task/Macrotask Queue

For example:

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

Output:

1
4
3
2

Because:

1 → synchronous
4 → synchronous
3 → Promise microtask
2 → setTimeout task
11. fetch() Example

This is especially important for frontend development.

console.log("Start");

fetch("/api/users")
    .then(() => {
        console.log("Users received");
    });

console.log("End");

Execution:

              Global Execution Context
                       │
                       ▼
                  console.log
                    "Start"
                       │
                       ▼
                    fetch()
                       │
                       ▼
                 Browser Web API
                       │
                       │ HTTP request
                       ▼
                 Response arrives
                       │
                       ▼
                Microtask Queue
                       │
                       ▼
                  Event Loop
                       │
                       ▼
                  Call Stack
                       │
                       ▼
              "Users received"

Meanwhile JavaScript can continue executing:

console.log("End");

So output is:

Start
End
Users received
12. Execution Context vs Event Loop

This distinction is very important for interviews.

Concept	Meaning
Execution Context	Environment where JS code executes
Global Execution Context	Created when JS program starts
Function Execution Context	Created whenever a function is called
Call Stack	Tracks execution contexts
Web APIs	Browser features for asynchronous operations
Task Queue	Holds callbacks such as timer callbacks
Microtask Queue	Holds Promise callbacks, etc.
Event Loop	Coordinates queues and Call Stack
13. Interview-Friendly Definition
Execution Context

An execution context is the environment in which JavaScript code is evaluated and executed. It contains information such as variables, functions, scope, and the value of this.

Event Loop

The event loop continuously checks whether the Call Stack is empty and, when it is, moves eligible asynchronous callbacks from the queues into the Call Stack for execution.

14. One Complete Example
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

function test() {
    console.log("D");
}

test();

console.log("E");
Output
A
D
E
C
B
Why?
1. Global Execution Context created
             ↓
2. console.log("A")
             ↓
3. setTimeout → Task Queue later
             ↓
4. Promise.then → Microtask Queue later
             ↓
5. test() → Function Execution Context
             ↓
6. console.log("D")
             ↓
7. test() context removed
             ↓
8. console.log("E")
             ↓
9. Global synchronous code finishes
             ↓
10. Microtask Queue
             ↓
11. "C"
             ↓
12. Task Queue
             ↓
13. "B"

So the core mental model is:

          EXECUTION CONTEXT
                 ↓
            CALL STACK
                 ↓
       ┌─────────┴─────────┐
       ↓                   ↓
   Sync code          Async operation
                           ↓
                       Web APIs
                           ↓
                 ┌─────────┴─────────┐
                 ↓                   ↓
          Microtask Queue       Task Queue
                 │                   │
                 └─────────┬─────────┘
                           ↓
                      EVENT LOOP
                           ↓
                      CALL STACK

For interviews, remember:
Execution Context tells you where code runs. Call Stack tells you what is running. Event Loop tells you when asynchronous callbacks get a chance to run.