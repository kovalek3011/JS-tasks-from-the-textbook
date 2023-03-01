// Функция pow(x,n)

function pow(x,n) {
    return x**Math.abs(n)
}

alert(
    pow(
      (x = +prompt("введи число")),
      (n = +prompt("введи степень"))
    )
  );