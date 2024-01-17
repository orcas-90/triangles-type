<snippet>


## Description

 defines types triangles

 ## How Use

 In your index.js file write this code:

const isoscelesTriangle = require('./node_modules/type-triangle/isoscelesTriangle');
const Istriangle = require('./node_modules/type-triangle/Istriangle');
const equilateralTriangle = require('./node_modules/type-triangle/equilateralTriangle.js');
const rightTriangle = require('./node_modules/type-triangle/rightTriangle');



/*Code for nodeJS variables look like this :*/

  require('dotenv').config();

  let sideOne = process.env.SIDEONE;
  let sideTwo = process.env.SIDETWO;
  let sideThree = process.env.SIDETHREE;
  console.log('isoscelesTriangle: ' + isoscelesTriangle(sideOne, sideTwo, sideThree));
  console.log('Istriangle: ' + Istriangle(sideOne, sideTwo, sideThree));
  console.log('equilateralTriangle: ' + equilateralTriangle(sideOne, sideTwo, sideThree));
  console.log('rightTriangle: ' + rightTriangle(sideOne, sideTwo, sideThree));

/*Code for JS variables look like this :*/

  let sideOne = your variants(for example: 6);
  let sideTwo = your variants(for example: 6);
  let sideThree = your variants(for example: 6);
  console.log('isoscelesTriangle: ' + isoscelesTriangle(sideOne, sideTwo, sideThree));
  console.log('Istriangle: ' + Istriangle(sideOne, sideTwo, sideThree));
  console.log('equilateralTriangle: ' + equilateralTriangle(sideOne, sideTwo, sideThree));
  console.log('rightTriangle: ' + rightTriangle(sideOne, sideTwo, sideThree));

## Installation
Installation command is npm i type-triangle

## License
"ISC"


</snippet>