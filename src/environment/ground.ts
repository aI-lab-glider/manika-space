import { Weather } from "../weather/weather";
import { Environemnt } from "../environment/environment";
import "p5";

export class Ground {
  constructor(private height: number) {}
  public update(currentWeather: Weather) {
    // do nothing
  }

  // public draw() {
  //   fill("green");
  //   rect(
  //     0,
  //     Environemnt.worldSizeY - this.height,
  //     Environemnt.worldSizeX,
  //     this.height
  //   );
  // }
}
