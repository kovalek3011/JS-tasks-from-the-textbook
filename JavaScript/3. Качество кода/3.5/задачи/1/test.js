// Что не так с этим тестом?

// it("Возводит x в степень n", function () {
//   let x = 5;

//   let result = x;
//   assert.equal(pow(x, 1), result);

//   result *= x;
//   assert.equal(pow(x, 2), result);

//   result *= x;
//   assert.equal(pow(x, 3), result);
// });

/* тест написан одной функцией, 
если на одном из этапов условие не пройдет, 
упадет весь тест, лучше для каждого отдельного теста сделать свой it,
чтобы понять что именно работает некорректно */

describe("возводит x в степень n", function () {
  function makeTest(n) {
    let expected = 5 ** n;
    it(`5 в степени ${n} будет ${expected}`, function () {
      assert.equal(pow(5, n), expected);
    });
  }

  for (let n = 1; n <= 3; n++) {
    makeTest(n);
  }
});
