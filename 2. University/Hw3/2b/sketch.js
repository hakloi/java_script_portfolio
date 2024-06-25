/*S
The Game Project
1 - Background Scenery
*/
var mouseX;
var mouseY;


let img;
function preload() {
  img = loadImage('magic.png');
}

function setup()
{
	createCanvas(1024, 576);
	background(31,17,41); //45, 26, 59
    
    floorPos_y = 395; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	mouseX = width/2;
	mouseY = floorPos_y;

    CharX = 200;
    CharY= floorPos_y;
    
    imageMode(CENTER);
    image(img,150, 300, 1600, 800);
    cage();
    witch();
    smoke();

}

function smoke(){
    imageMode(CENTER);
    image(img,450, 500, 1600, 800);
    image(img,1000, 500, 1600, 800);
}

function witch(){
    //hair back
    fill(100,102,144);
    beginShape();
    vertex(560,20);
    vertex(530,40);
    vertex(560,100);
    endShape();
    
    rect(560,0,60,220);
    
    beginShape();
    vertex(560,220);
    vertex(590,300);
    vertex(600,390);
    vertex(750,390);
    vertex(750,150);
    endShape();
    
    //dress
    fill(149,165,104);
    beginShape();
    vertex(700,290);
    vertex(600,280);
    vertex(590,290);
    vertex(570,380);
    vertex(580,400);
    vertex(540,450);
    vertex(540,576);
    vertex(900,576);
    vertex(950,370);
    vertex(900,300);
    endShape();
    
    //skin
    fill(238,230,222);
    beginShape();
    vertex(600,10);
    vertex(590,150);
    vertex(640,230);
    vertex(670,240);
    vertex(710,220);
    vertex(700,290);
    vertex(600,380);
    vertex(660,430);
    vertex(790,390);
    vertex(770,290);
    vertex(770,200);
    vertex(760,70);
    endShape();
    
    //hair forward
    fill(153,153,255);
    rect(590,0,200,70);
    rect(760,20,60,270);
    
    beginShape();
    vertex(570,70);
    vertex(590,130);
    vertex(600,40)
    endShape();
    
    beginShape();
    vertex(690,70);
    vertex(730,10);
    vertex(800,140);
    endShape();
    
    beginShape();
    vertex(760,290);
    vertex(800,390);
    vertex(820,470);
    vertex(880,470);
    vertex(840,40);
    vertex(820,0);
    vertex(790,0);
    endShape();
    
    //eyes
    fill(0,0,0);
    beginShape();
    vertex(590,110);
    vertex(600,100);
    vertex(640,110);
    vertex(640,115);
    endShape();
    
    beginShape();
    vertex(670,110);
    vertex(680,100);
    vertex(730,110);
    vertex(730,115);
    endShape();
    
    //blush
    fill(150, 111, 179);
    ellipse(600,140,10,20);
    ellipse(615,140,10,20);
    ellipse(630,140,10,20);
    
    ellipse(700,140,10,20);
    ellipse(715,140,10,20);
    ellipse(685,140,10,20);
    
    //lips
    fill(195, 49, 108);
    beginShape();
    vertex(630,190);
    vertex(670,200);
    vertex(690,180);
    vertex(700,185);
    endShape();   
    
    //hat
    fill(149,165,104);
    beginShape();
    vertex(450,0);
    vertex(450,10);
    vertex(1000,100);
    vertex(990,90);
    vertex(840,20);
    vertex(820,0);
    endShape();
}

function SetOpacity( imageid, opacity ) {
    var s= document.getElementById(imageid).style;
    s.opacity = ( opacity / 100 );
    s.MozOpacity = ( opacity / 100 );
    s.KhtmlOpacity = ( opacity / 100 );
    s.filter = 'alpha(opacity=' + opacity + ')';
}

