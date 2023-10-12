const { default: expect } = require('expect');
const sum = require('./sum');

test('Propely adds two numbers', () => {
    expect(sum(1,2)).toBe(3)
})
