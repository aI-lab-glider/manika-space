import { Cloudiness, Weather } from "./weather";
import { Wind } from "./wind";
import "p5";
import { Vector2D } from "../utils/vector";
import { Precipitation } from "./precipitation";
import { Environemnt } from "../environment/environment";

export class WeatherProvider {
  private windDirection: Vector2D = new Vector2D(1, 0);

  private calculateWindStrenght() {
    return abs(sin(frameCount));
  }

  private getCloudiness() {
    return [
      Cloudiness.No,
      Cloudiness.Light,
      Cloudiness.Middle,
      Cloudiness.Strong
    ][Math.floor(frameCount / 50) % Object.keys(Cloudiness).length];
  }

  private getVisibility() {
    return random(0, Environemnt.worldSizeX);
  }

  private getTemperature() {
    return random(-30, 30);
  }
  public getCurrentWeather(): Weather {
    return new Weather(
      new Wind(this.windDirection, this.calculateWindStrenght()),
      new Precipitation(random(0, 10)),
      this.getCloudiness(),
      this.getVisibility(),
      this.getTemperature()
    );
  }
}
