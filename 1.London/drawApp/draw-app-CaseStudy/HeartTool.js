function heartTool(){
    //set icon and name for tool
	this.icon = "assets/heart.jpg";
	this.name = "Heart";


  // Set initial vars for tool
    var size = 200;
    this.startX = 0;
    this.startY = 0;
    this.isDrawing = false;

  // Draw the heart when the mouse is pressed and dragged
    this.draw = function() {
        if (mouseIsPressed && !this.isDrawing) {
          this.startX = mouseX;
          this.startY = mouseY;
          this.isDrawing = true;
        } else if (mouseIsPressed && this.isDrawing) {
          drawHeart(mouseX, mouseY, 20, 20); 
        } else if (!mouseIsPressed && this.isDrawing) {
          this.isDrawing = false;
        }
      };
    }

function drawHeart(startX,startY, size) {
  beginShape();
  vertex(startX,startY);
  bezierVertex(startX - size / 2,startY - size / 2, startX - size,startY + size / 3, startX,startY + size);
  bezierVertex(startX + size,startY + size / 3,startX + size / 2,startY - size / 2, startX,startY);
  endShape(CLOSE);
}