let lives;
var flagpole;

var new_floor;
var floorPos_y;
var collectable;
var mountain;
var cloud;

let enemyPlayed = false;
let isKilled = false;

let charJumpPosStart; 
let charJumpPosCurrent; 

var scroll;

var song;
let enemySound;
let gameOverSound;
let bite;
var soundPlayed = false;

var platform =[];
let carrot = [];

function preload(){
    soundFormats('mp3', 'ogg');
    enemySound = loadSound('sounds/enemy.mp3');
    gameOverSound = loadSound('sounds/end.mp3');
    bite = loadSound('sounds/bite.mp3');
    song = loadSound("sounds/music.mp3");
    song.setVolume(0.5);
    button = createButton("Music");
    button.position(20,85);
    button.mousePressed(changeSound);
    button.style('border-radius', '7px'); 
    button.style('background-color', 'pink');
    Alex = loadFont('font/Alexander.otf');
}

function setup(){
	createCanvas(800, 576);
    floorPos_y = 432;
    lives = 3;
    startGame();
}

function startGame(){
    new_floor = floorPos_y;
    soundPlayed = false;
    isKilled = false;
    scroll = 0;
    
    carrot = [];
    
    vars = {
        score_x: 20,
        score: 0,
        lives_x: 20,
        end_x: 220,
    }
    
    platform = [
        {x: 140, y: 290, w: 70, h: 20},
        {x: 330, y: 250, w: 70, h: 20},
        {x: 560, y: 250, w: 70, h: 20},
        {x: 760, y: 290, w: 70, h: 20},
        {x: -940, y: 290, w: 70, h: 20},
        {x: -1130, y: 230, w: 70, h: 20},
    ]
    
    fires = [
        {x: 400, y: 400, r: 30},
        {x: 900, y: 380, r: 40},
        {x: -900, y: 380, r: 30},
        {x: 2000, y: 370, r: 45},
        {x: 1700, y: 370, r: 50},
        {x: -1700, y: 370, r: 50},
    ]
    
    list_cloud = [ 
        { x: 100, y: 200, size: 50 },
        { x: 300, y: 100, size: 80 },
        { x: 600, y: 300, size: 60 },
        { x: 900, y: 250, size: 60 },
        { x: -200, y: 250, size: 60 }
    ];
    
    list_mountains = [
        {x1: 390, y1: 432, x2: 512, y2: 100, x3: 612, y3: 432},
        {x1: 990, y1: 432, x2: 1112, y2: 200, x3: 1312, y3: 432},
        {x1: - 390, y1: 432, x2: -1112, y2: 200, x3: -1312, y3: 432}];
    
    list_canyon = [
        {x:-50,y:432,w:80,h:height/4},{x:450,y:432,w:80,h:height/4},{x:1130,y:432,w:80,h:height/6},
        {x:1600,y:432,w:80,h:height/4},{x:230,y:432,w:80,h:height/6},
        {x:-1330,y:432,w:70,h:height/4},
        {x:-1030,y:432,w:70,h:height/4},
        {x:-750,y:432,w:80,h:height/4}
    ];
    
    tree = {
        x:820,
        y:342,
        tr_w:width/2,
        tr_h:height/2
    };
    
    player = {
        x:140,
        y:floorPos_y, //432
        isLeft: false,
        isRight: false,
        isFalling: false,
        isPlummeting: false,
        hasFallen: false,
        onPlatform: false,
        canJump: true, 
        charJumping:false, 
        
        jumpRight() {
            fill(255, 200, 0);
            ellipse(player.x+5, player.y-60, 20, 20);
            ellipse(player.x+5, player.y-42, 23, 23);
            ellipse(player.x+5, player.y-25, 26, 26);
            //ноги
            ellipse(player.x+5, player.y-3, 10, 10);
            fill(0);// глаза 
            ellipse(player.x+7, player.y-60, 5, 5);
            //нос
            fill(255, 69, 0);
            triangle(player.x+25, player.y-61, player.x+14, player.y-63, player.x+14, player.y-57);
            //руки
            fill(0);
            rect(player.x+5, player.y-50, 2, 20);
        },

        jumpLeft() {
            fill(255, 200, 0);
            ellipse(player.x-5, player.y-60, 20, 20);
            ellipse(player.x-5, player.y-42, 23, 23);
            ellipse(player.x-5, player.y-25, 26, 26);
            //ноги
            ellipse(player.x-5, player.y-3, 10, 10);
            fill(0);// глаза 
            ellipse(player.x-7, player.y-60, 5, 5);
            //нос
            fill(255, 69, 0);
            triangle(player.x-25, player.y-61, player.x-14, player.y-63, player.x-14, player.y-57);
            //руки
            fill(0);
            rect(player.x-5, player.y-50, 2, 20);
        },

        standLeft(){
                noStroke();
                fill(0);
                line(player.x+15, player.y-20, player.x+5, player.y-20, 30);
                fill(255, 200, 0);
                ellipse(player.x, player.y-55, 20, 20);
                ellipse(player.x, player.y-37, 23, 23);
                ellipse(player.x, player.y-20, 26, 26);
                //ноги
                ellipse(player.x, player.y-7, 10, 10);
                fill(0);// глаза 
                ellipse(player.x-5, player.y-57, 5, 5);
                //нос
                fill(255, 69, 0);
                triangle(player.x-20, player.y-56, player.x-9, player.y-58, player.x-9, player.y-52);
                //руки
                fill(0);
                rect(player.x, player.y-45, 2, 20);
            },

        standRight(){
                fill(0);
                line(player.x-10, player.y-20, player.x-5, player.y-20, 30);
                line(player.x+15, player.y-20, player.x+5, player.y, 30);
                fill(255, 200, 0);
                ellipse(player.x, player.y-55, 20, 20);
                ellipse(player.x, player.y-37, 23, 23);
                ellipse(player.x, player.y-20, 26, 26);
                //ноги
                ellipse(player.x, player.y-7, 10, 10);
                fill(0);// глаза 
                ellipse(player.x+5, player.y-57, 5, 5);
                //нос
                fill(255, 69, 0);
                triangle(player.x+20, player.y-56, player.x+9, player.y-58, player.x+9, player.y-52);
                //руки
                fill(0);
                rect(player.x, player.y-45, 2, 20);
            },

        standFront(){
                noStroke();
                fill(0); //hands
                rect(player.x-25, player.y-40, 50, 3)
                fill(255, 200, 0);
                ellipse(player.x, player.y-55, 20, 20);
                ellipse(player.x, player.y-37, 23, 23);
                ellipse(player.x, player.y-20, 26, 26);
                ellipse(player.x+9, player.y-7, 10, 10);
                ellipse(player.x-9, player.y-7, 10, 10);
                fill(0); // глаза 
                ellipse(player.x-5, player.y-57, 5, 5);
                ellipse(player.x+5, player.y-57, 5, 5);
                //нос
                fill(255, 69, 0);
                ellipse(player.x, player.y-54, 3, 3);
        },

        jumpFront(){
                fill(0);//hands
                rect(player.x-25, player.y-45, 50, 3)
                fill(255, 200, 0);
                ellipse(player.x, player.y-60, 20, 20);
                ellipse(player.x, player.y-42, 23, 23);
                ellipse(player.x, player.y-25, 26, 26);
                ellipse(player.x+9, player.y-7, 10, 10);
                ellipse(player.x-9, player.y-7, 10, 10);
                fill(0);// глаза 
                ellipse(player.x-5, player.y-62, 5, 5);
                ellipse(player.x+5, player.y-62, 5, 5);
                //нос
                fill(255, 69, 0);
                ellipse(player.x, player.y-60, 3, 3);
        },
        playerDead() {
            if (player.y > height && !player.hasFallen) { 
                lives--;
                player.hasFallen = true;
            if (lives > 0) {
                startGame();
                player.hasFallen = false;
                player.isFalling = false;
                player.isPlummeting = false;
            }
          }
        }
        
    };
    
    list_carrot = [
        {x: round(random(200,2000)), y: 420}, 
        {x: round(random(-200,600)), y: 320}, 
        {x: round(random(-600,600)), y: 420}, 
        {x: round(random(200,600)), y: 220},
        {x: round(random(1200,1600)), y: 220},
        {x: round(random(-1200,600)), y: 220},
        {x: round(random(-200,600)), y: 220},
        {x: round(random(-200,2000)), y: 420},
    ]

    for (let i = 0; i < list_carrot.length; i++) {
        let carr = {
            x: list_carrot[i].x,
            y: list_carrot[i].y,
            isFound: true
        };
        carrot.push(carr);
    }
    
    trees_x = [90,300,850,1200,-100,-250, -400, -680];    
    flagpole = [
        {x:1900, isReached: false}
    ];
}

