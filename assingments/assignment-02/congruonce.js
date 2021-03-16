/* This function recieves an extendedEuclidian implementation
 * and returns a function that accepts a, b, n where ax = b mod n
 * returns congruonce using Extended Euclidian Algorithm
 * and prints the steps
 */
const createConguonce = (extendedEuclidian) => (a, b, n) => {
  console.log(`${a} X = ${7} mod ${n}`);
  console.log(`\nfind inverse of ${a}:\n`);
  const extendedEuclidianResults = extendedEuclidian(a, n);
  if (extendedEuclidianResults === null) {
    console.log("no solution");
    return null;
  }
  const { inverse } = extendedEuclidianResults;
  console.log(`\nX = ${b} × ${inverse} mod ${n}`);
  console.log(`X = ${(b * inverse) % n} mod ${n}`);
  const x = ((b * inverse) + n) % n;
  console.log(`check:`);
  console.log(`${a} × ${x} = ${(a * x) % n} mod ${n}`);
  console.log(b === ((a * x) % n))

  return x;
};

module.exports = createConguonce;
