//this is the main class in the game that determines all methods for define status, winner and so on
export class Game {

  public status: string;
  public player1Name: string;
  public player2Name: string;
  private winner: string;
  public isGameVsComputer: Boolean;

  constructor() {
    //default status is none
    this.status = 'none'
    this.player1Name = 'player1';
    this.player2Name = 'player2';
    this.isGameVsComputer = false;
    this.winner = null;
  }
  changeStatus(newStatus: string): void {
    this.status = newStatus;
  }
  changeType(type: string): void {
    //this method defines what type of game will be
  }
}
