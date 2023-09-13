function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
    background(255,255,100);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(12);

	//draw the red rectangle 
	rect(210, 0, 600, 600);
    
    fill(255,250,250);
    rect(0,0,200,250);
    
    fill(0,0,0);
    rect(0,250,200,40);
    
    fill(255,250,250);
    rect(0,300,200,300);
    
    fill(0,0,0);
    rect(0,600,800,20);
    
    fill(65,105,225);
    rect(0,620,200,200);
    
    fill(255,250,250);
    rect(210,620,490,500);
    
    fill(250,255,255);
    rect(720,620,100,100);
    
    fill(0,0,0)
    rect(700,630,20,200);
}