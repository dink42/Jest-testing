const { default: expect } = require('expect')
const cloneArray = require('./cloneArray')

test('properly clone array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toStrictEqual(array)
})