function setup() {
    createCanvas(600, 600);
}


function draw() {
   background(220,20,60);
   noStroke();
   fill(255);
    ellipse(250,250,20,20);

   var duration = 6000;
   var timing = (new Date()%duration)/duration;
   var timing1 = (new Date()%duration*2)/duration*2;


   fill(196,158,0);
   ellipse(250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        10,                                     // width
        10);    

   fill(255,215,0);
   ellipse(250 + Math.cos(timing*2*PI)*200 + Math.cos(timing*4*PI)*100,           // x좌표
        250 + Math.sin(timing*2*PI)*200 + Math.sin(timing*4*PI)*100,       // y좌표
        30,                                     // width
        30);  

   fill(22,173,0);
   ellipse(250 + Math.cos(timing*6*PI)*150,           // x좌표
        250 + Math.sin(timing*6*PI)*150,       // y좌표
        20,                                     // width
        20);                                  // height



}