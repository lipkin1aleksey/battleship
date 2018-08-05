//this is the main class in the game that determines all methods for define status, winner and so on
export class Game {

  status: string;
  player1Name: string;
  player2Name: string;
  winner: string;

  constructor() {
    //default status is none
    this.status = 'none'
    this.player1Name = 'player1';
    this.player2Name = 'player2';
    this.winner = null;
  }
  changeStatus(newStatus) {
    this.status = newStatus;
  }
}
