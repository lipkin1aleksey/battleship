import { Cell } from "../Cell/Cell";

export class Field {
  private fieldSize: number = 10;
  shoots: Array<Array<Cell>>;

  // init all cells in default state
  constructor() {
    this.init();
  }
  private init(): void {
    let shoots: Array<Array<Cell>> = [];

    for (let i = 0; i < this.fieldSize; i++) {
      shoots[i] = [];
      for (let j = 0; j < this.fieldSize; j++) {
        shoots[i][j] = new Cell(i, j);
      }
    }
    this.shoots = shoots;
  }
}
