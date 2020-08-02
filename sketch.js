// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var ground ;
var ground2;
var circle1;
var tanker;
/*


const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var ball8;
var ball9;
var ball10;
var ball11;
var ball12;
var ball13;
var ball14;
var ball15;
var ball16;
function setup() {
   var engine = Engine.create();
   var world = engine.world; 
 
   

   ground = new Ground(667,570,1200,100);
   ground2 = new Ground(200,495,150,50);
   ground1 = new Ground(200,460,150,20);
   tanker = new Tanker(280,420,70,30,PI/3);
   ball = new Ball(400,90,50);
   ball1 = new Ball(400,115,50);
   ball2 = new Ball(400,140,50);
   ball3 = new Ball(400,165,50);
   ball4 = new Ball(400,190,50);
   ball5 = new Ball(400,215,50);
   ball6 = new Ball(400,240,50);
   ball7 = new Ball(460,90,50);
   ball8 = new Ball(460,115,50);
   ball9 = new Ball(460,140,50);
   ball10 = new Ball(460,165,50);
   ball11= new Ball(460,190,50);
   ball12= new Ball(460,215,50);
   ball13= new Ball(460,240,50);
   ball14 = new Ball(430,90,50);
   ball15 = new Ball(430,240,50);
   ball16 = new Ball(430,165,50);
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(1335,600);

}

function draw() {
    background(14,182,242);
    
    fill("white");
    ball.display();
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();
    ball7.display();
    ball8.display();
    ball9.display();
    ball10.display();
    ball11.display();
    ball12.display();
    ball13.display();
    ball14.display();
    ball15.display();

    
    tanker.display();
   fill("black");
   circle1 = circle(200,440,130);
   ball16.display();
   ground2.display();
   fill("brown");
   ground.display();
   
   fill("white");
   ground1.display();
  
   
  
// Remember to update the Matter Engine and set the background.
}


function keyReleased() {
    
    // Call the shoot method for the cannon.
}