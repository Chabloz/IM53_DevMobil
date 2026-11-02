import { moduloEuclidian } from '../lib/math.js';

export default class Matrix2D {

  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.matrix = [];
    for (let row = 0; row < rows; row++) {
      const row = [];
      for (let col = 0; col < cols; col++) {
        row.push(0);
      }
      this.matrix.push(row);
    }
  }

  set(row, col, val) {
    this.matrix[row][col] = val;
  }

  get(row, col) {
    return this.matrix[row][col];
  }

  isValidIndex(row, col) {
    return row>=0 && row < this.rows && col >= 0 && col < this.cols;
  }

  getNeighborhoodIndexes(row, col) {
    const indexes = [];
    for (let dRow = -1; dRow <= 1; dRow++) {
      for (let dCol = -1; dCol <= 1; dCol++) {
        if (dRow == 0 && dCol === 0) continue;
        indexes.push([row + dRow, col + dCol]);
      }
    }

    return indexes.filter(([row, col]) => this.isValidIndex(row, col));
  }

  getNeighborhoodFlatTorusIndexes(row, col) {
    const indexes = [];
    for (let dRow = -1; dRow <= 1; dRow++) {
      for (let dCol = -1; dCol <= 1; dCol++) {
        if (dRow == 0 && dCol === 0) continue;
        indexes.push([
          moduloEuclidian(row + dRow, this.rows),
          moduloEuclidian(col + dCol, this.cols)
        ]);
      }
    }
    return indexes;
  }

  count(indexes, val) {
    let count = 0;
    for (const [row, col] of indexes) {
      if (this.get(row, col) === val) {
        count++
      }
    }
    return count;
  }

}