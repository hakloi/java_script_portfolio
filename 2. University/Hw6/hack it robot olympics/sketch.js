

var finishLineX = 1150;
var robots = [
    {x: 40, y: 50},
    {x: 40, y: 200},
    {x: 40, y: 350},
    {x: 40, y: 500},
    {x: 40, y: 650}
];
var r = [184, 64, 222, 62, 199];
var g = [64, 184, 217, 218, 199];
var b = [164, 90, 62, 222, 199];
function setup() {
    createCanvas(1200, 774);
}

function draw() {
    background(200, 100, 0);

    strokeWeight(7);
    stroke(255);
    line(finishLineX, 0, finishLineX, height);
    line(0, robots[0].y - 20, width, robots[0].y - 20);


    var speeds = [random(1,10), random(1,10), random(1,10), random(1,10),random(1,10)];
  
    for (var i = 0; i < robots.length; i++) {
        robots[i].x += speeds[i];

    //draw the robots
    strokeWeight(2);
    stroke(0);

    fill(r[i], g[i], b[i]); 
    rect(robots[i].x, robots[i].y, 100, 100, 10);

    //ears
    fill(255, 0, 0);
    rect(robots[i].x - 7, robots[i].y + 30, 10, 33);
    rect(robots[i].x + 97, robots[i].y + 30, 10, 33);

    //robots' antennas
    fill(250, 250, 0);
    ellipse(robots[i].x + 50, robots[i].y - 7, 10, 10);

    fill(200, 0, 200);
    rect(robots[i].x + 40, robots[i].y - 3, 20, 10);

    //eyes
    fill(255);
    ellipse(robots[i].x + 25, robots[i].y + 30, 26, 26);
    point(robots[i].x + 25, robots[i].y + 30);
    ellipse(robots[i].x + 75, robots[i].y + 30, 26, 26);
    point(robots[i].x + 75, robots[i].y + 30);

    //robots' noses
    fill(255, 0, 0);
    triangle(robots[i].x + 50, robots[i].y + 35, robots[i].x + 35, robots[i].y + 60, robots[i].x + 65, robots[i].y + 60);

    //robot 1 mouth
    noFill();
    beginShape();
    vertex(robots[i].x + 28, robots[i].y + 75);
    vertex(robots[i].x + 36, robots[i].y + 85);
    vertex(robots[i].x + 42, robots[i].y + 75);
    vertex(robots[i].x + 50, robots[i].y + 85);
    vertex(robots[i].x + 58, robots[i].y + 75);
    vertex(robots[i].x + 66, robots[i].y + 85);
    vertex(robots[i].x + 74, robots[i].y + 75);
    endShape();

    //draw the lower line marker for this lane
    strokeWeight(7);
    stroke(255);
    line(0, robots[i].y + 120, width, robots[i].y + 120);

      
      if (robots[i].x + 100 >= finishLineX) {
          textSize(55);
          textFont('Georgia');
          textStyle(NORMAL);
          stroke(1);
          strokeWeight(2);
          fill(0, 220, 20);
          text("Robot "+ (i+1) + " won!", 400, 400);
          noLoop();
      }
  }
}