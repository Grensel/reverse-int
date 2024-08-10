module.exports = function reverse (n) {
  const positiveNumber = Math.abs(n);
  const arrayOfNumber = Array.from(String(positiveNumber));
  const arrayRevers = arrayOfNumber.reverse();
  const arraySum = +arrayRevers.join('');
  return arraySum;
}