// describe("pow", function() {

//     it("возводит в степень n", function() {
//       assert.equal(pow(2, 3), 8);
//     });

//   });

// describe("pow", function () {
//   it("2 в степени 3 будет 8", function () {
//     assert.equal(pow(2, 3), 8);
//   });

//   it("3 в степени 3 будет 27", function () {
//     assert.equal(pow(3, 3), 27);
//   });
// });

// describe("pow", function () {
//   function makeTest(x) {
//     let expected = x ** 3;
//     it(`${x} в степени 3 будет ${expected}`, function () {
//       assert.equal(pow(x, 3), expected);
//     });
//   }

//   for (let x = 1; x <= 11; x++) {
//     makeTest(x);
//   }
// });

describe("pow", function () {
  describe("возводит x в степень 3", function () {
    function makeTest(x) {
      let expected = x ** 3;
      it(`${x} в степени 3 будет ${expected}`, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  describe("возводит x в степень 3", function () {
    function makeTest(x) {
      let expected = x ** 4;
      it(`${x} в степени 4 будет ${expected}`, function () {
        assert.equal(pow(x, 4), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
  it("для отрицательных n возвращает NaN", function () {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function () {
    assert.isNaN(pow(2, 1.5));
  });
});
