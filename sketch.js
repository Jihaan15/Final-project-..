const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var engine , world;

var angle = 45;
var bg;
var ground;
var player;
var evilNinja

var mode;

function preload(){
bg = loadImage("background1.jpg")
bg1 = loadImage("background2.png")
}

function setup() {
  createCanvas(displayWidth - 30,displayHeight - 20);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(displayWidth/2,displayHeight/2  + 100,displayWidth,20);

  mode = 0;
  
  player = new Player(displayWidth/2-400,displayHeight/2 - 100,175,200)
  evilNinja = new EvilNinja(displayWidth/2+200,displayHeight/2-100,150,150)
  shuriken = new Shuriken(displayWidth/2,100,100,100)
  base = new Base(displayWidth/2-100,270,150,100)
  base1 = new Base(displayWidth/2+45,330,150,100)
  base2 = new Base(displayWidth/2+190,390,150,100)
  base3 = new Base(displayWidth/2-200,370,150,100)
  base4 = new Base(displayWidth/2-345,370,150,100)
}

function draw() {
  if(mode===0){
  ground.display();

  background(bg); 
  
  Engine.update(engine) 
  player.display()
  evilNinja.display()
  shuriken.display()
  base.display()
  base1.display()
  base2.display()
base3.display()
base4.display()


  //rotate the body
  if(keyCode == 32){
Matter.Body.setAngle(shuriken.body,angle)
Matter.Body.setAngularVelocity(shuriken.body,0.45)
angle= angle+5


  }
}

  if(keyDown(UP_ARROW)){
    Matter.Body.setVelocity(player.body,{x:2,y:-5})
  }
 var collision = Matter.SAT.collides(player.body,evilNinja.body)

 if(collision.collided){
   mode = 1;
   background(bg1)
  
  
 }

}

