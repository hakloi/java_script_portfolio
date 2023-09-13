function setup()
{
	//create a canvas for the robot
	createCanvas(500, 500);
    background(255, 231, 115);
}

function draw()
{
	strokeWeight(6);

    // robo body (cloth,neck)
    fill(195, 247, 136);
    ellipse(415, 520, 445, 345);
    fill(255, 260, 115);
    beginShape();
    vertex(435,320);
    vertex(460,450);
    vertex(510,470);
    vertex(530,330);
    endShape();
    
    
    //robots ears
    fill(200, 0, 200);
	rect(240, 150, 30, 100);

    
    // face line
    fill(255, 260, 115);
    beginShape();
    vertex(250,0);
    vertex(260,200);
    vertex(300,300);
    vertex(330,350);
    vertex(400,380);
    vertex(450,380); //прямая подбородок
    vertex(520,350);
    vertex(530,0);
    endShape();
    
    // robo-hair
    fill(115, 139, 255);
    beginShape();
    vertex(270,230);
    vertex(250,300);
    vertex(200,290);
    vertex(260,350);
    vertex(300,370);
    vertex(370,370);
    
    endShape();
    
    fill(115, 139, 255);
	triangle(470, 130, 500, 0, 380, 0);
    
    fill(115, 139, 255);
	triangle(250, 90, 290, 0, 250, 0); // x1, y1, x2, y2, x3, y3
    fill(115, 139, 255);
	triangle(270, 140, 290, 0, 350, 0);
    
    fill(115, 139, 255);
	triangle(250, 200, 200, 0, 250, 0);
    
	//robots antenna
	fill(195, 247, 136);
	ellipse(150, 100, 60, 60);

	fill(200, 0, 200);
	beginShape();
    vertex(150,70);
    vertex(180,0);
    vertex(190,0);
    vertex(160,70);
    endShape();

	//robots eyes
	ellipse(325, 150, 75, 5);
    fill(0,0,0);
    beginShape();
    vertex(370,150);
    vertex(360,170);
    endShape();
    
    fill(0,0,0);
    beginShape();
    vertex(278,145);
    vertex(290,150);
    endShape();
    
    noFill();
    beginShape();
    vertex(440,110);
    vertex(470,100);
    vertex(500,110);
    endShape();
    
    noFill();
    beginShape();
    vertex(450,170);
    vertex(480,180);
    vertex(500,170);
    endShape();
    
    fill(0, 255, 255);
    ellipse(475, 140, 45, 40);
    point(475,140);

	//robots nose
	fill(255, 192, 255);
	beginShape();
    vertex(400,200);
    vertex(390,230);
    vertex(400,240);
    endShape();
    
    noFill();
	beginShape();
	vertex(360, 140);
	vertex(340, 120);
	endShape();

	//robots mouth
    fill(255, 192, 255);
    ellipse(410, 300, 45, 15);
    
    // eyebrows
    fill(115, 139, 255);
    beginShape();
    vertex(280,100);
    vertex(360,80);
    vertex(360,90);
    vertex(350,95);
    endShape();
    
    fill(115, 139, 255);
    beginShape();
    vertex(500,100);
    vertex(430,80);
    vertex(430,90);
    vertex(440,95);
    endShape();
    
}