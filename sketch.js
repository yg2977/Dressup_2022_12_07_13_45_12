
var images = [];

var button1
var button2
var button3
var button4
var button5
var button6
var button7
var button8


var drawFunction;


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

  
}


function setup() {
  createCanvas(700,700);

  // Center our drawing objects
  imageMode(CENTER);
  textAlign(CENTER);
  
  //1
  button1=createImg('fit1.png')
  button1.position(width/4,height/7+50)
  button1.size(113,135)
  button1.mousePressed(ootd1)
  
  
  //2
  button2 = createImg('fit2.png');
  button2.position(width/4,height/7+200)
  button2.size(125,125)
  button2.mousePressed(ootd2)
  
  //3
  button3 = createImg('fit3.png');
  button3.position(width/4,height/7+340)
  button3.size(112,125)
  button3.mousePressed(ootd3)
  
  //4
  button4 = createImg('fit4.png');
  button4.position(width/4,height/7+495)
  button4.size(112,148)
  button4.mousePressed(ootd4)
  
  //5
   button5 = createImg('fit5.png');
  button5.position(width/4+470,height/7+50)
  button5.size(110,140)
  button5.mousePressed(ootd5)
  
  //6
  button6 = createImg('fit6.png');
  button6.position(width/4+470,height/7+200)
  button6.size(105,132)
  button6.mousePressed(ootd6)
  //7
  button7 = createImg('fit7.png');
  button7.position(width/4+470,height/7+350)
  button7.size(115,127)
  button7.mousePressed(ootd7)
  //8
  button8 = createImg('fit8.png');
  button8.position(width/4+470,610)
  button8.size(124,110)
  button8.mousePressed(ootd8)
  drawFunction = drawDefault;

}

function draw() {
  background(255,200,250);
  console.log(mouseX,mouseY)

  drawFunction();
}

function ootd1(){
  drawFunction=drawOne
}
function ootd2(){
  drawFunction = drawTwo
}
function ootd3(){
  drawFunction=drawThree
}
function ootd4(){
  drawFunction=drawFour
}
function ootd5(){
  drawFunction=drawFive
}
function ootd6(){
  drawFunction=drawSix
}
function ootd7(){
  drawFunction=drawSeven
}
function ootd8(){
  drawFunction=drawEight
}



//drawBackground = function() {
  //image(images[11], width - 720, height - 500);
//}

drawOne = function() {

  //drawBackground();

   push()
  scale(0.6)
   image(images[0],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd1", width/2, height - gTextOffset-80);
   
}

drawTwo = function() {
 // drawBackground();
push()
  scale(0.6)
   image(images[1],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd2", width/2, height - gTextOffset-80);
}

drawThree = function() {
  //drawBackground();

  push()
  scale(0.6)
   image(images[2],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd3", width/2, height - gTextOffset-80);
   
}

drawFour = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[3],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  pop()
  
   fill(255);
   textSize(24);
   text("ootd4", width/2, height - gTextOffset-80);
   
}

drawFive = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[4],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd5", width/2, height - gTextOffset-80);
}   
drawSix = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[14],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd6", width/2, height - gTextOffset-80);
   
}

drawSeven = function() {
  //drawBackground();

   push()
  scale(0.6)
  
   image(images[15],width/2+234, height/2+180,320,580);
  // image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  //image(images[10], width + 180, height/2-60 );
  pop()

   fill(255);
   textSize(24);
   text("ootd7", width/2, height - gTextOffset-80);
   
}

drawEight = function() {
  //drawBackground();

  push()
  scale(0.6)
   image(images[16],width/2+250, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
  pop()

   fill(255);
   textSize(24);
   text("ootd8", width/2, height - gTextOffset-80);
}




drawDefault = function() {
  //drawBackground();

   push()
  scale(0.6)
   image(images[5],width/2+230, height/2+200);
  //  image(images[6], width - 420, height/2 - 150 );
  //  image(images[7], width - 420, height/2 + 80);
  //  image(images[8], width - 420, height/2 + 320);
  // push()
  // scale(0.65)
  //  image(images[9], width - 290, height/2 +1070);
  // pop()
  // push()
  // scale(0.8)
  //  image(images[10], width + 400, height/2-90 );
  // pop()
  // image(images[11],width+190,height/2+90)
  // scale(0.8)
  // image(images[12],width+400,height/2+480)
  // image(images[13],width+400,height/2+730)
  
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