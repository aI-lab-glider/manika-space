import { Cloud } from "./cloud";
import { Cloudiness, Weather } from "../weather/weather";
import { Environemnt } from "./environment";
import { drawGradient } from "../utils/gradient";
import "p5";

export class Sky {
  private clouds: Cloud[];

  constructor(public height: number) {
    this.clouds = [];
  }
  /**
   * Updates environments state
   */
  public update(currentWeather: Weather) {
    this.updateCloudiness(currentWeather.cloudiness);
    this.clouds.forEach((cloud) => {
      cloud.update(currentWeather.wind, currentWeather.precipitation);
    });
  }

  private updateCloudiness(cloudiness: Cloudiness) {
    let cloudsNumber = {
      [Cloudiness.Light]: 1,
      [Cloudiness.Middle]: 3,
      [Cloudiness.Strong]: 5,
      [Cloudiness.No]: 0
    }[cloudiness];

    if (this.clouds.length > cloudsNumber) {
      this.removeClouds(this.clouds.length - cloudsNumber);
    } else {
      this.addClouds(cloudsNumber - this.clouds.length);
    }
  }

  private removeClouds(count: number) {
    for (let i = 0; i < count; ++i) {
      this.clouds.pop();
    }
  }

  private addClouds(count: number) {
    for (let i = 0; i < count; ++i) {
      const [width, height] = Environemnt.worldSize;
      this.clouds.push(
        new Cloud(-random(width / 2, width), random(0, 0.1 * height))
      );
    }
  }

  public draw() {
    noStroke();
    drawGradient(
      0,
      0,
      Environemnt.worldSizeX,
      this.height,
      color(7, 71, 245),
      color(65, 112, 240)
    );

    this.clouds.forEach((cloud) => cloud.draw());
  }
}
