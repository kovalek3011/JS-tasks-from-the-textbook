// Перепишите функцию, используя оператор '?' или '||'

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// №1
// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрешили?");
// }
// alert(checkAge((age = +prompt("введи свой возраст"))));

// №2
function checkAge(age) {
  return age > 18 || confirm("Родители разрешили?");
}
alert(checkAge((age = +prompt("введи свой возраст"))));

