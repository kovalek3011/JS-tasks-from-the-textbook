// Проверка значения вне диапазона

let age = prompt("напиши свой возраст", "");
!(age >= 14 && age <= 90) ? alert("вне диапазона") : alert("в диапазоне"); // 1 способ
// age < 14 || age > 90 ? alert("вне диапазона") : alert("в диапазоне"); // 2 способ
