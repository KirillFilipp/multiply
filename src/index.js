module.exports = function multiply(first, second) {
  let firstNum = BigInt(first);
  let secondNum = BigInt(second);
  let result = BigInt(firstNum*secondNum);
  return result.toString();
}
