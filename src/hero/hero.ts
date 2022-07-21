import { Vector2D } from "../utils/vector";
import { Weather } from "../weather/weather";
import "p5";
import { Environemnt } from "../environment/environment";
import { Obstacle } from "../obstacle/obstacle";


export class Hero {
  private sprite;
  public position: Vector2D;
  public width = 70;
  public height = 96;
  private moving = 30;
  private initialY: number;

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

  private isJumping: boolean

  public jump(speed: Vector2D) {
    //if (this.position.y > Environemnt.worldSizeY - 300) {
    this.position.y += speed.y
    //} 
    //else if (this.position.y < Environemnt.worldSizeY - 300 && this.position.y > Environemnt.worldSizeY * 0.8)

    // else if (this.position.y = Environemnt.worldSizeY - 299) {
    //   this.position.y += Environemnt.gravity.y;
    // // } else if (this.position.y <= Environemnt.worldSizeY * 0.9 + this.height) {
    // //   this.position.y += speed.y
    // // }
    // } 

    // else if (this.isJumping === false || this.position.y > Environemnt.worldSizeY * 0.8) {
    //   this.position.y += Environemnt.gravity
    // }
  }

  public pickUp() { }

  public update(weather: Weather) {
    const speed = this.handleKeyDown();
    // this.move(speed);
    return speed;
  }

  public handleKeyDown() {
    let speed = new Vector2D(0, 0);
    if (keyIsDown(LEFT_ARROW)) {
      speed = speed.add(new Vector2D(-this.moving, 0));
    }
    if (keyIsDown(RIGHT_ARROW)) {
      speed = speed.add(new Vector2D(this.moving, 0));
    }
    if (keyIsDown(UP_ARROW)) {
      this.isJumping = true
    }

    if (this.isJumping && this.position.y > Environemnt.worldSizeY - 300) {
      speed = speed.add(new Vector2D(2, -this.moving));
    } else {
      this.isJumping = false
    }

    if (this.isJumping === false && this.position.y < this.initialY) {
      speed = speed.add(new Vector2D(2, this.moving))
    }

    return speed;
  }

  animate() {
    this.sprite.animation.play();
  }

  public show() {
    this.sprite.position()
  }
}