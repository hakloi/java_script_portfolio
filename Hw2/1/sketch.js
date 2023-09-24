/*S
The Game Project
1 - Background Scenery
*/

function setup()
{
	createCanvas(1024, 576);
	background(31,17,41); //31,17,41
    cage();

}

function cage(){
    //CAGE 
    noStroke();
    fill(92,49,112);
//    noFill();
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
    
    fill(152,251,152); //fire in rectangle
    rect(40,360,30,30);
    
}

function draw()
{
    

    
    
	fill(25, 17, 31);
	rect(0, 432, 804, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

//	noStroke();
	fill(255);
	text("cloud", 200, 100);

	//2. a mountain in the distance
	//... add your code here

//	noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here

	noStroke();
	fill(255);
	text("tree", 800, 346);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
    ellipse(350,200,25,20);
    drawCarrot(400,450,50,12,3,9,29);
    
    drawSkull(450,550,50);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
}

function drawSkull(skullX, skullY, size){
    const x1 = skullX;
    const y1 = skullY;
  
}

function drawCarrot(carrotX, carrotY, carrotLenght, carrotHeight,CarrotWidth, carrotGreen,size){
    const x1 = carrotX;
    const y1 = carrotY;
    const x2 = x1 + carrotLenght;
    const y2 = y1 + (carrotHeight/2);
    const y3 = y2 + CarrotWidth;
    const y4 = y3 +(carrotHeight/2);
    
    fill(255,92,33);
    beginShape();
    vertex(x1,y1);
    vertex(x2,y2);
    vertex(x2,y3);
    vertex(x1,y4);
    endShape();
    
    // attempts with arc...
    const x6 = x1 - carrotGreen;
    const y6 = y1 + carrotGreen;
//    const x7 = x6 - (carrotGreen/2);
//    const y7 = y6 + (carrotGreen/8);
//    const cGreen = canvas.getContext("2d");
//    fill(92,33,255);
//    cGreen.beginPath();
//    cGreen.arc(x6, y6, size, 40, 180); //x, y, radius, startAngle, endAngle
//    cGreen.arc(x7,y7,5, 180,40);
//    cGreen.stroke();
    const x7 = x6+carrotGreen;
    const newSize = size/2;
    
    fill(92,33,255);
    ellipse(x7,y6,size,size);
    erase();
    ellipse(x6,y6,newSize,newSize);
    
}
