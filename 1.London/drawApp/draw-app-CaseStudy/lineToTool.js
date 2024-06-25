function LineToTool(){
    //set icon and name for tool
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    //set initial vars for tool
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

        //set mouseX to our initial vars and enable drawing func
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
                //we get access to pixels/ array
				loadPixels();
			}

			else{
                //after changes in pixels' array
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

        // Reset the starting point to indicate that no line is being drawn
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
