/*S
The Game Project
1 - Background Scenery
*/

let img;
function preload() {
  img = loadImage('magic.png');
}

function setup()
{
	createCanvas(1024, 576);
	background(31,17,41); //45, 26, 59
    cage();
    smoke();

}

function smoke(){
    imageMode(CENTER);
    image(img,450, 500, 1600, 800);
    image(img,1000, 500, 1600, 800);
}

function SetOpacity( imageid, opacity ) {
    var s= document.getElementById(imageid).style;
    s.opacity = ( opacity / 100 );
    s.MozOpacity = ( opacity / 100 );
    s.KhtmlOpacity = ( opacity / 100 );
    s.filter = 'alpha(opacity=' + opacity + ')';
}

function cage(){
    
    fill(152,251,152); //fire in rectangle
    rect(40,360,30,30);
    rect(165,190,20,15);
    rect(10,10,30,20);
    
    noStroke();
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

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    
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
//    const x1 = carrotX;
//    const y1 = carrotY;
//    const x2 = x1 + carrotLenght;
//    const y2 = y1 + (carrotHeight/2);
//    const y3 = y2 + CarrotWidth;
//    const y4 = y3 +(carrotHeight/2);
//    
//    fill(255,92,33);
//    beginShape();
//    vertex(x1,y1);
//    vertex(x2,y2);
//    vertex(x2,y3);
//    vertex(x1,y4);
//    endShape();
//    
//    // attempts with arc...
//    const x6 = x1 - carrotGreen;
//    const y6 = y1 + carrotGreen;
////    const x7 = x6 - (carrotGreen/2);
////    const y7 = y6 + (carrotGreen/8);
////    const cGreen = canvas.getContext("2d");
////    fill(92,33,255);
////    cGreen.beginPath();
////    cGreen.arc(x6, y6, size, 40, 180); //x, y, radius, startAngle, endAngle
////    cGreen.arc(x7,y7,5, 180,40);
////    cGreen.stroke();
//    const x7 = x6+carrotGreen;
//    const newSize = size/2;
//    
//    fill(92,33,255);
//    ellipse(x7,y6,size,size);
//    erase();
//    ellipse(x6,y6,newSize,newSize);
//    
}
