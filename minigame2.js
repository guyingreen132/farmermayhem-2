let img;
let player;
let dirt;

function preload() {
  img = loadImage('assets/grass.png');
  player = loadImage('assets/player.png');
  dirt = loadImage('assets/plant.png');
}

function setup () {
createCanvas(windowWidth-20, windowHeight-20);
}

x=0;
y=0;

function draw() {
    background(img);
    Image(player,mouseX-50,mouseY-50,100,100);
    Image(dirt,x,y,100,100)

if(mouseX>x&&mouseX<x+100&&mouseY>y&&mouseY<y+100) {
    cursor('pointer');
} else {
    cursor(ARROW);
}

if(mouseX>x&&mouseX<x+100&&mouseY>y&&mouseY<y+100&&mouseIsPressed == true) {
    x=random(100,windowWidth-120);
    y=random(100,windowHeight-120);
}

}