function draw(){
    background(100, 155, 255); 
    translate(scroll,0);
    push();
    
	fill(0, 155, 0);
	rect(0, new_floor, 2000, height);
    rect(0, new_floor, -2000, height);
    
    // falling from edges
    if (player.x < -2000 || player.x  > 2000|| player.y  > height) {
        player.isPlummeting = true;
    }
    
    drawLevel();
    //fires-enemies
    for (let i = 0; i < fires.length; i++) {
        fires[i].x += random(-3, 2);
        drawFires(fires[i]);
        // проверка столкновения
        checkCollision(fires[i], player);
    }
    
    // platform
    for (let i = 0; i < platform.length; i++) {
      drawPlatform(platform[i]);
    }

    for (let i = 0; i < platform.length; i++) {
      if (checkPlatform(platform[i], player)) {
        player.onPlatform = true;
        break;
      } else {
        player.onPlatform = false;
      }
    }

    if (!player.onPlatform) {
      floorPos_y = 432;
    }
    
    pop();

    movementController();
    updateJump();
    player.playerDead();

    if (lives < 1 ) {
        if(!soundPlayed){
            gameOverSound.play();
            soundPlayed = true;
        }
        textSize(50);
        textFont(Alex);
        fill(0);
        text("Game over.\nPress space to restart", vars.end_x, height/3);
    }
}

