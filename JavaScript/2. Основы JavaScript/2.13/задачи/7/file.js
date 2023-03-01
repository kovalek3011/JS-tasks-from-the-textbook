// Вывести простые числа

let num = +prompt("Введи интервал", 10);
isPrime: for (let i = 2; i <= num; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue isPrime;
  }
  alert(i);
}
