var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;

var sun;

var darkness;
var brightness; 

let ySpeed = 1;
let mSpeed = 1;

var clouds = [];


colors = ["#8EE9EC", "#FFB300", "#071C71"];

function setup()
{
	createCanvas(800, 600);
    
    let r = random(0,15);
    for (var i = 0; i < r; i++) {
        clouds[i] = new Cloud(); 
    }
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 120,
		canopyHeight: 100
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};

    moon = {
        x: 650,
        y: 530,
        diameter: 80,
    };

	//set the initial darkness
	darkness = 0;
}


function draw()
{
	//draw the sky
	background(colors[0]);
    if (sun.y == 70 || sun.y < 230) {
        background(colors[0]);
    } else if (sun.y > 230 && sun.y < 300) {
        background(colors[1]);
    } else {
        background(colors[2]);
    }
    
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);

    // SUN MOVEMENT
    if (sun.y > 530) {
        ySpeed = -ySpeed;
    } else if (sun.y < 70){
        ySpeed = Math.abs(ySpeed);
    }
    sun.y = sun.y + ySpeed;
    
    
    fill(232,232,232);
    ellipse(moon.x, moon.y, moon.diameter);
    
    // MOON MOVEMENT 
    if (moon.y > 530){
        mSpeed = -mSpeed;
    } else if (moon.y < 70){
        mSpeed = Math.abs(mSpeed);
    }
    moon.y = moon.y + mSpeed;
    
    let xPos=350;
    let yPos=350;
    // stars
    if (moon.y < height/2){
        stroke('silver');
        strokeWeight(1)
        line(xPos-293,yPos-29,xPos-280,yPos-39);
        strokeWeight(1.2)
        line(xPos-225,yPos-217,xPos-205,yPos-237);
        strokeWeight(1.1)
        line(xPos+363,yPos-239,xPos+387,yPos-255);
        strokeWeight(1.33)
        line(xPos+94,yPos-100,xPos+127,yPos-113);
        strokeWeight(0.8)
        line(xPos+427,yPos+50,xPos+463,yPos+25);
        strokeWeight(0.33)
        line(xPos-161,yPos+39,xPos-127,yPos+17);
        strokeWeight(1.13)
        line(xPos+367,yPos-93,xPos+407,yPos-117);
        
        // stars
        noStroke();
        fill(248,248,248);
        ellipse(200, 20, 10,10);
        ellipse(450, 240, 10,10);
        ellipse(60, 40,5,5);
        ellipse(660, 70, 10,10);
        ellipse(240, 120, 8,8);
        ellipse(240, 120, 8,8);
        ellipse(550, 300, 5,5);
        ellipse(160, 140, 10,10);
        ellipse(680, 170, 10,10);
        ellipse(50, 30, 10,10);
        ellipse(450, 540, 10,10);
        ellipse(60, 120, 5,5);
        ellipse(550, 30, 10,10);
        ellipse(160, 40, 10,10);
        ellipse(680, 50, 5,5);
        ellipse(380, 250, 5,5);
        ellipse(360, 220, 10,10);
        ellipse(180, 250, 8,8);
    }
    
    for (var i = 0; i < clouds.length; i++) {
        clouds[i].move();
        clouds[i].display();
    }
    
    noStroke();
    
    //draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    
	colorGround = ["#2EC456", "#B8C13A", "#455B4B"];
    if (sun.y == 70 || sun.y < 230) {
        fill(colorGround[0]);
    } else if (sun.y > 230 && sun.y < 300) {
        fill(colorGround[1]);
    } else {
        fill(colorGround[2]);
    }
	rect(0, groundHeight, width, height - groundHeight);8
    
    //draw the tree
//    ellipse(400,350,80,80);
//    ellipse(400,300,100,100);
//    ellipse(400,260,80,80);
//    fill("#BF6230");
//    rect(395,390,20,15);
    Tree(400,350);
    Tree(20,350);
    Tree(700,350);
    Tree(330,350);
    
    
    fill("#BF6230");
    rect(390,390,20,15);
    rect(10,390,20,15);
    rect(690,390,20,15);
    rect(320,390,20,15);
    
    fill(0, 0, 0, darkness+mouseY/8);
    rect(0, 0, 800, 600);
    fill(255, 255, 120, mouseY/4);

}

function Tree(xTree, yTree){
    x = xTree;
    y = yTree;
    
    ellipse(x,y,80,80);
    ellipse(x,y-50,100,100);
    ellipse(x,y-90,80,80);
}

function Cloud(){
  this.x = random(0, width);
  this.y = random(0, height);
  
  this.display = function() {
   stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.x, this.y, 24, 24);
    ellipse(this.x+10,this.y+10,60,24);
    ellipse(this.x+30,this.y+10,60,20);
    ellipse(this.x+30,this.y-10,30,40);
    ellipse(this.x+15,this.y-8,24,24);
    ellipse(this.x+40,this.y,24,24);
  }
  
  this.move = function() {
    this.x = this.x += 0.9 ;
    this.y = this.y + random(-1, 1);
    
    if(this.x >= width){
    this.x = 0;
    }
  }
}

function mouseClick(){
  clouds.push(new Cloud());
}