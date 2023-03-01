// Создайте калькулятор

let calculator = {
  read() {
    a = +prompt("введите первое значение", 0);
    b = +prompt("введите второе значение", 0);
  },
  sum() {
    return a + b;
  },
  mul() {
    return a * b;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
