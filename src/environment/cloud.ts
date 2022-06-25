/*eslint-disable @typescript-eslint/no-use-before-define */
import { Environemnt } from "./environment";
import { Vector2D } from "../utils/vector";
import { Precipitation } from "../weather/precipitation";
import { Wind } from "../weather/wind";
import { Droplet } from "./droplet";

export class Cloud {
  public width: number;
  private position: Vector2D;
  private raindrops: Droplet[] = [];

  constructor(x: number, y: number) {
    this.position = new Vector2D(x, y);
    this.width = random(
      0.1 * Environemnt.worldSizeX,
      0.4 * Environemnt.worldSizeY
    );
  }

  public get x() {
    return this.position.x;
  }
  public get y() {
    return this.position.y;
  }

  public update(wind: Wind, precipitations: Precipitation) {
    if (precipitations.isPresent()) {
      this.addRaindrops(precipitations);
    }
    this.move(wind.direction.mult(wind.strenght));
  }

  private move(direction: Vector2D) {
    this.position = this.position.add(direction);
    this.raindrops.forEach((raindrop) => {
      raindrop.move(direction.add(Environemnt.gravity));
    });
  }

  private addRaindrops(precipitation: Precipitation) {
    for (let i = 0; i < precipitation.value; ++i) {
      const [dropX, dropY] = [
        random(this.position.x, this.position.x + this.width),
        this.position.y
      ];
      this.raindrops.push(new Droplet(dropX, dropY));
    }
  }

  draw() {
    this.raindrops.forEach((raindrop) => raindrop.draw());
    this.drawCloud();
  }

  private drawCloud() {
    noStroke();
    fill("white");
    const sideCircleRadius = this.width / 5;
    circle(this.x + sideCircleRadius, this.y, sideCircleRadius * 2);
    ellipse(
      this.x + 2.5 * sideCircleRadius,
      this.y,
      sideCircleRadius * 4,
      sideCircleRadius * 3
    );
    circle(this.x + 4 * sideCircleRadius, this.y, sideCircleRadius * 2);
  }
}
