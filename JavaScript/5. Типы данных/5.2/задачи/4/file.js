// Бесконечный цикл по ошибке
let i = 0;
while (i != 10) {
  i += 0.2;
  alert(i);
}
// потому что i никогда не будет равно 10,
// тоже самое что пример 0,1 + 0,2 != 0,3,
// при сложении дробей есть погрешность
