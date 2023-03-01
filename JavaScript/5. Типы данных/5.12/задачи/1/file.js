/*Преобразуйте объект в JSON, а затем обратно в обычный объект

Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.
*/

let user = {
  name: "Василий Иванович",
  age: 35,
};

let json = JSON.stringify(user);
let newUser = JSON.parse(json);

console.log(json);
console.log(newUser);
alert(newUser);
alert(json);
