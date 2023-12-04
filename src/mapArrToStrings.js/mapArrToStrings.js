const mapArrToStrings = (arr) =>
  arr.filter((el) => Number.isInteger(el)).map(String)

module.exports = mapArrToStrings
