var robots = [];

function setup()
{
	createCanvas(1000, 1000);
	//lists of first and second names to select from
	fillRobots();

	background(20);
	for (var i = 0; i < robots.length; i++)
	{
		drawRobot(robots[i].physical);
	}

	    
	//2. Add to the above so it stops printing names if you find a robot with the surname Katan. Highlight the robot in green
    for (var i = 0; i < robots.length; i++) {
    if (robots[i].secondName === 'Katan') {
      console.log(robots[i].firstName, robots[i].secondName);
      highlight(robots[i].physical, 0, 128, 0);
      break; 
    }
    console.log(robots[i].firstName, robots[i].secondName);
  }


	//3. Select the robot with the highest IQ and highlight it in blue. Also, print it's name to the console
    var highest_iq_id = robots[0];
    for (var i = 0; i < robots.length; i++) {
      if (robots[i].iq > highest_iq_id.iq) {
        highest_iq_id = robots[i];
        highlight(robots[i].physical, 0, 150, 255);
      }
    }
    console.log('Robot with the highest IQ:', highest_iq_id.firstName, highest_iq_id.secondName, highest_iq_id.iq);

    

	//4. Select the robot with the smallest serial number and highlight it in purple, Also, print it's name to the console
    var smallest_serial_id = robots[0];
    for (var i = 0; i < robots.length; i++) {
      if (robots[i].serialNumber < smallest_serial_id.serialNumber) {
        smallest_serial_id = robots[i];
      }
    }
    highlight(smallest_serial_id.physical, 153, 51, 255);
    console.log('Robot with the smallest serial number', smallest_serial_id.firstName, smallest_serial_id.secondName, smallest_serial_id.serialNumber);

	//5. Find the robot who want to "destroy humanity" highlight it in red. Also, print it's name to the console
    for (var i = 0; i < robots.length; i++)
	{
		if (robots[i].abilities.includes('destroy humanity')) {
            console.log('Robot who wants to destroy humanity:', robots[i].firstName, robots[i].secondName);
            highlight(robots[i].physical, 204, 0, 0);
        }
	}
    

	//6. Find any robot whose face is narrower than 70 and highlight it in yellow. Also, print it's name to the console
    for (var i = 0; i < robots.length; i++)
	{
		if (robots[i].physical.headWidth < 70) {
            console.log('Robot with a face narrower than 70:', robots[i].firstName, robots[i].secondName);
            highlight(robots[i].physical, 254, 243, 96);
        }
	}

}

function highlight(robot, r, g, b)
{
	push()
	stroke(r, g, b);
	strokeWeight(4);
	noFill();
	rect(robot.x, robot.y, 120, 120);
	pop();
}


function fillRobots()
{
	var firstNames = ["Asad", "Agatha", "Benny", "Beau", "Carol", "Colin", "Data", "Delia", "Edward", "Ethal", "Freddy", "Fiona", "Georgina", "Greg", "Hal", "Holly", "Ishmail", "India", "Jamie", "Joanna", "Kym", "Kelly", "liam", "Leanne", "Marvin", "Michaela", "Nicholas", "Niamh", "Oscar", "Olivia", "Quentin", "Queenie", "Richard", "Rebecca", "Simon", "Simone", "Thomas", "Tilly", "Ulysses", "Ursula", "Vinny", "Violet", "William", "Winifred", "Xander", "Xanthe", "Yves", "Yvonne", "Zach", "Zara"];

	var secondNames = ["Anstead", "Brown", "Chan", "Depp", "English", "Forth", "Goodwin", "Holmes", "Iqbal", "Jameson", "Katan", "Lingard", "Munster", "Nicoles", "Oscar", "Quest", "Reagan", "Shiffman", "Tolworth", "Underwood", "Venn", "Walsh", "Xu", "Young", "Zerdin"]

	//fill the robots array
	for (var i = 0; i < 64; i++)
	{
		//give the robot a random name
		var fn = firstNames[parseInt(random(0, firstNames.length - 1))];
		var sn = secondNames[parseInt(random(0, secondNames.length - 1))];

		//set the robots unique skills - deduct randomly from the list so the robot has 4 skills
		var abilities = ["clean house", "make bed", "babysit", "cook", "school run", "laundry", "grow vegetables", "charity work", "darn socks", "do shopping", "take out rubbish", "feed the cat", "mow lawn", "paint fence"];
		while (abilities.length > 4)
		{
			abilities.splice(random(0, abilities.length), 1);
		}

		//add the robot to the robots array setting random properties for remaining values
		robots.push(
		{
			firstName: fn,
			secondName: sn,
			iq: round(random(300, 3000)),
			serialNumber: round(random(10000, 100000)),
			abilities: abilities,
			physical:
			{
				r: round(random(0, 255)),
				g: round(random(0, 255)),
				b: round(random(0, 255)),
				headWidth: round(random(60, 100)),
				x: 20 + i % 8 * 120,
				y: 20 + floor(i / 8) * 120
			}

		})
	}

	//pick a random robot and make them go rouge
	robots[round(random(0, robots.length - 1))].abilities.splice(random(0, 4), 1, "destroy humanity");
}

//draw a single robot to the canvas
//takes a robots physical object and it's first and last name argument
function drawRobot(physical)
{
	//draw the robots
	strokeWeight(2);
	stroke(0);

	//set a drawing x and y for the robot that ensure it's drawn in the cente of the
	//grid cell
	var x = physical.x + 10 + (100 - physical.headWidth) / 2;
	var y = physical.y + 10;

	//robot head
	fill(physical.r, physical.g, physical.b);
	rect(x, y, physical.headWidth, 100);

	//ears
	fill(physical.g, physical.r, physical.b);

	rect(x - 7, y + 30, 10, 33);
	rect(x + physical.headWidth - 3, y + 30, 10, 33);

	//robots' antennas
	fill(250, 250, 0);
	ellipse(x + physical.headWidth * 0.5, y - 7, 10, 10);

	fill(255 - physical.r, 255 - physical.g, 255 - physical.b);
	rect(x + physical.headWidth * 0.5 - 10, y - 3, 20, 10);
	//
	//eyes
	fill(255);
	ellipse(x + physical.headWidth * 0.25, y + 30, 26, 26);
	point(x + physical.headWidth * 0.25, y + 30);
	ellipse(x + physical.headWidth * 0.75, y + 30, 26, 26);
	point(x + physical.headWidth * 0.75, y + 30);


	//robots' noses
	fill(255, 0, 0);
	triangle(x + physical.headWidth * 0.5, y + 35, x + physical.headWidth * 0.35, y + 60, x + physical.headWidth * 0.65, y + 60);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(x + physical.headWidth * 0.28, y + 75);
	vertex(x + physical.headWidth * 0.36, y + 85);
	vertex(x + physical.headWidth * 0.42, y + 75);
	vertex(x + physical.headWidth * 0.50, y + 85);
	vertex(x + physical.headWidth * 0.58, y + 105);
	vertex(x + physical.headWidth * 0.66, y + 85);
	vertex(x + physical.headWidth * 0.74, y + 75);
	endShape();
}