var raster = {
  aantalRijen: 18,
  aantalKolommen: 27,
  celGrootte: null,
  
  berekenCelGrootte() {
    this.celGrootte = width / this.aantalKolommen;
  },
  teken() {
    push();
    noFill();
    stroke('grey');
    for (var rij = 0;rij < this.aantalRijen;rij++) {
      for (var kolom = 0;kolom < this.aantalKolommen;kolom++) {
        rect(kolom*this.celGrootte,rij*this.celGrootte,this.celGrootte,this.celGrootte);
      }
    }
    pop();
  }
}

var jos = {
  x: 400,
  y: 300,
  animatie: [],
  aantalFrames: 6,
  frameNummer: 3,
  stapGrootte: null,

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.stapGrootte;
      this.frameNummer = 2;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.stapGrootte;
      this.frameNummer = 1;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= this.stapGrootte;
      this.frameNummer = 4;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.stapGrootte;
      this.frameNummer = 5;
    }
    
    this.x = constrain(this.x,0,width - raster.celGrootte);
    this.y = constrain(this.y,0,height - raster.celGrootte);
  },
  
  toon() {
    image(this.animatie[this.frameNummer],this.x,this.y,raster.celGrootte,raster.celGrootte);
  }
}

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  for (var b = 0;b < jos.aantalFrames;b++) {
    frame = loadImage("images/sprites/Jos100px/Jos_" + b + ".png");
    jos.animatie.push(frame);
  }
}

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent();
  frameRate(10);
  raster.berekenCelGrootte();
  jos.stapGrootte = 2*raster.celGrootte;
}

function draw() {
  background(brug);
  raster.teken();
  jos.beweeg();
  jos.toon();
  text(jos.animatie[3].width,5,15);
}

/* Antwoorden vragen 

1. 6, beweeg.
2. 70, 2 * celGrootte.
3. Naar links gaat ie "celGrootte", en naar rechts gaat ie "stapGrootte".
5. In de array änimatie binnen het object jos worden plaatjes toegevoegd.
6. text met "100".
8. 7.

*/