function cage(){
    noStroke();
    fill(152,251,152); //fire in rectangle
    rect(40,360,30,30);
    rect(165,190,20,15);
    rect(10,10,30,20);
    
    fill(92,49,112);
    beginShape();
    vertex(0,0);
    vertex(0,40);
    vertex(50,40);
    vertex(50,0);
    vertex(70,0);
    vertex(70,40);
    vertex(120,40);
    vertex(120,20);
    vertex(170,20);
    vertex(170,0);
    vertex(190,0);
    vertex(190,20);
    vertex(240,20);
    vertex(250,0);
    vertex(290,0);
    vertex(280,20);
    vertex(270,40);
    vertex(250,170); // 130
    vertex(250,250); // 80 
    vertex(270,380); // 130
    vertex(280,400);
    vertex(300,440);
    vertex(260,440);
    vertex(240,400);
    vertex(190,400);
    vertex(190,435);
    vertex(170,435);
    vertex(170,400);
    vertex(110,400);
    vertex(110,435);
    vertex(0,435);
    vertex(0,410);
    vertex(85,410);
    vertex(85,340);
    vertex(25,340);
    vertex(25,410);
    vertex(0,410);
    vertex(0,315);
    vertex(110,315);
    vertex(110,380);
    vertex(150,380);
    vertex(150,280);
    vertex(80,280);
    vertex(80,240);
    vertex(40,240);
    vertex(40,315);
    vertex(20,315);
    vertex(20,240);
    vertex(0,240);
    vertex(0,220);
    vertex(10,220);
    vertex(10,140);
    vertex(40,140);
    vertex(40,60);
    vertex(60,60);
    vertex(60,160);
    vertex(30,160);
    vertex(30,220);
    vertex(100,220);
    vertex(100,260);
    vertex(170,260);
    vertex(170,380);
    vertex(235,380);
    vertex(215,250);
    vertex(215,170);
    vertex(235,40);
    vertex(140,40);
    vertex(140,60);
    vertex(0,60);
    endShape();
    
    beginShape();
    vertex(0,80);
    vertex(80,80);
    vertex(80,120);
    vertex(160,120);
    vertex(160,40);
    vertex(170,40);
    vertex(170,80);
    vertex(220,80);
    vertex(220,0);
    vertex(230,0);
    vertex(230,100);
    vertex(170,100);
    vertex(170,130);
    vertex(70,130);
    vertex(70,90);
    vertex(0,90);
    vertex(0,80);
    endShape();

    beginShape();
    vertex(0,190);
    vertex(100,190);
    vertex(100,0);
    vertex(110,0);
    vertex(110,170);
    vertex(130,170);
    vertex(130,150);
    vertex(220,150);
    vertex(220,240);
    vertex(195,240);
    vertex(195,180);
    vertex(155,180);
    vertex(155,215);
    vertex(195,215);
    vertex(195,240);
    vertex(130,240);
    vertex(130,180);
    vertex(110,180);
    vertex(110,200);
    vertex(0,200);
    vertex(0,190);
    endShape();
    
    beginShape();
    vertex(60,240);
    vertex(60,300);
    vertex(200,300);
    vertex(200,350);
    vertex(110,350);
    vertex(110,360);
    vertex(210,360);
    vertex(210,450);
    vertex(220,450);
    vertex(220,350);
    vertex(210,350);
    vertex(210,290);
    vertex(70,290);
    vertex(70,240);
    vertex(60,240);
    endShape();
    
    beginShape();
    vertex(210,40);
    vertex(210,240);
    vertex(200,240);
    vertex(200,290);
    vertex(190,290);
    vertex(190,230);
    vertex(200,230);
    vertex(200,40);
    vertex(210,40);
    endShape();
    
    // cage's shadow 
    fill(152,251,152);
    beginShape();
    vertex(280,0);
    vertex(290,0);
    vertex(270,40);
    vertex(250,170); // 130
    vertex(250,250); // 80 
    vertex(270,380); // 130
    vertex(280,400);
    vertex(300,440);
    vertex(320,440);
    vertex(290,380);
    vertex(270,250);
    vertex(270,170);
    vertex(290,40);
    vertex(310,0);
    endShape();
}

function draw()
{   
    
    
    
	fill(55, 16, 73); //79, 41, 97
	rect(0, 432, 604, 144); 
    rect(754,432,400,144);
    rect(950,400,80,50);
    rect(980,370,60,40);
    rect(1010,340,30,30);
    
    //BG: lipstick
    fill(93, 45, 181);
    rect(170,400,150,40);
    
    fill(195, 49, 108);
    rect(320,410,20,30)
    beginShape();
    vertex(340,410);
    vertex(360,430);
    vertex(370,440);
    vertex(340,440);
    endShape();
    
    // BG: powder case
    fill(93, 45, 181);
    rect(400,392,80,50);
    rect(440,332,100,110);
    
    //mirror
    fill(172, 155, 204);
    rect(450,340,70,50);
    
    fill(150, 111, 179);
    ellipse(460,400,110,15);
    
    //shadow
    fill(92,49,112);
    beginShape();
    vertex(0,470);
    vertex(580,470);
    vertex(604,432);
    vertex(604,576);
    endShape();

    beginShape();
    vertex(1024,470)
    vertex(778,470);
    vertex(754,432);
    vertex(754,576);
    endShape();
    
    drawSkull(490, 250);
    drawSkull(680,320);
    drawSkull(850,380);
    
    standFront(CharX, CharY);
    
}


