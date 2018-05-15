// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const adder = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizz-buzzer', function() {
  it('should raise error if arg not number', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['string'],
      [NaN],
      [false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input[0]);
      }).to.throw(Error);
    });
  });
  it('if number is divisible by 3 and 5 should return fizz-buzz', function() {
        // notable cases like negative answers
    const normalCases = [
      {a: 15, expected: 'fizz-buzz'},
      {a: 30, expected: 'fizz-buzz'},
      {a: 90, expected: 'fizz-buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('if number is divisible by 5 should return buzz', function() {
        const normalCases = [
      {a: 25, expected: 'buzz'},
      {a: 95, expected: 'buzz'},
      {a: 10, expected: 'buzz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('if number is divisible by 3 should return fizz', function() {
        const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 33, expected: 'fizz'},
      {a: 99, expected: 'fizz'}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
  it('otherwise should return number', function() {
        const normalCases = [
      {a: 11, expected: 11},
      {a: 26, expected: 26},
      {a: 2, expected: 2}
    ];
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = adder(input.a);
      expect(answer).to.equal(input.expected);
    });
  });
});


  // if (typeof num !== 'number') {
  //   throw Error('`num` must be a number');
  // }
  // if (num % 15 === 0) {
  //   return 'fizz-buzz';
  // }
  // if (num % 5 === 0) {
  //   return 'buzz';
  // }
  // if (num % 3 === 0) {
  //   return 'fizz';
  // }
  // else {
  //   return num;
  // }