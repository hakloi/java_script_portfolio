//Hack it - we are the robot family

//TASK 1. modify the code so that all three robots are drawn
//TASK 2. try changing the numbers to create your robot family
//TASK 3. create more arrays and use the values in them to add more variation to the robots

var robotColors = [ '#DBD8AE', '#EAF4D3'];
var optionalColors = ['#994636', '#895B1E']
var earsColors = ['#9DC8EC', '#CCD3F9', '#1DB487'];

var armSizes = [40, 50, 60]; 
var legSizes = [40, 60, 50]; 
var eyeSizes = [13, 5, 6]; 

var robotWidths;
var robotHeights;
var headWidths;

function setup()
{
	//create a canvas for the robot
	createCanvas(1000, 700);
    robotWidths = [70,20,90];
    robotHeights = [90,140,50];
    headWidths = [1,0.6,0.6];
    noseWidths = [0.7,0.8,1.2];
}

function drawRobot(robotColors, optionalColors,earsColors, width, height, headWidth, noseWidth, eyeSizes) {
    translate(200,0);
    fill(robotColors);
    rect(-width/2, -height - 130, width, 130);
    rect(-70, -height - 130, 30, 100);
    rect(40,  -height - 130, 30, 100);
    rect(-30, -height, 30, height);
    rect(0,  -height, 30, height);
  
    //heads

    rect(-50*headWidth, -height - 230, 100*headWidth, 100, 10);
    fill(optionalColors);
    rect(-5*noseWidth, -height - 180, 10*noseWidth, 10, 10);
    
    //ears
    fill(earsColors);
    rect(-50 * headWidth - 10, -height - 200, 10, 33);
    rect(50 * headWidth, -height - 200, 10, 33);

    //antennas
    strokeWeight(2);
    line(-50 * headWidth , -height - 220, -30 * headWidth - 5, -height - 260); // left 
    line(50 * headWidth , -height - 220, 30 * headWidth + 5, -height - 260); // right 
    
    // eyes
    fill('purple');
    ellipse(-8 * headWidth, -height - 200, eyeSizes, eyeSizes-10); // left
    ellipse(8 * headWidth, -height - 200, eyeSizes, eyeSizes); // right

    // mouth
    fill('lightblue');
    rect(-5 * noseWidth, -height - 180 + 20, 10 * noseWidth, 40); 
}


function draw()
{
	strokeWeight(2);
    translate(0, 400);

    // 1
    drawRobot(robotColors[0], optionalColors[0], earsColors[0],robotWidths[0], robotHeights[0], headWidths[0], noseWidths[0], eyeSizes[0]);

    // 2
    drawRobot(robotColors[1], optionalColors[0], earsColors[1], robotWidths[1], robotHeights[1], headWidths[1], noseWidths[1], eyeSizes[1]);

    // 3
    drawRobot(robotColors[0],optionalColors[1], earsColors[2],robotWidths[2], robotHeights[2], headWidths[2], noseWidths[2], eyeSizes[2]);
//    
//    //ROBOT 1 body
//    translate(200,0);
//
//    fill(robotColors[0]);
//    rect(-robotWidths[0]/2, -robotHeights[0] - 130, robotWidths[0], 130);
//    rect(-70, -robotHeights[0] - 130, 30, 100);
//    rect(40,  -robotHeights[0] - 130, 30, 100);
//    rect(-30, -robotHeights[0], 30, robotHeights[0]);
//    rect(0,  -robotHeights[0], 30, robotHeights[0]);
//
//    //robot heads
//    rect(-50* headWidths[0], -robotHeights[0] - 230, 100* headWidths[0], 100, 10);
//
//    
//    //ears
//    fill(robotColors[0]);
//    rect(-50 * headWidths[0] - 10, -robotHeights[0] - 200, 10, 33);
//    rect(50 * headWidths[0], -robotHeights[0] - 200, 10, 33);
//
//    //robots' antennas
//    fill(250, 250, 0);
//    ellipse(0, -robotHeights[0] - 237, 10, 10);
//    fill(200, 0, 200);
//    rect(-10, -robotHeights[0] - 233, 20, 10);
//
//    //robot's eyes
//    fill(255)
//    ellipse(-25 * headWidths[0], -robotHeights[0] - 200, 26, 26);
//    point(-25 * headWidths[0], -robotHeights[0] - 200);
//    ellipse(25 * headWidths[0], -robotHeights[0] - 200, 26, 26);
//    point(25 * headWidths[0], -robotHeights[0] - 200);
//
//    //robots' nose
//    fill(255, 0, 0);
//    triangle(0, -robotHeights[0] - 190, -15, -robotHeights[0] - 170,15, -robotHeights[0] - 170);
//
//    //robot mouth
//    noFill();
//    beginShape();
//    vertex(-23, -robotHeights[0] - 155);
//    vertex(-15, -robotHeights[0] - 145);
//    vertex(-9, -robotHeights[0] - 155);
//    vertex(-1, -robotHeights[0] - 145);
//    vertex(7, -robotHeights[0] - 155);
//    vertex(15, -robotHeights[0] - 145);
//    vertex(23, -robotHeights[0] - 155);
//    endShape();
//    
//        
    

}