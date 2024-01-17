function Istriangle(sideA, sideB, sideC) {
    if (
      sideA < sideB + sideC &&
      sideB < sideC + sideA &&
      sideC < sideA + sideB
    ) {
      return true;
    } else {
      return false;
    }
  }

  module.exports = Istriangle