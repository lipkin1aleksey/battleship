import { Ship } from "../Ship/Ship";

export class Player {
  public name: string;
  private shipsArray: Ship[];
  private shotStatistic : {};
  constructor(name: string) {
    this.name = name;
    //each player have names and array of ships (four single-decker, three two-decker and so on)
    this.shipsArray = [];
    this.shotStatistic = {};
  }
  //each player can shoot
  onShoot() {
    // the shot goes on two coordinates, 
    // it is necessary to check whether there was already a shot at these coordinates or not
    // you must return response from field and send it to shotStatistic
  }
}
