const isoscelesTriangle = require('./isoscelesTriangle');
const Istriangle = require('./Istriangle');
const equilateralTriangle = require('./equilateralTriangle');
const rightTriangle = require('./rightTriangle');



  let sideOne = +prompt('введите длину первой стороны');
  let sideTwo = +prompt('введите длину второй стороны');
  let sideThree = +prompt('введите длину третьей стороны');
  console.log(isoscelesTriangle(sideOne, sideTwo, sideThree));
  console.log(Istriangle(sideOne, sideTwo, sideThree));
  console.log(equilateralTriangle(sideOne, sideTwo, sideThree));
  console.log(rightTriangle(sideOne, sideTwo, sideThree));