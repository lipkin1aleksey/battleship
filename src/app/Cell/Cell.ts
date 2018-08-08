import { CellStatus } from './CellStatus';

export class Cell {
  private x: number;
  private y: number;
  public status: CellStatus;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.status = CellStatus.default;
  }
  onChangeStatus(newStatus: string): void {
    
  }
}
