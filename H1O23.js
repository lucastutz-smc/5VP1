var x = 50;
var y = 50;

function setup() {
  canvas = createCanvas(1000,400);
  canvas.parent();
  textFont("Verdana");
  textSize(14);
  noStroke();
  frameRate(50);
}

function draw() {
  background('olive');
  
  if (keyIsDown(UP_ARROW)/*  || keyIsDown(W) */) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)/*  || keyIsDown(S) */) {
    y += 5;
  }
  if (keyIsDown(LEFT_ARROW)/*  || keyIsDown(A) */) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)/*  || keyIsDown(D) */) {
    x += 5;
  }

  y = constrain(y,0,height - 100);
  x = constrain(x,0,width - 100);

  let horizontalRange = false;
  let verticalRange = false;

  if (x >= 700 && x <= 875) {
    horizontalRange = true;
  } else {
    horizontalRange = false;
  }
  if (y >= 75 && y <= 225) {
    verticalRange = true;
  } else {
    verticalRange = false;
  }
  
  if (horizontalRange ^ verticalRange) {
    fill('chartreuse');
  } else if (horizontalRange && verticalRange) {
    fill('green');
  } else {
    fill('darkkhaki');
  }
  
  rect(800,175,75,50);
  
  fill('moccasin');
  rect(x,y,100,100);   
}

/* Antwoorden vragen

2. De jager kan niet lager dan de canvas
5. Die zijn waarden die betekenen dat de coordinaten van de jager dezelfde zijn als die van de prooi.
6. Anders zou het altijd groen worden gelkeur, omdat elke waarde zou óf groter dan 74 óf kleiner dan 226 zijn.
*/