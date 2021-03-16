const getGCDEuclidian = require("./euclidian");
const createExtendedEuclidian = require("./extended-euclidian");
const createConguonce = require("./congruonce");

const main = () => {
  const extendedEuclidian = createExtendedEuclidian(getGCDEuclidian);
  const conguonce = createConguonce(extendedEuclidian);

  console.log("Q1: Find Greatest common divisor of a and b (gcd(a,b)) if:");

  console.log("i) a = 5487967 and b = 3880");
  getGCDEuclidian(5487967, 3880);
  console.log("--------");
  console.log("ii) a = 4960 and b = 388077");
  getGCDEuclidian(4960, 3880);
  console.log("--------");
  console.log("iii) a = 4960 and b = 3880");
  getGCDEuclidian(4960, 3880);
  console.log("--------");

  console.log("////////////////////////////");

  console.log("Q2: Find the inverse of:");

  console.log("i) 111 mod 11111");
  extendedEuclidian(111, 11111);
  console.log("--------");
  console.log("ii) 19 mod 7539");
  extendedEuclidian(19, 7539);
  console.log("--------");
  console.log("iii) 229 mod 69713");
  extendedEuclidian(229, 69713);
  console.log("--------");

  console.log("////////////////////////////");

  console.log("Q3: Solve the following linear congruence equations (find X):");
  console.log("i) 5 X = 7 mod 26");
  conguonce(5, 7, 26);
  console.log("--------");
  console.log("ii) 4960 X = 717 mod 388077");
  conguonce(4960, 717, 388077);
  console.log("--------");
  console.log("iii) 87 X = 19 mod 307");
  conguonce(87, 19, 307);
  console.log("--------");
  console.log("iv) 111 X = 17 mod 11111");
  conguonce(111, 17, 11111);
  console.log("--------");

  console.log("////////////////////////////");
};

main();
