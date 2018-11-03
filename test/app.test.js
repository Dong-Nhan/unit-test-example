const app = require('../app.controller');
const assert = require('assert');

const expect = require('chai').expect;
const should = require('chai').should();
const sinon = require('sinon');

var myJson = {
  firstName: "Nhan",
  lastName: "Nguyen",
  age: "21",
  gender: "male"
}

//test suit
describe('App test', function () {
  //asynchronous test case, passing done callback
  it('readJsonFile() should return correct json data from file', function (done) {
    app.readJsonFile('myJsonFile.json', function (json) {
      let result = JSON.stringify(json);
      //using expect interface of Chai library
      expect(result, 'Json data should be correctly parsed').to.equal(JSON.stringify(myJson));
      done();
    })
  })

  //synchronous test case
  it('plus() should return correct sum', function () {
    let result = app.plus(3, 5);
    expect(result, 'The sum of two number should be correct').to.be.a('Number').to.equal(8);
  })

})

describe('App 2nd test', function () {
  //spy the callback
  it('Callback of readJsonFile() should be called once', function () {
    let callbackOnSpy = sinon.spy();
    app.readJsonFile('myJsonFile.json', callbackOnSpy);
    //setTimeout to wait for the callback
    setTimeout(() => {
      //using should interface of Chai library
      (callbackOnSpy.calledOnce).should.be.true;
    }, 1800);
  })
})

