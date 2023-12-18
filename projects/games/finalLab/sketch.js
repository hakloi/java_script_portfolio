var new_floor;
let collectables = [];

var canyon;
var collectable;
let cloud_x;

var mountain;
var cloud;

let isFinishSoundPlayed = false; 
let musicPlayed = false;

var collect;
let coins = [];
var platform =[];

var lives;

let music;
let finish;
let taken;
let enemySound;
let jump;

function preload(){
    soundFormats('mp3', 'ogg');
    music = loadSound('music/backMusic.mp3');
    finish = loadSound('music/finish.mp3');
    taken = loadSound('music/coins.mp3');
    enemySound = loadSound('music/enemyKick.mp3');
    jump = loadSound('music/jump.mp3');
    Jhuliosa = loadFont('font/Jhuliosa.otf');
}

function setup()
{
	createCanvas(1024, 576);
    floorPos_y = 432;
    lives = 5;
    startGame();
}

function startGame(){ 
    new_floor = floorPos_y;
    coins = [];
    
    character = {
        x: width/2,
        y: floorPos_y,
        diameter: 70,
        diameter1: 30,
        diameter2: 30,
        diameter3: 25,
        isLeft: false,
        isRight:false,
        isFalling:false,
        isPlummeting:false,
        hasFallen: false,
        onPlatform: false,
        
        charStand(){
            noStroke();
            fill(0, 128, 128);
            ellipse(character.x, character.y, character.diameter);
            fill(175, 238, 238);
            ellipse(character.x -20 , character.y + 20, character.diameter1);
            ellipse(character.x +20, character.y+20, character.diameter2);

            fill(255, 165, 0);
            ellipse(character.x, character.y-10, character.diameter3);
        },
        charLeftStand(){
                fill(175, 238, 238);
                ellipse(character.x -20 , character.y + 20, character.diameter1);

                fill(0, 128, 128);
                ellipse(character.x, character.y, character.diameter);

                fill(175, 238, 238);
                ellipse(character.x +20, character.y+20, character.diameter2);

                fill(255, 165, 0);
                ellipse(character.x - 20, character.y - 10, character.diameter3);
        },
        charRightStand(){
                fill(175, 238, 238);
                ellipse(character.x +20, character.y+20, character.diameter2);

                fill(0, 128, 128);
                ellipse(character.x, character.y, character.diameter);

                fill(175, 238, 238);
                ellipse(character.x -20 , character.y + 20, character.diameter1);

                fill(255, 165, 0);
                ellipse(character.x + 20, character.y - 10, character.diameter3);
        },
        charJump(){
                fill(0, 128, 128);
                ellipse(character.x, character.y, character.diameter);

                fill(175, 238, 238);
                ellipse(character.x -20 , character.y + 30, character.diameter1);
                ellipse(character.x +20, character.y+30, character.diameter2);

                fill(255, 165, 0);
                ellipse(character.x, character.y-10, 30,5);
        },
        charJumpR(){
                fill(175, 238, 238);
                ellipse(character.x +20, character.y+30, character.diameter2);

                fill(0, 128, 128);
                ellipse(character.x, character.y, character.diameter);

                fill(175, 238, 238);
                ellipse(character.x -20 , character.y + 30, character.diameter1);


                fill(255, 165, 0);
                beginShape();
                vertex(character.x-5, character.y-20);
                vertex(character.x+25, character.y-12);
                vertex(character.x-5, character.y-5);
                vertex(character.x+10, character.y-12);
                endShape();
        },
        charJumpL(){
                fill(0, 128, 128);
                ellipse(character.x, character.y, character.diameter);

                fill(175, 238, 238);
                ellipse(character.x -20 , character.y + 30, character.diameter1);
                ellipse(character.x +20, character.y+30, character.diameter2);

                fill(255, 165, 0);
                beginShape();
                vertex(character.x+5, character.y-20);
                vertex(character.x-25, character.y-12);
                vertex(character.x+5, character.y-5);
                vertex(character.x-10, character.y-12);
                endShape();
        }
    }
    
    vars = {
        scrollPos: 0,
        score: 0,
        scoreX: 30,
        endX: 300.
    }
    
    enemies = [
        {x: 350, y: 432, r: 30},
        {x: -300, y: 432, r: 30},
        {x: -670, y: 180, r: 30},
        {x: 940, y: 300, r: 30},
    ]

    platform = [
        {x: 330, y: 300-30, w: 90, h: 30},
        {x: 240, y: 250-38, w: 80, h: 30},
        {x: 760, y: 290-38, w: 90, h: 30},
        {x: -340, y: 320-38, w: 90, h: 30},
        {x: -440, y: 290-38, w: 90, h: 30},
    ]
    canyon = [50, 570, -150,-600];
    tree = [350, 800, -200, -280, -680];
    mountain = [600, 140,-100];
    
    list_coins = [
        {x: 25, y: round(random(300,250))},
        {x: 280, y: round(random(100,80))},
        {x: 380, y: round(random(80,50))},
        {x: 805, y: round(random(250,200))},
        {x: -670, y: round(random(400,300))},
        {x: -420, y: round(random(180,150))},
        {x: -300, y: round(random(200,150))},
    ]
    for (let i = 0; i < list_coins.length; i++) {
        let coin = {
            x: list_coins[i].x,
            y: list_coins[i].y,
            isFound: true
        };
        coins.push(coin);
    }
    flagpole = [
        {pos_X:700, isReached: false}
    ];
}

