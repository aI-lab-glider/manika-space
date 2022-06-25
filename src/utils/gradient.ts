import { Color } from "p5";
import "p5";

export function drawGradient(
  x: number,
  y: number,
  width: number,
  height: number,
  fromColor: Color,
  toColor: Color
) {
  for (let i = y; i < y + height; ++i) {
    const color = lerpColor(fromColor, toColor, i / height);
    stroke(color);
    line(x, i, x + width, i);
  }
}
