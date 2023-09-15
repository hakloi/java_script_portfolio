function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
    background(49, 53, 86);
}

function draw()
{
	noStroke();
    strokeWeight(1);

    //FIRST CHARACTER
    
    //curly behind
    fill(0,0,0);
    ellipse(210,180,76,70);
    ellipse(180,180,70,70);
    ellipse(190,140,80,40);
    
    
    //neck
    fill(255, 230, 222);
    beginShape();
    vertex(180,200);
    vertex(185,215);
    vertex(175,220);
    vertex(190,225);
    vertex(215,215);
    vertex(209,214);
    vertex(203,180);
    endShape();
    
    //curly hair
	fill(0,0,0);
    ellipse(140, 160, 26, 56);
    ellipse(150,180,80,55);
    ellipse(145,200,30,76);
    ellipse(150,230,56,50);

    beginShape();
    vertex(125,240);
    vertex(140,220);
    vertex(160,270);
    vertex(140,300);
    vertex();
    endShape();
    
    beginShape();
    vertex(130,270);
    vertex(110,280);
    vertex(100,260);
    vertex(110,270);
    vertex(130,250);
    endShape();
    
    
    //face
    fill(255, 230, 222);
    beginShape();
    vertex(150,150);
    vertex(155,180);
    vertex(175,200);
    vertex(185,200);
    vertex(208,180);
    vertex(208,140);
    endShape();
    
    //curly forward face
    fill(0,0,0);
    ellipse(240,220,50,50);
    ellipse(210,160,40,40);
    
	//witch hat
	strokeWeight(1);
    fill(101, 0, 103);
    beginShape();
    vertex(100,150);
    vertex(175, 155); // x, y
    vertex(250,130);
    vertex(240,125);
    vertex(200,118);
    vertex(190,100);
    vertex(195,90);
    vertex(210,100);
    vertex(190,70);
    vertex(150,100);
    vertex(140,130);
    vertex(100,150);
    endShape();
    
     //toes
    fill(255, 230, 222);
    beginShape();
    vertex(200,590);
    vertex(203,605);
    vertex(225,590);
    vertex(225,580);
    endShape();
    
    //legs
    fill(228, 228, 228);
    beginShape();
    vertex(230,450);
    vertex(220,550);
    vertex(223,570);
    vertex(225,580);
    vertex(210,590);
    vertex(200,595);
    vertex(200,560);
    vertex(205,540);
    vertex(200,450);
    endShape();
    
    beginShape();
    vertex(160,400);
    vertex(180,550);
    vertex(170,560);
    vertex(160,580);
    vertex(140,585);
    vertex(140,570);
    vertex(160,540);
    vertex(140,450);
    endShape();
    
    //body
    fill(101, 0, 103);
    beginShape();
    vertex(145,225);
    vertex(190,217);
    vertex(240, 225);
    vertex(250,270);
    vertex(250,330);
    vertex(240,460);
    vertex(200,470);
    vertex(140,460);
    vertex(80,450);
    vertex(60,440);
    vertex(40,420);
    vertex(70,410);
    vertex(145,225);
    endShape();
    
    //scarf
    fill(101,0,103);
    beginShape();
    vertex(160,200);
    vertex(150,230);
    vertex(200,235);
    vertex(230,230);
    vertex(220,200);
    vertex(200,210);
    vertex(180,210);
    vertex(160,200)
    endShape();
    

	//robot body 2 - delete this code and make your own robot body
	rect(390, 200, 120, 130);
	rect(370, 200, 30, 100);
	rect(500, 200, 30, 100);
	rect(420, 330, 30, 110);
	rect(450, 330, 30, 110);


	//robot body 3 - delete this code and make your own robot body
	rect(690, 200, 120, 130);
	rect(670, 200, 30, 100);
	rect(800, 200, 30, 100);
	rect(720, 330, 30, 110);
	rect(750, 330, 30, 110);


	// !!! Draw the robot heads - You shouldn't need to change this code !!!

	//robot head 1
//	fill(200);
//	rect(100, 100, 100, 100, 10);
//    //robot head 2
//	rect(400, 100, 100, 100, 10);
//    //robot head 3
//	rect(700, 100, 100, 100, 10);

//	//ears
//	fill(255, 0, 0);
//
//	//robot ears 1
//	rect(93, 130, 10, 33);
//	rect(197, 130, 10, 33);

	//robot ears 2
	rect(393, 130, 10, 33);
	rect(497, 130, 10, 33);

	//robot ears 3
	rect(693, 130, 10, 33);
	rect(797, 130, 10, 33);



//	//robots' antennas
//	fill(250, 250, 0);
//    // robot antenna 1
//	ellipse(150, 93, 10, 10);
//    // robot antenna 1
//	ellipse(450, 93, 10, 10);
//    // robot antenna 1
//	ellipse(750, 93, 10, 10);
//
//    //robots' antennas
//	fill(200, 0, 200);
//    // robot antenna 1
//	rect(140, 97, 20, 10);
//    // robot antenna 2
//	rect(440, 97, 20, 10);
//    // robot antenna 3
//	rect(740, 97, 20, 10);

//
//	//robot 1's eyes
//	fill(255);
//	ellipse(125, 130, 26, 26);
//	point(125, 130);
//	ellipse(175, 130, 26, 26);
//	point(175, 130);

	//robot 2's eyes
	ellipse(425, 130, 26, 26);
	point(425, 130);
	ellipse(475, 130, 26, 26);
	point(475, 130);

	//robot 3's eyes
	ellipse(725, 130, 26, 26);
	point(725, 130);
	ellipse(775, 130, 26, 26);
	point(775, 130);


//	//robots' noses
//	fill(255, 0, 0);
//    //robot 1 nose
//	triangle(150, 135, 135, 160, 165, 160);
//    //robot 2 nose
//	triangle(450, 135, 435, 160, 465, 160);
//    //robot 3 nose
//	triangle(750, 135, 735, 160, 765, 160);

//	//robot 1 mouth
//	noFill();
//	beginShape();
//	vertex(128, 175);
//	vertex(136, 185);
//	vertex(142, 175);
//	vertex(150, 185);
//	vertex(158, 175);
//	vertex(166, 185);
//	vertex(174, 175);
//	endShape();

	//robot 2 mouth
	beginShape();
	vertex(428, 175);
	vertex(436, 185);
	vertex(442, 175);
	vertex(450, 185);
	vertex(458, 175);
	vertex(466, 185);
	vertex(474, 175);
	endShape();

	//robot 3 mouth
	beginShape();
	vertex(728, 175);
	vertex(736, 185);
	vertex(742, 175);
	vertex(750, 185);
	vertex(758, 175);
	vertex(766, 185);
	vertex(774, 175);
	endShape();
}