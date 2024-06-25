function setup()
{
	createCanvas(900, 900);
    background(100, 100, 100);
}

function draw()
{
    noStroke();
    
    //1
    fill('#ededed');
    rect(0, 0, 300, 300);
    strokeWeight(5);
    fill(0);
    generateRandomColor();
    drawCharacter();
    
    
    noStroke();
    //2
    translate(300, 0);
    fill('#fdfc74');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
        
    noStroke();
    //3
    translate(300, 0);
    fill('#1fcecb');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();

    noStroke();
    //4
    translate(0, 300);
    fill('#ff1dce');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
    
    noStroke();
    //5
    translate(0, 300);
    fill('#1df914');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
    
    noStroke();
    //6
    translate(-300,0);
    fill('#fc2847');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
        
    noStroke();
    //7
    translate(-300,0);
    fill('#7442c8');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
    
    noStroke();
    //8
    translate(0, -300);
    fill('#232323');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
    
    noStroke();
    //9
    translate(300, -0);
    fill('#0000ff');
    rect(0, 0, 300, 300);
    generateRandomColor();
    drawCharacter();
}

function drawCharacter() {
    stroke(0)
    strokeWeight(1);
        
    // JACKET COLOR
    fill(r2,g2,b2);
    beginShape();
    vertex(80,280);
    vertex(70,240);
    vertex(80,230);
    vertex(145,240);//65
    vertex(210,240);
    vertex(220,250);
    vertex(210,280);
    endShape();
        
    //NECK COLOR + head
    fill(r, g, b);
    beginShape();
    vertex(135,225);
    vertex(135,250);
    vertex(145,260);
    vertex(155,250);
    vertex(155,225);
    endShape();
        
    //HEAD 
    beginShape();
    vertex(145,110);
    vertex(80,130);
    vertex(95,200); //50
    vertex(145,230);
    vertex(195,200);
    vertex(205,130);
    vertex(145,110);
    endShape();
    
    // WRINKLES
    //left
    arc(120, 172, 40, 15, 0, PI);
    arc(120, 165, 40, 20, 0, PI);
    
    //right
    arc(175, 172, 40, 15, 0, PI);
    arc(175, 165, 40, 20, 0, PI);
        
    //NOSE
    beginShape();
    vertex(143,175);
    vertex(142,188);
    endShape();
        
    //MOUTH COLOR NEEDED
    fill(260,260,260);
    beginShape();
    vertex(150,199);
    vertex(130,208);
    vertex(160,208);
    vertex(150,199);
    endShape();
        
    beginShape();
    vertex(145,202);
    vertex(145,208);
    endShape();

    beginShape();
    vertex(152,201);
    vertex(152,208);
    endShape();
        
        //EYES
        //left
    fill(r, g, b);
    beginShape();
    vertex(100,160);
    vertex(140,155);
    endShape();
    ellipse(120,165,7,7);
        
    beginShape();
    vertex(100,150);
    vertex(140,145);
    vertex(140,140);
    endShape();
        
        //left
    beginShape();
    vertex(155,155);
    vertex(195,160);
    endShape();
        
    beginShape();
    vertex(155,145);
    vertex(155,150);
    vertex(195,145);
    endShape();
        
    ellipse(171,165,7,7);
        
    //HAIR COLOR
    fill(h1,h2,h3);
    beginShape();
    vertex(80,90);
    vertex(60,110);
    vertex(60,180);
    vertex(80,210);
    vertex(90,190);
    vertex(90,220);
    vertex(100,230);
    vertex(100,130);
    vertex(130,120);
    vertex(135,160);
    vertex(145,170);
    vertex(145,140);
        vertex(150,148);
        vertex(160,130);
        vertex(190,140);
        vertex(190,230);
        vertex(200,220);
        vertex(200,180);
        vertex(210,200);
        vertex(230,180);
        vertex(230,130);
        vertex(220,100);
        vertex(170,80);
        vertex(160,85);
        vertex(150,80);
        vertex(100,80);
        vertex(80,90);
        endShape();
        
        //pupils
        fill(0,0,0);
        ellipse(122,165,5,5);
        ellipse(173,165,5,5);
        
        noStroke();
        textSize(32);
        textStyle(BOLD);
        fill(0,0,0);
        text("私はつかれた",60,50);
    
    }

function generateRandomColor() {
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    
    r2 = Math.floor(Math.random() * 256);
    g2 = Math.floor(Math.random() * 256);
    b2 = Math.floor(Math.random() * 256);
    
    h1 = Math.floor(Math.random() * 256);
    h2= Math.floor(Math.random() * 256);
    h3 = Math.floor(Math.random() * 256);

}