function drawLevel(){
    //canyon
    for(let i = 0; i<list_canyon.length;i++){
        drawCanyon(list_canyon[i]);
        if (player.x > list_canyon[i].x  && player.x < list_canyon[i].x + list_canyon[i].w && player.y >= floorPos_y) {
            player.isPlummeting = true;
        }
        if (player.isPlummeting == true){
            player.y +=1;
        }
        // jump over
        if (player.x > list_canyon[i].x  && player.x < list_canyon[i].x + list_canyon[i].w && player.y === floorPos_y) {
            player.isPlummeting = false;
        }

        if (player.x > list_canyon[i].x  && player.x < list_canyon[i].x + list_canyon[i].w && player.y === floorPos_y && !player.isFalling) {
            player.isPlummeting = false;
            player.x -= 1;
        }
    }
    
    //cloud
    drawCloud();
    //tree
    drawTrees();
	//Mountains
    drawMountains();
    
    // collectable
    for (let i = 0; i < carrot.length; i++) {
        let carr = carrot[i];
        if (carr.isFound == true) {
            drawCollectable(carr.x, carr.y);
            if (dist(player.x, player.y, carr.x+20, carr.y) <= 60) {
                carr.isFound = false;
                if (carr.isFound==false){
                    vars.score++;
                    bite.play();
                }
            }
        }
    }
    
    fill(43,49,10);
    textFont(Alex);
    textSize(25);
	text("Carrots: " + vars.score, vars.score_x, 40);
    text("Lives: " + lives, vars.lives_x, 70);
    
    for (let i = 0; i < flagpole.length; i++) {
        checkFlagpole(flagpole[i]);
    }
}
    
function checkFlagpole(flagpole) {
        if (!flagpole.isReached) {
            fill(255);
            rect(flagpole.x, new_floor - 45, 5, 45);
            fill(255);
            triangle(
                flagpole.x - 20,
                new_floor - 45,
                flagpole.x + 5,
                new_floor - 45,
                flagpole.x + 5,
                405
            );
        } else {
            fill(0);
            rect(flagpole.x, new_floor - 45, 5, 45);
            fill(0);
            triangle(
                flagpole.x - 20,
                new_floor - 45,
                flagpole.x + 5,
                new_floor - 45,
                flagpole.x + 5,
                405
            );
        }

        if (dist(player.x, player.y, flagpole.x, 440) <= 50) {
            flagpole.isReached = true;
            fill(0);
            textSize(50);
            textFont(Alex);
            text("Level complete!\nThank you for playing!", vars.end_x, height / 3);
            player.isRight = false;
            player.isLeft = false;
            keyPressed = false;
        }

        return flagpole.isReached;
    }

