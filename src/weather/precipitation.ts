export class Precipitation {
  constructor(public value: number) {}

  public isPresent() {
    return this.value !== 0;
  }
}
