import { Precipitation } from "./precipitation";
import { Wind } from "./wind";

export enum Cloudiness {
  Strong,
  Middle,
  Light,
  No
}

export class Weather {
  constructor(
    public wind: Wind,
    public precipitation: Precipitation,
    public cloudiness: Cloudiness,
    public visibility: number,
    public temperature: number
  ) {}
}