function drawCollectable(x, y){
    noStroke();
    fill(255, 69, 0);
    triangle(x+40, y-30,x+20, y+10,x+60,y-30);
    fill(0, 255, 0);
    triangle(x+50, y-40,x+50, y-30, x+60, y-40);
}

function movementController() {
  var pr_end_x = vars.end_x;
  var pr_score_x = vars.score_x;
  var pr_lives_x = vars.lives_x;
  var pr_scroll = scroll;

  if (!player.isRight && !player.isLeft && !player.isFalling)
    player.standFront();
  if (player.isFalling) {
    if (player.isRight) player.jumpRight();
    if (player.isLeft) player.jumpLeft();
    if (!player.isRight && !player.isLeft) player.jumpFront();
  }
  if (player.isLeft) {
    if (!player.isFalling) player.standLeft();
    vars.score_x -= 5;
    vars.lives_x -= 5;
    vars.end_x -= 5;
    player.x -= 5;
    scroll += 5;
  }
  if (player.isRight) {
    if (!player.isFalling) player.standRight();
    vars.score_x += 5;
    vars.lives_x += 5;
    vars.end_x += 5;
    player.x += 5;
    scroll -= 5;
  }

  if (player.isPlummeting) {
    player.isLeft = false;
    player.isRight = false;
    vars.end_x = pr_end_x;
    scroll = pr_scroll;
    vars.score_x = pr_score_x;
    vars.lives_x = pr_lives_x;
  }

  if (player.y < floorPos_y) {
    player.y += 5;
    player.isFalling = true;
  } else {
    player.isFalling = false;
  }
}

function drawPlatform(platform) {
    fill(89,197,199);
    rect(platform.x, platform.y, platform.w, platform.h); 
}
function checkPlatform(platform, player) {
  const offsetChar = 8;
  
  // Проверка на нахождение персонажа в границах платформы
  if (
    player.x + offsetChar >= platform.x &&
    player.x - offsetChar <= platform.x + platform.w &&
    player.y <= platform.y + platform.h &&
    player.y >= platform.y
  ) {
    player.isFalling = false;
    player.isPlummeting = false;
    floorPos_y = platform.y - (platform.h + 5);
    return true;
  }
  
  return false;
}

function drawCloud(){
    fill(255);
    noStroke();
    for(let i = 0; i<list_cloud.length;i++){
        fill(230, 230, 250);
        ellipse(list_cloud[i].x, list_cloud[i].y, list_cloud[i].size + 20, list_cloud[i].size);
        ellipse(list_cloud[i].x + 65, list_cloud[i].y - 10, list_cloud[i].size + 20, list_cloud[i].size);
        ellipse(list_cloud[i].x + 40, list_cloud[i].y + 20, list_cloud[i].size + 20, list_cloud[i].size);
        ellipse(list_cloud[i].x + 30, list_cloud[i].y - 40, list_cloud[i].size + 20, list_cloud[i].size);
    }
}

function drawMountains(){
    for(let i =0; i<list_mountains.length;i++){
        fill(47, 79, 79);
        triangle(list_mountains[i].x1 + 20, list_mountains[i].y1, list_mountains[i].x2 + 20, list_mountains[i].y2, list_mountains[i].x3 + 30, list_mountains[i].y3);
        triangle(list_mountains[i].x1 - 20, list_mountains[i].y1, list_mountains[i].x2 - 20, list_mountains[i].y2, list_mountains[i].x3 - 30, list_mountains[i].y3);
        fill(105, 105, 105);
        triangle(list_mountains[i].x1, list_mountains[i].y1, list_mountains[i].x2, list_mountains[i].y2 + 20, list_mountains[i].x3, list_mountains[i].y3);
    }
}

