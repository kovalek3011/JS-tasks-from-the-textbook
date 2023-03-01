// Умножаем все числовые свойства на 2

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      menu[key] *= 2;
    }
  }
}

multiplyNumeric(menu);

for (let key in menu) {
  alert(menu[key]);
}
// Проверка
