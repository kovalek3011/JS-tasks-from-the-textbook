// Повторять цикл, пока ввод неверен

let num;
num100: while (true) {
  num = +prompt("Введите число больше 100", "");
  if (num > 100 || !num) {
    alert("отлично");
    break num100;
  } else {
    continue;
  }
}
