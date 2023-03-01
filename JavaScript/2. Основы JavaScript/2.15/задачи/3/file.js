// Функция min(a, b)

function min(a, b) {
  return a < b ? a : b;
}

alert(
  min(
    (a = +prompt("введи первую цифру")),
    (b = +prompt("введи вторую цифру"))
  )
);
