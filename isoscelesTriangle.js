function isoscelesTriangle(sideA, sideB, sideC) {
    if (
      (sideA === sideB) && sideB !== sideC ||
      (sideA === sideC) && sideC !== sideB ||
      (sideB === sideC) && sideC !== sideA
    ) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = isoscelesTriangle