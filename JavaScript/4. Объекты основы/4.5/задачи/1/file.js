// Две функции - один объект

// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true
// Если да – приведите пример вашего кода.

// возможно

let user = { name: "Jhon" };

function A() {
  return user;
}
function B() {
  return user;
}

let a = new A();
let b = new B();

alert(a == b);
