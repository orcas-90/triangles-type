function equilateralTriangle(sideA, sideB, sideC) {
    if (sideA === sideB && sideB === sideC) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = equilateralTriangle