import { Vector2D } from "../utils/vector";
import { Weather } from "../weather/weather";
import "p5";
import { Environemnt } from "../environment/environment";

export class Hero {
  //private sprite;
  public position: Vector2D;
  private width = 5;
  private height = 10;

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
  }

  public move(speed: Vector2D) {
    this.position = this.position.add(speed);
    if (this.position.x > Environemnt.worldSizeX) {
      this.position.x = 0;
    }
    if (this.position.x < 0) {
      this.position.x = Environemnt.worldSizeX;
    }
  }

  public getVerticies() {
    return [
      [this.position.x, this.position.y],
      [this.position.x + this.width, this.position.y],
      [this.position.x, this.position.y + this.height],
      [this.position.x + this.width, this.position.y + this.height],
    ];
  }

  public jump() {}

  public pickUp() {}

  public update(weather: Weather) {
    const speed = this.handleKeyDown();
    // this.move(speed);
    return speed;
  }

  public handleKeyDown() {
    let moving = 7;
    if (keyIsDown(LEFT_ARROW)) {
      return new Vector2D(-moving, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      return new Vector2D(moving, 0);
    }
    // if (keyIsDown(UP_ARROW)) {
    //   return new Vector2D(0, -moving);
    // }
    // if (keyIsDown(DOWN_ARROW)) {
    //   return new Vector2D(0, moving);
    // }
    return new Vector2D(0, 0);
  }

  // animate() {
  //   this.sprite.animation.play();
  // }

  public draw() {
    stroke("blue");
    fill("blue");
    rect(this.position.x, this.position.y, this.width, this.height);
  }
}
