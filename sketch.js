

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var man;
var thunder, thunderGroup;
var thunder1, thunder2, thunder3, thunder4;
var rain = [];
var engine, world;
function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
   createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    man = new Man(50, 720, 200, 200);
    thunderGroup = createGroup();
}

function draw(){
    background("black");
    if(frameCount%1 === 0){
        rain.push(new Rain(random(0, 800), 10, 10))
      }
      lightning();
    drawSprites();
    for(var j = 0; j < rain.length; j++){
         rain[j].display();
      }
      man.display();
}   

function lightning(){
    if(World.frameCount%80===0){
      thunder=createSprite(400,200,20,20);
      thunder.scale=0.2;
       r=Math.round(random(1,4));
      if (r == 1) {
        thunder.addImage(thunder1);
      } else if (r == 2) {
        thunder.addImage(thunder2);
      } else if (r == 3) {
        thunder.addImage(thunder3);
      } else {
        thunder.addImage(thunder4);
      }
      
      thunder.y=Math.round(random(50,340));
     
      thunder.velocityX=-7;
      thunder.setLifetime=100;
      
      thunderGroup.add(fruit);
    }
  }