function draw()
{
    translate(vars.scrollPos,0);
    push();
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
    //draw some green ground
	rect(0, new_floor, 1024, width - new_floor);
	rect(-500, new_floor, 350, width - new_floor);
	rect(-700, new_floor, 100, width - new_floor); 
    if (character.x < -710 || character.x > 1024 +10|| character.y > height) {
        character.isPlummeting = true;
    }
    
    level();
    // platform
    for (let i = 0; i < platform.length; i++) {
      drawPlatform(platform[i]);
    }

    for (let i = 0; i < platform.length; i++) {
      if (checkPlatform(platform[i], character)) {
        character.onPlatform = true;
        break;
      } else {
        character.onPlatform = false;
      }
    }
    if (!character.onPlatform) {
      floorPos_y = 432;
    }
     
    //enemies
    for (let i = 0; i < enemies.length; i++) {
        enemies[i].x += random(-2, 2);
        drawEnemy(enemies[i]);
        // проверка столкновения
        checkCollision(enemies[i], character);
    }
    for (let i = 0; i < flagpole.length; i++) {
        checkFlagpole(flagpole[i]);
    }
    pop();
    movement();
    
    
    checkcharacterDie();
    fill(0);
    if (lives < 1) {
        textSize(40);
        textFont(Jhuliosa);
        text("\t\t\t\tGame over.\nPress space to continue.", vars.endX, height/2);
        return;
    } 
}

function level(){
    //draw sun
    fill(255, 255, 0);
    ellipse(770, 100, 80); 
    fill(255, 255, 0,50);
    ellipse(770, 100, 150); 
    fill(255, 255, 0,50);
    ellipse(770, 100, 180); 
    
    //draw clouds
    function drawCloud(xPos, yPos)
    {
        xpos = xPos;
        ypos = yPos;
        fill(255,255,255);
        ellipse(xpos, ypos, 100); 
        ellipse(xpos+50, ypos+20, 70);
        ellipse(xpos-50, ypos, 70);
    }
    
    cloud_x = [100, 500, 900];
    cloud_y = [100, 120, 50];
    for (let i = 0; i < cloud_x.length; i++){
        drawCloud(cloud_x[i], cloud_y[i]);
    }

    //draw canyon  
    for (let i = 0; i < canyon.length; i++){
        fill(184, 152, 59);
        rect(canyon[i],new_floor, 150, 580);
    }
    
    for (let i = 0; i < canyon.length; i++) {
        if (character.x > canyon[i] + 20 && character.x < canyon[i] + 150 - 20 && character.y == new_floor) {
            character.isPlummeting = true;
        }
    }
    
    //draw mountains
    for (let i = 0; i < mountain.length; i++){
        fill(192, 192, 192);
        triangle(mountain[i], new_floor, mountain[i]-130, new_floor, mountain[i]-80, 80);
        fill(128, 128, 128);
        triangle(mountain[i]+180, new_floor, mountain[i]-100, new_floor, mountain[i]+30, 120);
    }
    
    //draw tree
    for (let i = 0; i < tree.length; i++){
        fill(139, 69, 19);
        rect(tree[i], 380, 50, new_floor-380)
        fill(154, 205, 50);
        ellipse(tree[i]+40, 350, 90);
        fill(107, 142, 35);
        ellipse(tree[i]+20, 310, 100);
        fill(0, 128, 0);
        ellipse(tree[i], 342, 100);
    }

    // collectable
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        if (coin.isFound == true) {
            fill(240, 230, 140);
            ellipse(coin.x, coin.y, 40,40);
            if (dist(character.x, character.y, coin.x+20, coin.y) <= 60) {
                coin.isFound = false;
                if (coin.isFound==false){
                    vars.score++;
                    taken.play();
                }
            }
        }
    }
    
    fill(43,49,10);
    textSize(40);
    textStyle(BOLD);
    textFont(Jhuliosa);
	text("Coins: " + vars.score, vars.scoreX, 50);
    text("Lives: " + lives, vars.scoreX, 95);
    if (!musicPlayed) {
        textSize(40);
        textFont(Jhuliosa);
        text("Click for playing the music!", 280, 80);
    }
}

