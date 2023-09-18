function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
    background(49, 53, 86);
}

function draw()
{
	noStroke();
//    strokeWeight(1);

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
    
    //face features
    fill(0,0,0);
    rect(154,160,11,3)
    rect(182,160,11,3)
    
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
    
    // --------------------------- character 2

	//body
    fill(151,107,147);
	rect(400,400,20,20);
    rect(520,400,20,20);
    fill(255,215,167);
    rect(420,420,20,20);
    rect(440,440,20,20);
    rect(480,440,20,20);
    rect(500,420,20,20)
    fill(98,119,58);
    rect(400,440,20,20);
    rect(520,440,20,20);
    
    fill(154,123,112);
    rect(440,460,60,40);
    rect(460,500,20,20);
    rect(440,520,60,40);
    rect(450,560,15,20);
    rect(475,560,15,20);
    rect(445,580,15,10);
    rect(475,580,15,10);
    //face of tree
    fill(182,255,126);
    ellipse(450,480,10,7);
    ellipse(475,480,10,7);
    
    // --------------------------- character 3
    //body
    fill(100,102,144);
    beginShape();
    vertex(680,80);
    vertex(730,50);
    vertex(790,80);
    vertex(800,500);
    vertex(780,480);
    vertex(760,500);
    vertex(740,480);
    vertex(720,500);
    vertex(700,480);
    vertex(680,500);
    vertex(680,80)
    endShape();
    // face of creature
    fill(182,255,126);
    rect(700,100,20,20);
    rect(740,100,20,20);


}