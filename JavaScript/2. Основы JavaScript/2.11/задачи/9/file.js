// Проверка логина

let login = prompt("введите логин", "");
if (login == "админ") {
  let password = prompt("Введите пароль", "");
  if (password == "Я главный") {
    alert("Здравствуйте!");
  } else if (password == null) {
    alert("отменено");
  } else {
    alert("неверный пароль");
  }
} else if (login == null) {
  alert("отменено");
} else {
  alert("я вас не знаю");
}