function drawTrees(){
    for(let i =0; i<trees_x.length;i++){
       fill(139, 50, 19);
        rect(trees_x[i], tree.y, 20, 90);
        fill(34, 139, 34);
        ellipse(trees_x[i] + 10 ,tree.y - 70, 150, 150);
    } 
	
}

function drawFires(f) {
//    noStroke();
    fill('#800909');
    ellipse(f.x, f.y, f.r, f.r);
    beginShape();
    vertex(f.x,f.y+f.r);
    vertex(f.x-f.r/2,f.y+f.r/2);
    vertex(f.x-f.r/2-5,f.y-f.r+20);
    vertex(f.x,f.y+5);
    endShape();
    fill('#fdcf58');
    beginShape();
    vertex(f.x, f.y - f.r);
    vertex(f.x + f.r / 2, f.y + f.r / 2);
    vertex(f.x + f.r / 2 + 5, f.y - f.r + 20);
    vertex(f.x, f.y + 5);
    endShape();
    fill('#f27d0c');
    beginShape();
    vertex(f.x,f.y);
    vertex(f.x-10,f.y-10);
    vertex(f.x-5,f.y-f.r);
    endShape();
    fill('#f27d0c');
    beginShape();
    vertex(f.x, f.y);
    vertex(f.x - 5, f.y + 10);
    vertex(f.x , f.y + f.r);
    endShape();
    fill(0);
    ellipse(f.x-f.r/4,f.y, f.r/8,f.r/8)
    ellipse(f.x+f.r/4,f.y, f.r/8,f.r/8)
    fill(255)
    rect(f.x-f.r/4,f.y+f.r/4,f.r/2,f.r/20)
    
}

function drawCanyon(t_canyon){
        fill(160, 82, 45);
        rect(t_canyon.x +5, t_canyon.y, t_canyon.w + 5 , 200);
        fill(139, 69, 19);
        rect(t_canyon.x + 5 , t_canyon.y, t_canyon.w-60, 200);
        rect(t_canyon.x+70, t_canyon.y, t_canyon.w-60, 200);
        //вода
        fill(0, 0, 128);
        rect(t_canyon.x+25, t_canyon.y+40, t_canyon.w-35, 200);
}

function checkCollision(enemy, player) {
   let distance = dist(enemy.x, enemy.y, player.x, player.y);
   if (distance <= enemy.r/2 || distance < 70){
       if(!enemyPlayed){
           enemySound.play();
           enemyPlayed = true;
       } 
       lives = 1;
       player.isRight = false;
       player.isLeft = false;
       player.isPlummeting = true;
       player.canJump = false;
   } else {
       enemyPlayed = false;
   }
}

function updateJump() {
  if (player.charJumping) {
    charJumpPosCurrent -= 10;
    
    if (charJumpPosCurrent <= charJumpPosStart - 180 || (player.onPlatform && charJumpPosCurrent <= charJumpPosStart - 90)) {
      charJumpPosCurrent = charJumpPosStart - 180;
      player.charJumping = false;
    }
    
    player.y = charJumpPosCurrent;
  }
}

function changeSound() {
    if(song.isPlaying()){
        song.stop();
        flagMusicState = true;
        button.style('background-color', 'red');
    }
    else{
        song.play();
        flagMusicState = false;
        button.style('background-color', 'green');
    }
}
function keyTyped() {
    if (lives < 1) {
        if (lives <= 0 && keyCode === 32) {
            lives = 3;
            startGame();
            player.hasFallen = false;
            player.isFalling = false;
            player.isPlummeting = false;
        }
    }
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    player.isLeft = true;
  }
  if (keyCode === RIGHT_ARROW) {
    player.isRight = true;
  }
if (keyCode === UP_ARROW) {
  if (player.onPlatform) {
    player.y -= 150;
    player.onPlatform = false;
  } else if (!player.charJumping && player.canJump) {
    player.charJumping = true;
    charJumpPosStart = player.y;
    charJumpPosCurrent = player.y;
  }
}
}

function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    player.isLeft = false;
  } else if (keyCode === RIGHT_ARROW) {
    player.isRight = false;
  }
}