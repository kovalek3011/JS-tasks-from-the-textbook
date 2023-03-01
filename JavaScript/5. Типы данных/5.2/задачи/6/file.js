// Случайное целое число от min до max

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(randomInteger(1, 5)); // 1
alert(randomInteger(1, 5)); // 3
alert(randomInteger(1, 5)); // 5
