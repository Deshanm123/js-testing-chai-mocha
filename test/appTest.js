const assert = require('chai').assert;
const { substract } = require('../app');

const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

describe("traversy Media test", () => {

  describe("say hello", () => {

    it.skip("sayHello should return hello", () => {
      let result = app.sayHello();
      assert.equal(result, "hello");
    })


    it.skip("sayHello should  return type String", () => {
      let result = app.sayHello();
      assert.typeOf(result, 'string')
    })

  })


  describe("addNumbers", () => {
    it("addNumbers should be above 5", () => {
      let result = app.addNumbers(5, 5);
      assert.isAbove(result, 5)
    })

    it("result should be above 5", () => {
      let result = app.substract(15, 5);
      assert.isAbove(result, 5)
    })
  })

})