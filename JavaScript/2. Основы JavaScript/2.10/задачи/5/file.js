// Перепишите 'if..else' в '?'

// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let login = prompt("Кто вы?", "");
let message =
  login == "Сотрудник" ? "Привет" :
  login == "Директор" ? "Здравствуйте" : 
  login == "" ? "Нет логина": "";
alert(message);
