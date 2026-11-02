import Matrix2D from "./class/Matrix2D.js";

const m1 = new Matrix2D(3,4);
// console.log(m1.matrix);
// console.log(m1.getNeighborhoodIndexes(1,1));
console.log(m1.getNeighborhoodIndexes(0, 3));
console.log(m1.getNeighborhoodFlatTorusIndexes(0, 3));

const neighbors = m1.getNeighborhoodIndexes(1, 1);
m1.set(0, 0, 1);
console.log(m1.count(neighbors, 1));

// console.log(m1.isValidIndex(0,0))
// console.log(m1.isValidIndex(3,3));