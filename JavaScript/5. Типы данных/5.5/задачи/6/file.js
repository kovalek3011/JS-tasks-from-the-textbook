/* Создать расширяемый калькулятор
важность: 5
Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» 
(разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

Пример использования: 

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

Например, давайте добавим умножение *, деление / и возведение в степень **:

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок. */

function Calculator(str) {
  this.cal = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let arr = str.split(" ");
    let result =
      arr[1] in this.cal
        ? this.cal[arr[1]](+arr[0], +arr[2])
        : "Неизвестный знак";
    console.log(result);
    return result;
  };

  this.addMethod = function (name, func) {
    this.cal[name] = func;
  };
  console.log(this.cal);
}

let calc = new Calculator();
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
alert(
  powerCalc.calculate(
    prompt(
      "Введите через пробел первое число, операцию которую хотите произвести и второе число",
      ""
    )
  )
);
