const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher, playerArcherImage;
var baseimage;
var angle = 90

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
  playerArcherImage = loadImage("./assets/playerArcher.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options ={
    isStatic: true
  }

  playerBase = Bodies.rectangle(160,350,150,300,options)
  World.add(world,playerBase);

  player = Bodies.rectangle(180,210,90,180,options)
  World.add(world,player);
}

function draw() {
  background(backgroundImg);

  image(playerimage,player.position.x,player.position.y,90,180);
  image(baseimage,playerBase.position.x,playerBase.position.y,150,300);
  


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
