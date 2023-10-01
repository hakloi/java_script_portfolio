/*
The Game Project
2 - Game character
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
    standLeft(45,280);
    standRight(245,280);
    jumpLeft(45,480);
    jumpRight(245,480);
    jumpRight(245,480);
    
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
    
    //left leg 245 80
    
    const leftl1 = x1-10;
    const leftl2 = leftl1-5;
    const leftl3 = leftl2+9;
    const leftl4 = leftl3+5;
    const leftl5 = leftl1+2;
    
    const rightl1 = x1+10;
    const rightl2 = rightl1+5;
    const rightl3 = rightl2-7;
    const rightl4 = rightl3-5;
    const rightl5 = rightl1-2;
    
    const legY1 = y1 + 30;
    const legY2 = legY1 + 10; //120
    const legY3 = legY2 + 5; //125
    const legY4 = legY3 + 5; //130
    const legY5 = legY2 - 1; //119
 
    
    fill(255, 158, 186);
    beginShape();
    vertex(leftl1,legY1);
    vertex(leftl2,legY2);
    vertex(leftl3,legY3);
    vertex(leftl4,legY4);
    vertex(leftl4,legY2);
    vertex(leftl3,legY2);
    vertex(leftl1,legY5);
    vertex(leftl5,legY1);
    endShape();
    
    const r1 = x1;
    const r2 = r1 +5;
    const r3 = r2 + 5;
    
    //right leg
    fill(255, 158, 186);
    beginShape();
    vertex(rightl1,legY1);
    vertex(rightl2,legY2);
    vertex(rightl3,legY3);
    vertex(rightl4,legY4);
    vertex(rightl4,legY2);
    vertex(rightl3,legY2);
    vertex(rightl1,legY5);
    vertex(rightl5,legY1);
    
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

function standLeft(sleftX, sleftY){
    //dress
    const x1 = sleftX;
    const y1 = sleftY;
    
    const x2 = x1 - 10;
    const y2 = y1 + 5;
    
    const x3 = x1 +15;
    const y3 = y2 + 35;
    
    const x4 = x2 + 10;
    const y4 = y3 + 5;
    
    const x5 = x3 -10;
    
    //-----
    const l1 = x1 + 2;
    const l2 = l1 + 5;
    const l3 = l1 - 6;
    
    const ll1 = y1 + 40;
    const ll2 = ll1+15;
    const ll3 = ll2-5;
    //left leg
    fill(255, 158, 186);
    beginShape();
    vertex(l1,ll1);
    vertex(l2,ll2);
    vertex(l3,ll2);
    vertex(l1,ll3);
    endShape();
    
    const r1 = x1;
    const r2 = r1 +5;
    const r3 = r2 + 5;
 
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
    
    const b1 = x1 -5;
    const b2 = x1 + 5;
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
    endShape();
    
    //head
    fill(255, 158, 186);
    ellipse(x1, y1,20,20 );

    //eyes
    const ey1 = x1-5;
    const ey3 = x1-7;

    
    fill(350,350,350);
    ellipse(ey1,y1,5,10);
    
    fill(0,0,0);
    ellipse(ey3,y1,2,4);

    
    //pecker
    const xx1 = x1 -8;
    const p1 = x1 - 18;
    const pp1 = y1+5;
    const pp2 = pp1+5;
    
    fill(237, 66, 116);
    beginShape();
    vertex(xx1,y1);
    vertex(p1,pp2);
    vertex(xx1,pp1);
    endShape();
    
    //hat
    const h1 = x1-5;
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
function standRight(srightX, srightY){
     //dress
    const x1 = srightX;
    const y1 = srightY;
    
    const x2 = x1 - 15;
    const y2 = y1 + 5;
    
    const x3 = x1 + 10;
    const y3 = y2 + 35;
    
    const x4 = x2 + 10;
    const y4 = y3 + 5;
    
    const x5 = x3 -10;
    
    //-----

    
    const ll1 = y1 + 40;
    const ll2 = ll1+15;
    const ll3 = ll2-5;

    const r1 = x1 - 5; 
    const r2 = r1 + 5;
    const r3 = r2 + 5;
    
    //right leg
    fill(255, 158, 186);
    beginShape();
    vertex(r2,ll1);
    vertex(r1,ll2);
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
    
    const b1 = x1;
    const b2 = x1 + 5;
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
    ellipse(ey2,y1,5,10);
    
    fill(0,0,0);
    ellipse(ey4,y1,2,4);
    
    //pecker
    const xx1 = x1 + 8;
    const p1 = x1 + 18;
    const pp1 = y1+5;
    const pp2 = pp1+5;
    
    fill(237, 66, 116);
    beginShape();
    vertex(xx1,y1);
    vertex(p1,pp2);
    vertex(xx1,pp1);
    endShape();
    
    //hat
    const h1 = x1+7;
    const h2 = x1-10;
    const h3 = h2-5;
    const hh1 = y1-10;
    const hh2 = hh1-5;
    
    fill( 119, 191, 162);
    beginShape();
    vertex(h1,hh1);
    vertex(h3,y1);
    vertex(h2,hh2);
    endShape();
}

function jumpLeft(jleftX, jleftY){
    //dress
    const x1 = jleftX;
    const y1 = jleftY;
    
    const x2 = x1 - 10;
    const y2 = y1 + 5;
    
    const x3 = x1 +15;
    const y3 = y2 + 25;
    
    const x4 = x2 + 10;
    const y4 = y3 + 5;
    
    const x5 = x3 -10;
    
    //-----
    const l1 = x1 + 2;
    const l2 = l1 + 5;
    const l3 = l1 - 6;
    const l4 = l1 - 5;
    const l5 = l2-7;
    const l6 = l2-5;
    
    const ll1 = y1 + 35;
    const ll2 = ll1+10;
    const ll3 = ll2-5;
    const ll4 = ll3-5;
    const ll5 = ll3-10;
    const ll6 = ll3-8;
    
    //left leg
    fill(255, 158, 186);
    beginShape();
    vertex(l6-3,ll6);
    vertex(l1,ll1+2);
    vertex(l2,ll2);
    vertex(l3,ll2+3);
    vertex(l1,ll3);
    vertex(l4,ll4);
    vertex(l5,ll5);
    endShape();
    
    const r1 = x1;
    const r2 = r1 +5;
    const r3 = r2 + 5;
 
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
    
    const b1 = x1 +14;
    const b2 = x1 + 14;
    const bb1 = y1 +10;
    const bb2 = bb1 + 5;

    
    //necktie
    // buttons
    fill(0,0,0);
    ellipse(x1,bcircleY,5,5);
    
    beginShape();
    vertex(x1,bb1);
    vertex(b1,bb1);
    vertex(b2,bb2);
    vertex(x1,bb1);
    endShape();
    
    //head
    fill(255, 158, 186);
    ellipse(x1, y1,20,20 );

    //eyes
    const ey1 = x1-5;
    const ey3 = x1-7;
    const eyy2 = y1+2;

    
    fill(350,350,350);
    ellipse(ey1,y1,5,10);
    
    fill(0,0,0);
    ellipse(ey3,eyy2,2,4);

    
    //pecker
    const xx1 = x1 -8;
    const p1 = x1 - 18;
    const pp1 = y1+5;
    const pp2 = pp1+5;
    
    fill(237, 66, 116);
    beginShape();
    vertex(xx1,y1);
    vertex(p1,pp2);
    vertex(xx1,pp1);
    endShape();
    
    //hat
    const h1 = x1-5;
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
function jumpRight(jrightX, jrightY){
     //dress
    const x1 = jrightX;
    const y1 = jrightY;
    
    const x2 = x1 - 15;
    const y2 = y1 + 5;
    
    const x3 = x1 + 10;
    const y3 = y2 + 25;
    
    const x4 = x2 + 10;
    const y4 = y3 + 5;
    
    const x5 = x3 -10;
    
    //-----

    
    const ll1 = y1 + 35;
    const ll2 = ll1+15;
    const ll3 = ll2-5;

    const r1 = x1 - 5; 
    const r2 = r1 + 5;
    const r3 = r2 + 5;
    

    //right leg
    fill(255, 158, 186);
    beginShape();
    vertex(r2,ll1);
    vertex(r2-2,ll1+5);
    vertex(r1,ll2-3);
    vertex(r3,ll2+2);
    vertex(r2-1,ll3-2);
    vertex(r2+3,ll3-8);
    vertex(r2+4,ll3-15);
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
    
    const b1 = x1-15;
    const b2 = x1 + 15;
    const bb1 = y1 +10;
    const bb2 = bb1 + 5;
    const bb3 = bb2 +5;
    
    //necktie
    // buttons
    fill(0,0,0);
    ellipse(x1,bcircleY,5,5);
    
    beginShape();
    vertex(x1,bb1);
    vertex(b1,bb1);
    vertex(b1,bb2);
    endShape();
    
    //head
    fill(255, 158, 186);
    ellipse(x1, y1,20,20 );

    //eyes
    const ey2 = x1+5;
    const ey4 = x1+7;
    const eyy4 = y1+2;
    
    fill(350,350,350);
    ellipse(ey2,y1,5,10);
    
    fill(0,0,0);
    ellipse(ey4,eyy4,2,4);
    
    //pecker
    const xx1 = x1 + 8;
    const p1 = x1 + 18;
    const pp1 = y1+5;
    const pp2 = pp1+5;
    
    fill(237, 66, 116);
    beginShape();
    vertex(xx1,y1);
    vertex(p1,pp2);
    vertex(xx1,pp1);
    endShape();
    
    //hat
    const h1 = x1+7;
    const h2 = x1-10;
    const h3 = h2-5;
    const hh1 = y1-10;
    const hh2 = hh1-5;
    
    fill( 119, 191, 162);
    beginShape();
    vertex(h1,hh1);
    vertex(h3,y1);
    vertex(h2,hh2);
    endShape();
}