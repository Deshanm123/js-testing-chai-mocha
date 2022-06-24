const assert = require('chai').assert;
const Robot = require('../app');


describe('Field test for Killer Robot', () => {
  // sample tests
  // let num=6;

  // it('check that num is numeric',()=>{
  //   assert.isNumber(num)
  // })
  // // it('check that num is not a numeric',()=>{
  // //   assert.isNotNumber(num)
  // // })

  // let randomString = "random string";
  // it('check that input is string',()=>{
  //   assert.isString(randomString);
  // })
  // it('check input is boolean',()=>{
  //   assert.isBoolean(randomString);
  // })

  let robot = Robot;
  // skipping the test using =>it.skip
  it.skip(`check that robot talks in String `, () => {
    assert.isString(robot.talk(), 'string')
  })

  it.skip('check that robot uses allowed phrases', () => {
    let phrase = robot.talk();
    assert.oneOf(phrase, robot.phrases)
  })

  it.skip('check robot use allowed phrases', () => {
    for (let i = 0; i < 8; i++) {
      let talkPhrase = robot.talk();
      assert.oneOf(talkPhrase, robot.phrases)
    }
  })

  it("make sure robot has ammo to fire", () => {
    for (let i = 0; i < 5; i++) {
      robot.fireCannon();
      assert.isAtLeast(robot.ammo, 0)
    }
  })


})