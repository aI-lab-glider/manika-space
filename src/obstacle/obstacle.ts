import { Vector2D } from "../utils/vector";

export class Obstacle {
  public position: Vector2D;

  constructor(
    x: number,
    y: number,
    public sizeX: number,
    public sizeY: number
  ) {
    this.position = new Vector2D(x, y);
  }

  draw() {
    stroke("black");
    fill(230);
    rect(this.position.x, this.position.y, this.sizeX, this.sizeY);
  }

  update(speed: Vector2D) {
    this.position.x -= 25 + speed.x;
  }

  isCollision(hero, obstacle) {
    const vs = hero.getVerticies();
    return vs.some((v) => {
      const [x, y] = v;
      const isInXs =
        x > obstacle.position.x && x < obstacle.position.x + obstacle.sizeX;
      const isInYs =
        y > obstacle.position.y && y < obstacle.position.y + obstacle.sizeY;
      return isInXs && isInYs;
    });
  }
}
