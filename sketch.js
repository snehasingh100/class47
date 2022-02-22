var form;
var canvas;
var bike1,bike2,bike1_img,bike2_img;
var allPlayers;
var bikes=[];


function preload(){
  bike1_img=loadImage()
  bike2_img=loadImage()
  backgroundImage=loadImage()
  track=loadImage()
}


function setup(){
  canvas=createCanvas(windowWidth,windowHeight)
  database=firebase.database()
  game=new Game()
  game.getState()
  game.start()
}
function draw(){
  background(backgroundImage)
  if(playerCount===2)
  {
game.update(1)
  }
  if(gameState===1){
    game.play()
  }

}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}