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