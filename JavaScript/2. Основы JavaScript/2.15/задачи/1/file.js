// Обязателен ли "else"?

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

// alert(checkAge(age = +prompt("введи свой возраст")))

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // ...
  return confirm("Родители разрешили?");
}

alert(checkAge((age = +prompt("введи свой возраст"))));

// разницы нет
