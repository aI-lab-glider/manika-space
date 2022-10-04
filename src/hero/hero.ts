import { Vector2D } from "../utils/vector";
import { Weather } from "../weather/weather";
import "p5";
import { Environemnt } from "../environment/environment";

export class Hero {
  private sprite;
  public position: Vector2D;
  public width = 88;
  public height = 122;
  private moving = 50;
  private initialY = Environemnt.worldSizeY * 0.65;
  public score: number = 0;


  public updateScore(speed: Vector2D){
    this.score += speed.x;
  }

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
    this.initialY = y;
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

  private isJumping: boolean;

  public jump(speed: Vector2D) {
    this.position.y += speed.y;
  }

  public pickUp() {}

  public update(weather: Weather) {
    const speed = this.handleKeyDown();
    return speed;
  }

  public handleKeyDown() {
    let speed = new Vector2D(0, 0);
    // if (keyIsDown(LEFT_ARROW)) {
    //   speed = speed.add(new Vector2D(-this.moving, 0));
    // }
    // if (keyIsDown(RIGHT_ARROW)) {
    //   speed = speed.add(new Vector2D(this.moving, 0));
    // }
    if (keyIsDown(UP_ARROW) && this.position.y >= this.initialY) {
      this.isJumping = true;
    }
    if (this.isJumping && this.position.y > Environemnt.worldSizeY - 380) {
      speed = speed.add(new Vector2D(25, -this.moving));
    } else {
      this.isJumping = false;
    }
    if (this.isJumping === false && this.position.y < this.initialY) {
      speed = speed.add(new Vector2D(25, this.moving + Environemnt.gravity.y));
    }

    return speed;
  }

  animate() {
    this.sprite.animation.play();
  }

  public show() {
    this.sprite.position();
  }
}
