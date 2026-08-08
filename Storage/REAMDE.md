
# LocalStorage in JavaScript

## What is LocalStorage?

`localStorage` is a Web Storage API provided by the browser that allows JavaScript to store data in the user's browser.

The data stored in `localStorage`:

- Persists after page refresh.
- Persists even after closing and reopening the browser.
- Is stored as key-value pairs.
- Is specific to the website's origin.
- Can be accessed using JavaScript.
- Stores values as strings.

---

# Why Use LocalStorage?

LocalStorage is useful when an application needs to remember data between visits.

### Common Use Cases

- Saving user preferences.
- Saving dark/light theme settings.
- Storing shopping cart data.
- Saving game high scores.
- Remembering form-related preferences.
- Persisting small amounts of application state.

---

# How LocalStorage Works

LocalStorage stores data in the following form:

```text
Key → Value

username → Raju
theme    → dark
score    → 20

# Session Storage

## What is Session Storage?

`sessionStorage` is a Web Storage API provided by the browser that allows JavaScript to store data as **key-value pairs**.

The stored data is associated with a particular browsing session.

The data:

- Survives page refreshes.
- Is available while the browsing context remains open.
- Is normally removed when the associated tab/window is closed.
- Is stored as strings.
- Is accessible using JavaScript.

### Simple Definition

> `sessionStorage` is temporary browser storage used to store data for the lifetime of a browsing session.

---

# How Session Storage Works

```text
JavaScript
     |
     | setItem()
     ↓
sessionStorage
     |
     | Page Refresh
     ↓
Data remains
     |
     | Tab Closed
     ↓
Data normally removed


# Cookies in JavaScript

## What is a Cookie?

A **cookie** is a small piece of data stored by the browser on behalf of a website.

Cookies are mainly used for:

- Authentication
- Session management
- User preferences
- Remembering user settings
- Tracking
- Maintaining state between HTTP requests

Unlike `localStorage` and `sessionStorage`, cookies can be **automatically sent to the server with matching HTTP requests**.

---

# Simple Definition

> A cookie is a small piece of data stored in the browser that can be sent automatically with applicable HTTP requests to the server.

---

# How Cookies Work

The basic flow is:

```text
Browser
   |
   | HTTP Request
   ↓
Server
   |
   | Set-Cookie
   ↓
Browser
   |
   ↓
Cookie Stored
   |
   | Future matching HTTP Request
   ↓
Server