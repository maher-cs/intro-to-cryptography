/* This function recieves an euclidian implementation
 * and returns a function that accepts a, b
 * and reutrns s, t, gcd
 * where gcd = as + bt
 * using Extended Euclidian Algorithm
 * and prints the steps
 */
const createExtendedEuclidian = (euclidian) => (number1, number2) => {
  const { gcd, steps } = euclidian(number1, number2);

  console.log(`\ngcd = ${gcd}\n`);

  if (gcd !== 1) {
    console.log("gcd != 1 => no solution");
    return null;
  }

  let s = 1;
  let t = -steps[steps.length - 2].x3;
  for (let i = steps.length - 2; i > 0; i--) {
    const p = steps[i];
    const p2 = steps[i - 1];
    console.log(`${gcd} = ${p.x1} (${s}) + ${p.x2} (${t})`);
    console.log(`${gcd} = ${p.x1} (${s}) + (${`${p2.x1} + ${p2.x2} (${-p2.x3})`}) (${t})`);
    console.log(`${gcd} = ${p.x1} (${s}) + ${p2.x1} (${t}) + ${p2.x2} (${-p2.x3 * t})`);
    const tempT = t;
    t = s + -p2.x3 * t;
    s = tempT;
  }
  const inverse = (s + number2) % number2;
  console.log(`\ninverse = ${inverse}`);
  console.log(`\n${number1} × ${inverse} mod ${number2} = ${(number1 * inverse) % number2} mod ${number2}`);

  return { gcd, s, t, inverse };
};

module.exports = createExtendedEuclidian;
