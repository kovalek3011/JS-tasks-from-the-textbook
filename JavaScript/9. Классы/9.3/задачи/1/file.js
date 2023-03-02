/*
Класс расширяет объект?
важность: 3
Как мы уже знаем, все объекты наследуют от Object.prototype и имеют доступ к «общим» методам объекта, например hasOwnProperty.


 class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true
Но что если мы явно напишем "class Rabbit extends Object" – тогда результат будет отличаться от обычного "class Rabbit"?
В чем разница?
Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
*/

class Rabbit extends Object {
  constructor(name) {
    super(); // нужно вызвать родительский конструктор
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert(rabbit.hasOwnProperty("name"));
