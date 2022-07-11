import { Environemnt } from "./environment/environment";
import { WeatherProvider } from "./weather/weatherProvider";
import { Hero } from "./hero/hero";
import p5 from "p5";

const hero = new Hero(Environemnt.worldSizeX / 2, Environemnt.worldSizeY * 0.9);
const environment = new Environemnt(hero);
const weatherProvider = new WeatherProvider();
let heroSprite: p5.Image;

function setup() {
  frameRate(10);
  heroSprite = loadImage("assets/demo.png");
  createCanvas(Environemnt.worldSizeX, Environemnt.worldSizeY);
}

function resetGame() {
  console.log("Game over");
  environment.obstacles = [];
}

function draw() {
  background(200);
  image(heroSprite, 0, 0, Environemnt.worldSizeX, Environemnt.worldSizeY);
  const currentWeather = weatherProvider.getCurrentWeather();
  environment.update(currentWeather);
  environment.draw();
  environment.obstacles.forEach((obstacle) => {
    if (obstacle.isCollision(hero, obstacle) === true) {
      resetGame();
    }
  });
}

// It will be explained later.
export { setup, draw };
