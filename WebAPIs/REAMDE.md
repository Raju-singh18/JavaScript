Browser Web APIs

=> Browser Web APIs are built-in features provided by the web browser that allow JavaScript to interact with the browser, webpage, user, and device.

=> JavaScript itself is the language, while the browser provides additional APIs such as DOM, fetch(), localStorage, timers, etc.


<!--! Clipboard API in JavaScript -->

The Clipboard API is a Browser Web API that allows JavaScript to copy data to and read data from the user's system clipboard.

Common use cases:

Copying text with a button
Copying links
Reading clipboard content
"Copy to clipboard" buttons in code editors
Sharing generated text
Basic syntax

Copy text:

navigator.clipboard.writeText("Hello World!");

Read text:

navigator.clipboard.readText();