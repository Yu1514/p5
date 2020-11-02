let cnv, d, g;
let sliderR;
let sliderG;
let sliderB;
//体积
let sliderW;
let sliderh;
let sliderl;
let myFont;

let cubex;
let cubey;
let endGameBool = false;
let angle=0;
let angle2=0;
let cubebreakbool =false;
let sealong;
let result;
let result1;
let i =-1;
let love=["THERE IS NOTHING IN MY HEART","I'M SORRY ABOUT THAT",
"ALL BOXES IN HERE HAVE NOTHING","BUT YOU BELONG ME","AND WE ALL LOVE YOU"
,"THIS'S THE END BUT NOT THE END","YOU CAN RELOAD THE PAGE","AND WE WILL MEET TOGERTER AGAIN"]
function preload(){

  myFont= loadFont("images/AdobeArabic-Bold.otf")
}
function setup() {
  cnv = createCanvas(windowWidth/3+100,windowHeight/2+100,WEBGL);
  cnv.mousePressed(cubeBreak); // attach listener for
  // canvas click only
  createElement("h2","Let's create your own box in the sea!")
  createP("add some red");
  sliderR = createSlider(0,255,255,1);
  createP("then add some green");
  sliderG = createSlider(0,255,255,1);
  createP("or you can add blue only");
  sliderB = createSlider(0,255,255,1);
  frameRate(30);

  createP("make your box slim or plump");
  sliderW = createSlider(0,windowHeight/3-30,windowHeight/3-30,10);
  createP("make your box thin or thicker");
  sliderh = createSlider(0,windowHeight/4-30,windowHeight/4-30,10);
  createP("make your box flat or tall");
  sliderl= createSlider(0,windowHeight/3-30,windowHeight/2-30,10);
  g = 100;
  createP("click to check your box");
  savecubebuttom = createButton("see my box");
  savecubebuttom.mousePressed(endGame);


   textFont(myFont);
   textSize(30);
   textAlign(CENTER, CENTER);

   sealong=random(10,200);
  result1=random(result);
}

function endGame(){

endGameBool=1;

// saveCanvas("photo","png");

}
function cubeBreak() {
endGameBool=2;
}

function draw() {
  if(endGameBool==false){

   background("#223364");


   cubex=map(mouseX/20,windowWidth/3,windowWidth/2,1,5);
   cubey=map(mouseY/30,windowHeight/3,windowWidth/2,1,90);

     rotateX(cubex);
     rotateY(cubey);


   let h1=map(sin(angle),1,-1,sliderl.value()-sealong,sliderl.value());
   stroke(0);
   directionalLight(205,206,230,mouseX/2+300,200,-mouseY/2-300);
   fill(sliderR.value(),sliderG.value(),sliderB.value())
   box(sliderW.value(),h1,sliderh.value());


angle=angle+.1;




  }
  if(endGameBool== 1){
    background("#dbba22");

    let t1=map(sin(angle2),1,0,0,10);
  push();
    rotateY(45);
    rotateX(t1);
    fill(sliderR.value(),sliderG.value(),sliderB.value());
    box(sliderW.value(),sliderl.value(),sliderh.value());
    pop();
  rotateX(0);
  rotateY(0);
  rotateZ(0);
  fill(0);
  textSize(28);

  text("click canvas  to break your cube", 0, 130);
    textSize(20);
  text("or you can press c to get a new",0,150);

  angle2=angle2+.01;
  }

  if(endGameBool == 2){

   background("#dbba22");
let t1=map(sin(angle2),1,0,0,10);
push();
    fill(sliderR.value(),sliderG.value(),sliderB.value());
    rotateY(45);
    rotateX(t1);
    translate(0,0);
    box(sliderW.value()/2,sliderl.value(),sliderh.value());

    translate(150,0);

    box(sliderW.value()/2,sliderl.value(),sliderh.value());

  angle2=angle2+.01;
pop();
rotateX(0);
rotateY(0);
rotateZ(0);
fill(0);
translate(-10,0);
textSize(28);
text("Broken cube want to talk with you", 0, 130);
textSize(20);
text("press key g to continue", 0, 150);


  }
  if(endGameBool==4){
let t1=map(sin(angle2),1,0,0,10);
    background("#dbba22");
    push();
        fill(sliderR.value(),sliderG.value(),sliderB.value());
        rotateY(45);
        rotateX(t1);

        box(sliderW.value()/2,sliderl.value(),sliderh.value());
     translate(150,0)
        box(sliderW.value()/2,sliderl.value(),sliderh.value());

      angle2=angle2+.003;
      pop();
      rotateX(0);
      rotateY(0);
      rotateZ(0);
      fill(0);



    fill(0);
    textSize(28);
    text("爱:NICE TO MEET YOU! ", 0, 130);
    textSize(20);
    text("PLEASE KEEP PRESS B UNTIL I HVAE FINISHED ", 0, 150);

    }
    if(endGameBool==5){
      let t1=map(sin(angle2),1,0,0,10);
      background(219-i*20,186-i*5,34+i*15);
    if(i<=5){
      push();
          fill(sliderR.value(),sliderG.value(),sliderB.value());
          rotateY(45);
          rotateX(t1);
          translate(-10,0)
          box(sliderW.value()/2,sliderl.value(),sliderh.value());

          translate(150,0)

          box(sliderW.value()/2,sliderl.value(),sliderh.value());

        angle2=angle2+.003;
      pop();

      rotateX(0);
      rotateY(0);
      rotateZ(0);
      fill(0);
      textSize(28);
      text(love[i], 0, 140);}

    }

    if(i==6){
         background("#223364");
      let t1=map(sin(angle2),1,0,0,10);
    push();

       // cubex=map(mouseX/20,windowWidth/3,windowWidth/2,1,5);
       // cubey=map(mouseY/30,windowHeight/3,windowWidth/2,1,90);
       //
       //   rotateX(cubex);
       //   rotateY(cubey);
       rotateY(45);
       rotateX(t1);
      directionalLight(205,206,230,mouseX/2+300,200,mouseY/2-300);
      fill(sliderR.value(),sliderG.value(),sliderB.value());
      let h1=map(sin(angle),1,-1,30,50);
      box(40,h1,60);
      angle=angle+.1;
      pop();
    rotateX(0);
    rotateY(0);
    rotateZ(0);
    fill(0);

       text(love[i], 0, 100);
    }


}
function keyPressed(){
  if(key=="c"||key =="C"){
    endGameBool=false;
}
if(key=="g"||key =="G"){
  endGameBool=4;
}

if (key=="b" || key== "B") {
  endGameBool= 5;
  i=i+1

}
}


// this function fires only when cnv is clicked
