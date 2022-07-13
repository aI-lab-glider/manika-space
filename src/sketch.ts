import { Environemnt } from "./environment/environment";
import { WeatherProvider } from "./weather/weatherProvider";
import { Hero } from "./hero/hero";
import p5 from "p5";

const hero = new Hero(Environemnt.worldSizeX / 2, Environemnt.worldSizeY * 0.8);
const environment = new Environemnt(hero);
const weatherProvider = new WeatherProvider();
let heroSprite: p5.Image;
//let hero;
let animation = [];
let spritesheet;
let spritedata;

  function preload() {
  spritedata = loadJSON('amongus/amongus.json');
  spritesheet = loadImage('amongus/amongus.png');
  }

function setup() {
  createCanvas(Environemnt.worldSizeX, Environemnt.worldSizeY);
  frameRate(10);
  heroSprite = loadImage('assets/bg.png');

  let frames = spritedata.frames;
  for ( let i = 0; i < frames.length; i++ ) {
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
    animation.push(img);
  }
   //hero = new Hero( 100,100)
}

function draw() {
  background(200);
   
  // heroSprite.show();
  // heroSprite.animate();
  debugger
  image(heroSprite, 0, 0, Environemnt.worldSizeX, Environemnt.worldSizeY);
  image(animation[frameCount % animation.length], hero.position.x, hero.position.y, 128, 143);
  const currentWeather = weatherProvider.getCurrentWeather();
  environment.update(currentWeather);
  environment.draw();
}

// It will be explained later.
export { setup, draw, preload };
