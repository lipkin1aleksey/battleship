import { ShipType } from "./ShipType";

export class Ship {
  //ship type (oneDeck, etc)
  private type: ShipType;
  //shipe size and lifes depending on type
  private size: number;
  public lifes: number;
  //ship coords in the field
  public coordinates: {};
  //isDead determines if the ship is destroyed or not
  public isDead: boolean;
  //when you init Ship define characteristics
  constructor(type: ShipType = null) {
    this.type = type;
    switch (this.type) {
      case 1: {
        this.size = 2;
        break;
      }
      case 2: {
        this.size = 3;
        break;
      }
      case 3: {
        this.size = 3;
        break;
      }
      case 4: {
        this.size = 4;
        break;
      }
    }
    this.size = type;
    this.lifes = type;
    this.isDead = false;

  }
  //define ship reaction on hit
  onHit() {
    this.lifes = this.lifes - 1;
    if (this.lifes === 0) {
      this.isDead = true;
      //needs to return some event or function for outside classes when ship is destroyed
    }
  }
  onChangePosition() {
    // this method determine coords of the ship
  }
}