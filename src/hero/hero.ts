import { Vector2D } from "../utils/vector";
import { Weather } from "../weather/weather";
import "p5";
import { Environemnt } from "../environment/environment";
import { Obstacle } from "../obstacle/obstacle";


export class Hero {
  private sprite;
  public position: Vector2D;
  private width = 5;
  private height = 10;
  private moving = 7;

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

  private isJumping: boolean

  public jump(speed: Vector2D) {
    if (this.position.y > Environemnt.worldSizeY * 0.9 - 100) {
      this.position.y += speed.y;
      if (this.position.y < Environemnt.worldSizeY * 0.9) {
        this.position.y += Environemnt.gravity.y
      }
    } 
    
    else if (this.position.y = Environemnt.worldSizeY * 0.9 - 100) {
      this.position.y += Environemnt.gravity.y;
    } else if (this.position.y <= Environemnt.worldSizeY * 0.9 + this.height) {
      this.position.y += speed.y
    }
  }

  public pickUp() {}

  public update(weather: Weather) {
    const speed = this.handleKeyDown();
    // this.move(speed);
    return speed;
  }

  public handleKeyDown() {
    if (keyIsDown(LEFT_ARROW)) {
      return new Vector2D(-this.moving, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      return new Vector2D(this.moving, 0);
    }
    // if (keyIsDown(UP_ARROW)) {
    //   return new Vector2D(0, -this.moving);
    // }
    // if (keyIsDown(DOWN_ARROW)) {
    //   return new Vector2D(0, this.moving);
    // }

    if (keyIsDown(UP_ARROW)) {
      this.isJumping = true
      //return new Vector2D(0, -this.moving);
    }

    if (this.isJumping) {
      return new Vector2D(0, -this.moving);
    }

    if (this.position.y < 300) {
      this.isJumping = false
    }

    return new Vector2D(0, 0);
  }
  
  animate() {
    this.sprite.animation.play();

  // animate() {
  //   this.sprite.animation.play();
  }

  public draw() {
    stroke("blue");
    fill("blue");
    rect(this.position.x, this.position.y, this.width, this.height);
  }

  public show() {
   this.sprite.position()
  }

//   class Sprite {
//  constructor (animation, x, y, speed) {
//   this.x = x 
//   this.y = y
//   this.len = this.animation.length;
//   this.animation = animation;
//   this.speed = speed;
//   this.index = 0
//  }
//   show() {
//     image( this.animation[this.index%this.len], this.x, this.y )
//   }
//   animate() {
//    this.animation+= this.speed;
//   }
 }