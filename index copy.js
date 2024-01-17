function isoscelesTriangle(sideA, sideB, sideC) {
    if (
      (sideA === sideB) && sideB !== sideC ||
      (sideA === sideC) && sideC !== sideB ||
      (sideB === sideC) && sideC !== sideA
    ) {
      return 'треугольник равнобедренный';
    } else {
      return 'не равнобедренный';
    }
  }
  function Istriangle(sideA, sideB, sideC) {
    if (
      sideA < sideB + sideC &&
      sideB < sideC + sideA &&
      sideC < sideA + sideB
    ) {
      return 'треугольник существует';
    } else {
      return 'такого треугольника не существует';
    }
  }
  function equilateralTriangle(sideA, sideB, sideC) {
    if (sideA === sideB && sideB === sideC) {
      return 'равносторонний треугольник';
    } else {
      return 'неравносторонний треугольник';
    }
  }
  function rightTriangle(sideA, sideB, sideC) {
    if (
      sideA * sideA === sideB * sideB + sideC * sideC ||
      sideB * sideB === sideA * sideA + sideC * sideC ||
      sideC * sideC === sideB * sideB + sideA * sideA
    ) {
      return 'прямоугольный треугольник';
    } else {
      return 'непрямоугольный треугольник';
    }
  }
  let sideOne = +prompt('введите длину первой стороны');
  let sideTwo = +prompt('введите длину второй стороны');
  let sideThree = +prompt('введите длину третьей стороны');
  console.log('triangle isosceles' + isoscelesTriangle(sideOne, sideTwo, sideThree));
  console.log('IsTriangle' + triangle(sideOne, sideTwo, sideThree));
  console.log('equilateralTriangle' + equilateralTriangle(sideOne, sideTwo, sideThree));
  console.log('rightTriangle' + rightTriangle(sideOne, sideTwo, sideThree));