function drawSkull(carrotX, carrotY){
    const x1 = carrotX;
    const y1 = carrotY;
    
    const x2 = x1 + 8;
    const y2 = y1 + 14;
    const x3 = x2 - 10;
    const x4 = x3 - 10;
    
    const eyeRightX = x1 -9;
    const eyeRightY = y1;
    
    const eyeLeftX = eyeRightX + 18;
    
    fill(152,251,152); 
    ellipse(x1,y1,40,40);
    rect(x2,y2,5,15);
    rect(x3, y2, 5, 15);
    rect(x4, y2, 5 , 15);
    
    fill(0,0,0);
    ellipse(eyeRightX, eyeRightY, 15,15 );
    ellipse(eyeLeftX, eyeRightY, 15,15)
   
}


function standFront(sfrontX, sfrontY){
    //dress
    const x1 = sfrontX;
    const y1 = sfrontY;
    
    const x2 = x1 - 15;
    const y2 = y1 + 5;
    
    const x3 = x1 +15;
    const y3 = y2 + 35;
    
    const x4 = x2 + 10;
    const y4 = y3 + 5;
    
    const x5 = x3 -10;
    
    //-----
    const l1 = x1 -5;
    const l2 = l1 - 5;
    
    const ll1 = y1 + 40;
    const ll2 = ll1+15;
    const ll3 = ll2-5;
    //left leg
    fill(255, 158, 186);
    beginShape();
    vertex(l1,ll1);
    vertex(x1,ll2);
    vertex(l2,ll2);
    vertex(l1,ll3);
    endShape();
    
    const r1 = x1;
    const r2 = r1 +5;
    const r3 = r2 + 5;
    
    //right leg
    fill(255, 158, 186);
    beginShape();
    vertex(r2,ll1);
    vertex(x1,ll2);
    vertex(r3,ll2);
    vertex(r2,ll3);
    endShape();
    
    //dress
    fill( 119, 191, 162);
    beginShape();
    vertex(x4,y2);
    vertex(x2,y3);
    vertex(x1,y4);
    vertex(x3,y3);
    vertex(x5,y2);
    endShape();
    
    const bcircleY = y1 + 10;
    
    const b1 = x1 -3;
    const b2 = x1 + 3;
    const bb1 = y1 +10;
    const bb2 = bb1 + 10;
    const bb3 = bb2 +5;
    
    //necktie
    // buttons
    fill(0,0,0);
    ellipse(x1,bcircleY,5,5);
    
    beginShape();
    vertex(x1,bb1);
    vertex(b1,bb2);
    vertex(x1,bb3);
    vertex(b2,bb2)
    endShape();
    
    //head
    fill(255, 158, 186);
    ellipse(x1, y1,20,20 );

    //eyes
    const ey1 = x1-5;
    const ey2 = x1+5;
    const ey3 = x1-3;
    const ey4 = x1+7;
    
    fill(350,350,350);
    ellipse(ey1,y1,5,10);
    ellipse(ey2,y1,5,10);
    
    fill(0,0,0);
    ellipse(ey3,y1,2,4);
    ellipse(ey4,y1,2,4);
    
    //pecker
    const p1 = x1 - 10;
    const pp1 = y1+5;
    const pp2 = pp1+5;
    
    fill(237, 66, 116);
    beginShape();
    vertex(x1,y1);
    vertex(p1,pp2);
    vertex(x1,pp1);
    endShape();
    
    //hat
    const h1 = x1-15;
    const h2 = x1+10;
    const h3 = h2+5;
    const hh1 = y1-10;
    const hh2 = hh1-5;
    
    fill( 119, 191, 162);
    beginShape();
    vertex(h1,hh1);
    vertex(h3,y1);
    vertex(h2,hh2);
    endShape();
}

function mousePress(){
    
}

