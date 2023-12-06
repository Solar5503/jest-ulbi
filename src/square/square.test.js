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
    // expect(square(2)).toBe(4)
    // expect(square(2)).toBeLessThan(5)
    // expect(square(2)).toBeGreaterThan(3)
    // expect(square(2)).not.toBeUndefined()
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2)
    expect(spyMathPow).toHaveBeenCalledTimes(1)
  })
  test('Correct value equal to 1', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(1)
    expect(spyMathPow).toHaveBeenCalledTimes(0)
  })

  //after each test
  afterEach(() => {
    jest.clearAllMocks()
    //delete user from bd
  })
  //after all tests
  afterAll(() => {})
})
