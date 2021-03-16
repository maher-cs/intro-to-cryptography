/* This method accepts two numbers as inputs and return the GCD
 * of them using Euclidian Algorithm
 */
const getGCDEuclidian = (number1, number2) => {
  let steps = [];
  let gcd = number1;
  let remainder = number2;

  while (remainder > 0) {
    let tempGCD = gcd;
    gcd = remainder;
    remainder = tempGCD % remainder;
    const currentStep = { x1: tempGCD, x2: gcd, x3: ~~(tempGCD / gcd), x4: remainder };
    steps.push(currentStep);
    const { x1, x2, x3, x4 } = currentStep;
    console.log(`${x1} = ${x2} (${x3}) + ${x4}`);
  }

  return { gcd, steps };
};

module.exports = getGCDEuclidian;
