const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine,world;
var ball,ground,stand1,stand2,block,blocks;
var slingshot;

function preload(){
round=loadImage("polygon.png");
}

function setup(){
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    //creating the grounds
    ground=  new Ground(450,390,900,20);
    stand1 = new Ground(390,300,250,10);
    stand2 = new Ground(700,200,200,10);

    //creating all block in level one on stand 1
   
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);

    //creating all blocks in level two on stand1
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);

    //creating all blocks in level three on stand1
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);

    //top block on stand 1
    block16 = new Block(390,155,30,40);

    //creating all blocks in level one on stand2
    blocks1 = new Block(640,175,30,40);
    blocks2 = new Block(670,175,30,40);
    blocks3 = new Block(700,175,30,40);
    blocks4 = new Block(730,175,30,40);
    blocks5 = new Block(760,175,30,40);

     //creating all blocks in level two on stand2
     blocks6 = new Block(670,135,30,40);
     blocks7 = new Block(700,135,30,40);
     blocks8 = new Block(730,135,30,40);

      //top on stand2
      
     blocks9 = new Block(700,95,30,40);

     //creating the ball
     ball= Bodies.circle(50,200,20);
     World.add(world,ball);

     //creating slingshot
     slingshot = new Slingshot(ball,{x:100,y:200});
     Engine.run(engine);
   
   

     
   
  
  
}

function draw(){
    background("black");

    //displaying text
    textSize(20);
    fill("skyblue");
    text("Drag and Release to launch it towards the blocks",150,30);

    //displaying all the grounds on screen
    ground.display();
    stand1.display();
    stand2.display();

    //displaying all blocks on stand1
    fill("lightblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("coral");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("gold");
    block13.display();
    block14.display();
    block15.display();

    fill("white");
    block16.display();

    //displaying all blocks on stand2
    fill("lightblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    fill("coral");
    blocks6.display();
    blocks7.display();
    blocks8.display();

    fill("gold");
    blocks9.display();

    //displaying ball
    imageMode(CENTER);
    image(round,ball.position.x,ball.position.y,50,50);

    //displaying the slingshot
    slingshot.display();
   

  


    
}
function mouseDragged(){
    Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingshot.fly();
}