// ! ES6
let age = 18;
let result =
  age >= 18 ? "Yoou are aligible to cote" : "You are not eligible to vote";
console.log(result);

//! Real Life example
let isLogin = true;
let message = isLogin ? "Welcome back" : "please log in";
console.log(message);

//! Multiple ternary operator
let age = 20;
let result =
  age < 18
    ? "You are a minor"
    : age < 60
      ? "You are an Adult"
      : "You are a senior citizen";
console.log(result);
