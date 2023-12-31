var aantal = 4;
var breedte;

function setup() {
  canvas = createCanvas(1000,300);
  canvas.parent();
  noStroke();
  textFont("Verdana");
  textSize(14);
  frameRate(110);
}

function draw() {
  background('lavender');
  fill('black');
  breedte = width / aantal;
  text("aantal = " + aantal,10,20);  
  
  push();
  translate(0.5*breedte,150);

  for (var n = 0; n < aantal;n++) {
    tekenJos(2 + n / 2);
    translate(breedte,0);
  }
  
  pop();

  aantal = constrain(aantal,1,90)
  
  if (keyIsDown(RIGHT_ARROW)) {
    aantal++;
  }
  if (keyIsDown(LEFT_ARROW)) {
    aantal--
  }
}

function tekenJos(s) {
  push();
  scale(s);
  noStroke();
  fill('indianred');
  ellipse(0,0,50);
  fill('slategray');
  ellipse(-7,-10,17);
  ellipse(7,-10,17);
  fill('white');
  ellipse(-7,-8,7,13);
  ellipse(7,-8,7,13);
  fill('orange');
  ellipse(0,3,17);
  stroke('slategray');
  strokeWeight(3);
  fill('white');
  arc(0, 13, 26, 13, 0, PI, CHORD);
  pop();
}

/* Antwoorden vragen 

7. De grootte van JOS.
8. De grootte gaat ook afhenkelijk zijn van welke JOS het is(eerste, tweede, twintigste).

*/