import { Vector2D } from "../utils/vector";
import { Weather } from "../weather/weather";
import "p5";
import { Environemnt } from "../environment/environment";


export class Hero {
  private sprite;
  public position: Vector2D;

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

  public jump() { }

  public pickUp() { }

  public update(weather: Weather) {
    const speed = this.handleKeyDown();
    // this.move(speed);
    return speed;
  }

  public handleKeyDown() {
    if (keyIsDown(LEFT_ARROW)) {
      return new Vector2D(-5, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      return new Vector2D(5, 0);
    }
    return new Vector2D(0, 0);
  }
  
  animate() {
    this.sprite.animation.play();
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