function checkcharacterDie() {
  if (character.y > height && !character.hasFallen) { 
    lives--; 
    character.hasFallen = true;
    if (lives > 0) {
        startGame();
        character.hasFallen = false;
        character.isFalling = false;
        character.isPlummeting = false;
    }
  }
}
function drawPlatform(platform) {
    fill(218,165,32);
    rect(platform.x, platform.y+38, platform.w, platform.h); 
}
function checkPlatform(platform, character) {
  const offsetChar = 20;
  if (
    character.x + offsetChar >= platform.x &&
    character.x - offsetChar <= platform.x + platform.w &&
    character.y <= platform.y + platform.h &&
    character.y >= platform.y
  ) {
    character.isFalling = false;
    character.isPlummeting = false;
    floorPos_y = platform.y - (platform.h + offsetChar);
    return true;
  }
  return false;
}
function drawEnemy(enemy) {
    fill(1,223,1);
    ellipse(enemy.x+2, enemy.y, enemy.r, enemy.r);
    rect(enemy.x, enemy.y, enemy.r, enemy.r/6);
    rect(enemy.x, enemy.y, enemy.r/6, enemy.r);
    beginShape();
    vertex(enemy.x,enemy.y);
    vertex(enemy.x-enemy.r,enemy.y);
    vertex(enemy.x-enemy.r,enemy.y+5);
    vertex(enemy.x,enemy.y+5);
    endShape();
    beginShape();
    vertex(enemy.x,enemy. y-enemy.r);
    vertex(enemy.x+5,enemy.y-enemy.r); 
    vertex(enemy.x+5,enemy.y+5);
    vertex(enemy.x,enemy.y+5);
    endShape();
    fill(255,255,0);
    ellipse(enemy.x-enemy.r,enemy.y+3,enemy.r/2)
    ellipse(enemy.x+3,enemy.y-enemy.r,enemy.r/2)
    ellipse(enemy.x+enemy.r/10, enemy.y+enemy.r+3, enemy.r/2);
    ellipse(enemy.x+enemy.r+3, enemy.y+enemy.r/10, enemy.r/2);
}
function checkCollision(enemy, character) {
   if (dist(enemy.x, enemy.y, character.x, character.y) <= enemy.r/2 || dist(enemy.x, enemy.y, character.x, character.y) < 70){
       if(!enemyPlayed){
           enemySound.play();
           enemyPlayed = true;
       } 
       lives = 1;
       character.isRight = false;
       character.isLeft = false;
       character.isPlummeting = true;
   } else {
       enemyPlayed = false;
   }
}
function movement(){
    var prevscrollPos = vars.scrollPos;
    var prevendX = vars.endX;
    var stopscore = vars.scoreX;
    
    if (!character.isRight && !character.isLeft && !character.isFalling)
        character.charStand();
    if (character.isFalling){
        if (character.isRight) character.charJumpR(); 
        if (character.isLeft) character.charJumpL(); 
        if (!character.isRight && !character.isLeft) character.charJump();
    }     
    if (character.isLeft){
        if (!character.isFalling) character.charLeftStand();
        vars.scoreX -= 10;
        character.x -=10;
        vars.endX -=10; 
        vars.scrollPos+=10;
    } 
    if (character.isRight){
        if(!character.isFalling) character.charRightStand();
        vars.scoreX += 10;
        character.x +=10;
        vars.scrollPos-=10;
        vars.endX +=10;
        }
    if (character.isPlummeting) {
        character.y += 7;
        character.isLeft = false;
        character.isRight = false;
        vars.scrollPos = prevscrollPos;
        vars.scoreX = stopscore;
        vars.endX = prevendX;
    }
    
    if (character.y < floorPos_y) {
        character.isFalling = true;
        character.y += 5;
    } else {
        character.isFalling = false;
    }
}
function checkFlagpole(flagpole) {
    if (!flagpole.isReached) {
        fill(224,102,102);
        rect(flagpole.pos_X+210,370,80,32);
        
        fill(77,84,139);
        rect(flagpole.pos_X+200,380,100,32);
        arc(flagpole.pos_X+250,370,80,32,-PI, PI);

        fill(0);
        beginShape();
        vertex(flagpole.pos_X+210,412);
        vertex(flagpole.pos_X+200,432);
        vertex(flagpole.pos_X+210,432);
        vertex(flagpole.pos_X+220,412);
        endShape();
        
        fill(0);
        beginShape();
        vertex(flagpole.pos_X+290,412);
        vertex(flagpole.pos_X+300,432);
        vertex(flagpole.pos_X+290,432);
        vertex(flagpole.pos_X+280,412);
        endShape();
    }else {
        fill(255,242,204);
        rect(flagpole.pos_X+210,370,80,32);
        
        fill(77,84,139);
        rect(flagpole.pos_X+200,380,100,32);
        arc(flagpole.pos_X+250,370,80,32,-PI, PI);

        fill(0);
        beginShape();
        vertex(flagpole.pos_X+210,412);
        vertex(flagpole.pos_X+200,432);
        vertex(flagpole.pos_X+210,432);
        vertex(flagpole.pos_X+220,412);
        endShape();
        
        fill(0);
        beginShape();
        vertex(flagpole.pos_X+290,412);
        vertex(flagpole.pos_X+300,432);
        vertex(flagpole.pos_X+290,432);
        vertex(flagpole.pos_X+280,412);
        endShape();
    }

    if (dist(character.x, character.y, flagpole.pos_X+240, 432) < 20) {
        flagpole.isReached = true;
        if (vars.score < 7){
            fill(0);
            textSize(40);
            textFont(Jhuliosa);
            text("Find all coins to continue.", vars.endX, height/2); 
        } else {
            character.isRight = false;
            character.isLeft = false;
            keyPressed =false; 
            fill(0);
            textSize(40);
            textFont(Jhuliosa);
            text("\tLevel complete!\nThank you for play!", vars.endX, height/2);
            if (!isFinishSoundPlayed) {
                finish.play();
                isFinishSoundPlayed = true;
            }
        }
    } 
    return flagpole.isReached;
}
function playMusic() {
  if (!musicPlayed) {
    music.loop = true;
    music.play();
    musicPlayed = true;
  }
}
function mouseClicked() {
  playMusic();
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    character.isLeft = true;
  }
  if (keyCode === RIGHT_ARROW) {
    character.isRight = true;
  }
  if (keyCode === UP_ARROW) {
    if (character.y === floorPos_y || character.onPlatform) {
      character.y -= 180;
      jump.play();
    }
  }
}
function keyReleased() {
  if (keyCode === LEFT_ARROW) {
    character.isLeft = false;
  }
  else if (keyCode === RIGHT_ARROW){
    character.isRight = false
  }
}
function keyTyped() {
    if (lives < 1) {
        if (lives <= 0 && keyCode === 32) {
            lives = 3;
            startGame();
            character.hasFallen = false;
            character.isFalling = false;
            character.isPlummeting = false;
        }
    }
}
