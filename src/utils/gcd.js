/**
 * Find the greates common divisor between two numbers.
 *
 * @param {*} a The first number
 * @param {*} b The second number
 * @returns The greatest common divisor
 */
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

export default gcd;
