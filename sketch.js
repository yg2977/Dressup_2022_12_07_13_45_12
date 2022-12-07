// Array of images
var images = [];

// variable that is a function 
var drawFunction;

// offset from bottom of screen
var gTextOffset = 20;

// load all images into an array
function preload() {
  
  images[0] = loadImage('one.png');
  images[1] = loadImage('two.png');
  images[2] = loadImage('three.png');
  images[3] = loadImage('four.png');
  images[4] = loadImage('five.png');
  images[5] = loadImage('default.png');
  images[6] = loadImage('fit1.png')
  images[7] = loadImage('fit2.png')
  images[8] = loadImage('fit3.png')
   images[9] = loadImage('fit4.png')
  images[10] = loadImage('fit5.png')
  
   images[11] = loadImage('fit6.png')
   images[12] = loadImage('fit7.png')
  images[13] = loadImage('fit8.png')
  images[14] = loadImage('six.png')
  images[15] = loadImage('seven.png')
  images[16] = loadImage('eight.png')
  
  
  
  //images[11] = loadImage('background.png')
  
}

// Center drawing, drawFunction will be one for default
function setup() {
  createCanvas(700,700);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);

  // set to one for startup
  drawFunction = drawDefault;
}

function draw() {
  background(255,200,250);

  drawFunction();
}

//drawBackground = function() {
  //image(images[11], width - 720, height - 500);
//}

drawOne = function() {

  //drawBackground();

   push()
  scale(0.6)
   image(images[0],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd1", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawTwo = function() {
 // drawBackground();
push()
  scale(0.6)
   image(images[1],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd2", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawThree = function() {
  //drawBackground();

  push()
  scale(0.6)
   image(images[2],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd3", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawFour = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[3],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  pop()
  
   fill(255);
   textSize(24);
   text("ootd4", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawFive = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[4],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd5", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawSix = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[14],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd6", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawSeven = function() {
  //drawBackground();

   push()
  scale(0.6)
  
   image(images[15],width/2+220, height/2+200);
  image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  //image(images[10], width + 180, height/2-60 );
  pop()

   fill(255);
   textSize(24);
   text("ootd7", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}

drawEight = function() {
  //drawBackground();

  push()
  scale(0.6)
   image(images[16],width/2+250, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd8", width/2, height - gTextOffset-80);
   textSize(15);
   fill(155, 80, 250);
   text("press #1-8 to change the outfits // 'd' to go back to main page", width/2, height/15);
}




drawDefault = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[5],width/2+230, height/2+200);
   image(images[6], width - 420, height/2 - 150 );
   image(images[7], width - 420, height/2 + 80);
   image(images[8], width - 420, height/2 + 320);
  push()
  scale(0.65)
   image(images[9], width - 290, height/2 +1070);
  pop()
  push()
  scale(0.8)
   image(images[10], width + 400, height/2-90 );
  pop()
  image(images[11],width+190,height/2+90)
  scale(0.8)
  image(images[12],width+400,height/2+480)
  image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("welcome to the closet :D", width/2, height/15);
   fill(255);
   text("click to begin", width/2, height - gTextOffset-75);
}


function keyTyped() {
  if( drawFunction === drawDefault ) {
    return;
  }

  if( key === '1' ) {
  	drawFunction = drawOne;
  }
  else if( key === '2' ) {
  	drawFunction = drawTwo;
  }
  else if( key === '3' ) {
  	drawFunction = drawThree;
  }
  else if( key === '4' ) {
  	drawFunction = drawFour;
  }
  else if( key === '5' ) {
  	drawFunction = drawFive;
  }
  else if(key=='6'){
    drawFunction = drawSix
  }
  else if(key=='7'){
    drawFunction = drawSeven
  }
  else if (key=='8'){
    drawFunction = drawEight
  }
  else if( key === 'd' ) {
    drawFunction = drawDefault;
  }
}

function mousePressed() {
  if( drawFunction === drawDefault ) {
    drawFunction = drawOne;
  }
}