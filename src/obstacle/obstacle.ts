import { Vector2D } from "../utils/vector";

export class Obstacle {
  public position: Vector2D;

  constructor(
    x: number,
    y: number,
    public sizeX: number,
    private sizeY: number
  ) {
    this.position = new Vector2D(x, y);
  }

  draw() {
    stroke("blue");
    fill(230);
    rect(this.position.x, this.position.y, this.sizeX, this.sizeY);
  }

  update(speed: Vector2D) {
    this.position.x -= speed.x;
  }
}
