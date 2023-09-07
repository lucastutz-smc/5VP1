function setup() {
  canvas = createCanvas(900,200);
  background('lavender');
  noLoop();
}

function draw() {
  noStroke();
  fill('thistle');
  translate(50,50);
  rect(0,0,100,100);
  
  translate(140,0);
  rect(0,0,100,100);
  translate(140,0);
  rect(0,0,100,100);
  
  translate(140,0);
  // BEGIN aanpassing

  push();
  stroke('cornsilk');
  strokeWeight(20);
  fill('teal');
  translate(0,40);  
  rect(0,0,100,100); 
  pop();
  // EINDE aanpassing
  
  translate(140,0);
  rect(0,0,100,100);
  translate(140,0);
  rect(0,0,100,100);  
}

/* Antwoorden vragen

2. Nee
5. De laatste 3 vierkanten worden teal omdat push() opslaat hoe de instellingen zijn en nadat de instellingen zijn veranderd wordt het zo opgeslagen.

*/