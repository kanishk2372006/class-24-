const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    log1= new log(875,500,200,PI);
    box1 = new Box(800,550,50,50);
    box2 = new Box(950,550,50,50);
    pigs= new pig(870,550);
    ground = new Ground(width/2,height,1200,20)
    box3 = new Box(800,450,50,50);
    box4 = new Box(950,450,50,50);
    pigs1= new pig(870,450);
    log2= new log(875,400,200,PI);
    box5 = new Box(870,350,50,50);
    log3= new log(835,300,110,-PI/4);
    log4= new log(910,300,110,PI/4);
    angryBird = new bird(200,550)
   
}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
   
    box1.display();
    box2.display();
    pigs.display();
    log1.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    pigs1.display();
    log2.display();
    log3.display();
    log4.display();
    angryBird .display();
}