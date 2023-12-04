const validateValue = require('./validateValue')

test('validate value', () => {
  expect(validateValue(50)).toBe(true)
})

describe('validate value', () => {
  test('Correct value', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Value less than 0', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('Value more than 100', () => {
    expect(validateValue(101)).toBe(false)
  })
  test('Limit value from above', () => {
    expect(validateValue(100)).toBe(true)
  })
  test('Limit value from below', () => {
    expect(validateValue(0)).toBe(true)
  })
})
