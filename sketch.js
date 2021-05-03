let g=150;
let c=0.5;
function setup() {
  createCanvas(200, 200);
  noFill();
}

function draw() {
  background(255);
  ellipse(width/2, height/2, 80,80)
  bezier(10,height/2, width/2-20, 20, width/2+20, 20, 190, height/2)
   bezier(10,height/2, width/2-20, 180, width/2+20, 180, 190, height/2)
  stroke(82, g, 163);
strokeWeight(20);
  g=g+c;
  

 if(g>=150){
    c=-0.5;
  }
  else if(g<100) 
  {
    c=0.5;
  }
}