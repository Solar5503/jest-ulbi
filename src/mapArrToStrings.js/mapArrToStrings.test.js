const mapArrToStrings = require('./mapArrToStrings')

describe('mapArrToStrings', () => {
  test('Correct value', () => {
    expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Mix value', () => {
    expect(mapArrToStrings([1, 2, null, undefined, '', true, 3])).toEqual([
      '1',
      '2',
      '3',
    ])
  })
  test('Empty value', () => {
    expect(mapArrToStrings([])).toEqual([])
  })
  test('Negative', () => {
    expect(mapArrToStrings([1, 2, 3])).not.toEqual([1, 2, 3, 4])
  })
})
