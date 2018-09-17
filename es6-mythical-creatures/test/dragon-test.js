const assert = require('chai').assert;
const Dragon = require('../exercises/dragon');

describe('Dragon', () => {

  it('should be a function', () => {
    assert.isFunction(Dragon);
  });

  it('should instantiate our good friend, Dragon',  ()=> {
    const dragon = new Dragon();
    assert.isObject(dragon);
  });

  it('should have name', () => {
    const dragon = new Dragon('Jeff');
    assert.equal(dragon.name, 'Jeff');
  });

  it('should have a rider', () => {
    const dragon = new Dragon('Saphira', 'Eragon');
    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should have a color', () => {
    const dragon = new Dragon('Saphira', 'Eragon', 'blue');
    assert.equal(dragon.color, 'blue');
  });

  it('should start off being hungry', () => {
    const dragon = new Dragon('Josh');
    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', () => {
    const dragon = new Dragon('Lady Vox');

    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);

    dragon.eat();
    assert.equal(dragon.hungry, false);
  });
});
