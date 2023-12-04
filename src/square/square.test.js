const square = require('./square')

describe('square', () => {
  let mockValue
  //before each test
  beforeEach(() => {
    mockValue = Math.random()
    //add user to bd
  })
  //before all tests
  beforeAll(() => {})
  test('Correct value', () => {
    expect(square(2)).toBe(4)
    expect(square(2)).toBeLessThan(5)
    expect(square(2)).toBeGreaterThan(3)
    expect(square(2)).not.toBeUndefined()
  })

  //after each test
  afterEach(() => {
    //delete user from bd
  })
  //after all tests
  afterAll(() => {})
})
