var assert = require('assert');
var expect = require('chai').expect;
var should = require('chai').should();

function plus(a, b) {
  return a + b;
}

describe("Operator Testing", function () {
  it('should return the sum of 2 numbers', () => {
    //assert.strictEqual(plus(4, 5), 9);
    plus(4, 5).should.equal(9);
    plus(3,4).should.equal(7);
  })
})

// describe('Basic Mocha String Test', function () {
//  it('should return number of charachters in a string', function () {
//         assert.equal("Hello".length, 4);
//     });
//  it('should return first charachter of the string', function () {
//         assert.equal("Hello".charAt(0), 'H');
//     });
// });

// describe(title, fn)

// describe('my suite', function () {
//   it('my test', () => {
//     // should set the timeout of this test to 1000 ms; instead will fail
//     this.timeout(1000);
//     assert.ok(true);
//   });
// });

