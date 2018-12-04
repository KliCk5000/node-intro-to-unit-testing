// Import Chai, and declare expect variable
const expect = require("chai").expect;

// Import fizzBuzzer
const fizzBuzzer = require("../fizzBuzzer.js");

describe("fizzBuzzer", function() {
  // test the normal case
  it("should output fizz/buzz/fizz-buzz depending on input", function() {
    // normal inputs
    const normalCases = [
      { num: 15, expected: "fizz-buzz" },
      { num: 5, expected: "buzz" },
      { num: 3, expected: "fizz" },
      { num: 4, expected: 4 }
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.num);
      expect(answer).to.equal(input.expected);
    });
  });

  it("should raise error if input isnt numbers", function() {
    // range of bad inputs
    const badInputs = ["dog", false];
    // prove that an error is raised
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

  it('should return "fizz-buzz" for multiples of 15', function() {
    [15, 30, 45].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal("fizz-buzz");
    });
  });

  it('should return "fizz" for multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal("fizz");
    });
  });

  it('should return "buzz" for multiples of 5', function() {
    [5, 10, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal("buzz");
    });
  });

  it("should return number if not mult of 3 or 5", function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it("should produce error if input isn't number", function() {
    const badInputs = [true, false, "cat", function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
