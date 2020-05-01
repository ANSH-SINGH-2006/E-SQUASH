var ball,img,paddle,score;


function preload() {
  paddle_1= loadImage("paddle.png");
  ball_2= loadImage("ball.png");
}


function setup() {
  
  createCanvas(400, 400);
  
   paddle=createSprite(380,200,20,20);
   paddle.addImage("tennis",paddle_1);
  
   ball=createSprite(200,200,10,10);
   ball.addImage("ball1",ball_2);
  
   score=0;

}


function draw() {
  
  background(205,153,0);
  
  edges=createEdgeSprites();  
  
  ball.bounceOff(edges[0]);
  

  if(ball.bounceOff(paddle)){
    randomVelocity();
    score=score+1
    
  }
 
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  
  if(keyWentDown(UP_ARROW))
  {
     paddle.velocityY= -20;
  }
  
  
  if(keyWentUp(UP_ARROW))
  {
     paddle.velocityY= 0;
  }
  
  if(keyWentDown(DOWN_ARROW))
  {
    paddle.velocityY= 20;
    
  }
  
  if(keyWentUp(DOWN_ARROW))
  {
    paddle.velocityY= 0;
  }
  
  if(ball.x>400){
     ball.x=200;
     ball.y=200;
     ball.velocityX=0;
     ball.velocityY=0;
     fill("red");
     score=score-1   
  }
  
  if(keyDown("space") && ball.velocityX===0 && ball.velocityY===0)
  {
    ball.velocityX=9;
  }
  
  textSize(24);
  fill("red");
  text(score,20,30);
  
  textSize(15);
  fill("blue");
  text("1- PRESS SPACE TO SERVE",100,100);
  text("2- USE ARROWS",100,120);
  text("3- DON'T LET BALL GO OUT",100,140);

  
  paddle.collide(edges);
  
  drawSprites();
  
}


function randomVelocity()
{
 ball.velocityY= random(14,-14);
}

