/*

The Game Project

2 - Game character

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the different states of your game character.

Write the code so that your character appears inside the box for each
state.

IMPORTANT: For each box the variables gameChar_x & gameChar_y are set to the bottom
center of the box. You must combine these variables with arithmetic to
determine the position of each shape that you draw. This will later allow
you to adjust the position of your game character.

Each state is worth two marks:

//standing front facing = 2
//jumping facing forwards = 2
//walking left = 2
//walking right = 2
//jumping left and jumping right = 2

0 marks = not a reasonable attempt
1 mark = attempted but it lacks detail and you didn't use gameChar_x and gameChar_y correctly
2 marks = you've used a selction of shape functions and made consistent use of gameChar_x and gameChar_y

WARNING: Do not get too carried away. If you're character takes more than 5 lines
of code to draw then you've probably over done it.

** Only submit your sketch.js **

*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...


	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    
    standFront(45,80);
    jumpFront(245,80);

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
function jumpFront(jfrontX, jfrontY){
    //dress
    const x1 = jfrontX;
    const y1 = jfrontY;
    
    //-----
    const l1 = x1 -5;
    const l2 = l1 - 5;
    
    const ll1 = y1 + 30;
    const ll2 = ll1+15;
    const ll3 = ll2-5;
    
    //dress
    const x2 = x1 - 15;
    const y2 = y1 + 5;
    
    const x3 = x1 +15;
    const y3 = y2 + 25;
    
    const x4 = x2 + 10;
    const y4 = y3 - 5;
    
    const x5 = x3 -10;
    
    fill( 119, 191, 162);
    beginShape();
    vertex(x4,y2);
    vertex(x2,y3);
    vertex(x1,y4);
    vertex(x3,y3);
    vertex(x5,y2);
    endShape();
    
    const y5 =y3+5;
    
    fill(89, 150, 126);
    beginShape();
    vertex(x2,y3);
    vertex(x1,y4);
    vertex(x3,y3);
    vertex(x1,y5);
    vertex(x2,y3);
    endShape();
    
    
    stroke(2)
    //left leg 245 80
    fill(255, 158, 186);
    beginShape();
    vertex(235,110);
    vertex(230,120);
    vertex(240,125);
    vertex(245,130);
    vertex(245,120);
    vertex(240,120);
    vertex(235,119);
    vertex(237,110);
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
    
    //necktie
    // buttons 245,80
    const bcircleY = y1 + 10;
    
    const b1 = x1 +15;
    const bb1 = y1 +10;
    const bb2 = bb1 + 2;
    const bb3 = bb2 +3;
    
    fill(0,0,0);
    ellipse(x1,bcircleY,5,5);
    
    beginShape();
    vertex(x1,bb2);
    vertex(b1,bb1);
    vertex(b1,bb3);
    endShape();
    
    //head
    fill(255, 158, 186);
    ellipse(x1, y1,20,20 );

    //eyes
    const ey1 = x1-5;
    const ey2 = x1+5;
    
    fill(350,350,350);
    ellipse(ey1,y1,5,10);
    ellipse(ey2,y1,5,10);
    
    fill(0,0,0);
    ellipse(ey1,82,2,4);
    ellipse(ey2,82,2,4);
    
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
