1. Debouncing

Definition:
Debouncing delays the execution of a function until a certain amount of time has passed since the last event.

Think of it as:

"Wait until the user stops doing something."
Example

=> Suppose you're searching as a user types.

=> Without debouncing:

User types: H E L L O

API calls:
H
HE
HEL
HELL
HELLO

With a 500ms debounce:

User types: H E L L O
(wait 500ms)

API call:
HELLO

=> Only one request is sent after the user stops typing.


2. Throttling

Definition:
Throttling ensures a function runs at most once every specified time interval, no matter how many events occur.

Think of it as:

"Run at regular intervals."

Example

=> Suppose a scroll event fires 100 times in one second.

Without throttling:

100 function calls

With a 200ms throttle:

0ms   → Call
200ms → Call
400ms → Call
600ms → Call
800ms → Call
1000ms → Call

Only about 5–6 calls occur.
