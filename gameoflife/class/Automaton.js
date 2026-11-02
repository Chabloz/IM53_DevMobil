import Matrix2D from "./Matrix2D.js";

export default class Automaton {

  constructor(rows, cols) {
    this.matrix = new Matrix2D(rows, cols);
  }

  getMatrix2D() {
    return this.matrix;
  }

}