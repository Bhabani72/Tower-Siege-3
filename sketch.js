const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,
    block16,block17,block18,block19,block20,bloc21,block22,block23,block24,block25,block26,block27,block28,block29,
    block30,block31;

    var score=0;

var ground,platform;
var striker,slingshot,bg = "cyan";

function preload(){
  getTime();
}

function setup(){
    var canvas = createCanvas(1350,650);
    engine = Engine.create();
    world = engine.world;

    striker = new Striker(200,400)
    ground = new Grounds(700,640,1500,20);
    platform = new Grounds(950,580,500,10);

    block1 = new block(800,550);
    block2 = new block(840,550);
    block3 = new block(880,550);
    block4 = new block(920,550);
    block5 = new block(960,550);
    block6 = new block(1000,550);
    block7 = new block(1040,550);

    block8 = new block(820,500);
    block9 = new block(860,500);
    block10 = new block(900,500);
    block11 = new block(940,500);
    block12 = new block(980,500);
    block13 = new block(1020,500);

    block14 = new block(840,450);
    block15 = new block(880,450);
    block16 = new block(920,450);
    block17 = new block(960,450);
    block18 = new block(1000,450);

    block19 = new block(860,400);
    block20 = new block(900,400);
    block21 = new block(940,400); 
    block22 = new block(980,400);

    block23 = new block(880,350);
    block24 = new block(920,350);
    block25 = new block(960,350);

    block26 = new block(900,300);
    block27 = new block(940,300);

    block28 = new block(920,250);
    
    slingshot = new launcher(striker.body,{x:200, y:350});

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
          width: 1300,
          height: 600,
          wireframes: false
        }
      });
}

function draw(){

    background(bg);
    Engine.update(engine);

    textSize(20);
  fill("yellow");
  text("Press Space to get a second Chance to Play!!",700,100);
  text("Score : "+score,150,50);

    ground.display();
    platform.display();
    striker.display();

   fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("green");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();

    fill("orange");
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();

    fill("grey");
    block19.display();
    block20.display();
    block21.display();
    block22.display();

    fill("blue");
    block23.display();
    block24.display();
    block25.display();

    fill("yellow");
    block26.display();
    block27.display();

    fill("pink");
   block28.display();

 //score
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();
 block26.score();
 block27.score();
 block28.score();

 slingshot.display(); 

}
function mouseDragged()
{
	Matter.Body.setPosition(striker.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(striker.body, {x:180, y:400}) 
      slingshot.attach(striker.body);
  }
}

async function getTime(){
  var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var dateTime = responseJSON.datetime;
  var hour = dateTime.slice(11,13);
  console.log(hour);

  if(hour >= 06 && hour <= 18){
    bg = rgb("cyan");
  } else{
    bg = rgb("black");
  }

}