export class Vector2D {
  constructor(public x, public y) {}

  public add(other: Vector2D) {
    return new Vector2D(this.x + other.x, this.y + other.y);
  }

  public mult(scalar: number) {
    return new Vector2D(this.x * scalar, this.y * scalar);
  }
}
