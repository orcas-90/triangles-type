function rightTriangle(sideA, sideB, sideC) {
    if (
      sideA * sideA === sideB * sideB + sideC * sideC ||
      sideB * sideB === sideA * sideA + sideC * sideC ||
      sideC * sideC === sideB * sideB + sideA * sideA
    ) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = rightTriangle