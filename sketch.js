let j;
function setup() {
  // put setup code here
  createCanvas(400,200);
  j=0;
}
  //sebelah kiri
function draw() {
  // put drawing code here
  background(47,79,79);
  strokeWeight(1)
  line(200,0,200,400);

  fill(0,128,0)
  strokeJoin(ROUND)
  strokeWeight(3)
  ellipse(100,70,120,75);

  fill(255,255,255)
  ellipse(78,40,45,45);
  ellipse(122,40,45,45);
  
  
  fill(0,0,0)
  ellipse(80,40,20,20);
  ellipse(120,40,20,20);
  
  fill(255,255,255)
  ellipse(80,38,10,15);
  ellipse(120,38,10,15);

  fill(0,128,0)
  ellipse(100,145,85,90);

  fill(0,128,0)
  strokeJoin(ROUND)
  strokeWeight(7)
  arc(80,35,43,50,radians(180),radians(0));
  arc(120,35,43,50,radians(180),radians(0));


  fill(255,255,255)
  strokeJoin(ROUND)
  strokeWeight(0)
  
  fill(0,0,0)
  ellipse(100,70,10,10);

  fill(219,112,147)
  ellipse(60,75,10,20);
  ellipse(140,75,10,20);

  fill(180,0,0)
  arc(100,85,35,65,radians(0),radians(180));
  
  fill(0,0,0)
  strokeJoin(ROUND)
  strokeWeight(10)
  line(40,120,65,130);
  line(160,120,135,130);
  line(85,185,85,200);
  line(115,185,115,200);
  ellipse(40,120,15,15);
  ellipse(160,120,15,15);

  // Sebelah kanan

  fill(0,128,0)
  strokeJoin(ROUND)
  strokeWeight(3)
  ellipse(300,70,120,75);

  fill(255,255,255)
  ellipse(278,40,45,45);
  ellipse(322,40,45,45);
  
  
  fill(0,0,0)
  ellipse(280,40,20,20);
  ellipse(320,40,20,20);
  
  fill(255,255,255)
  ellipse(280,38,10,15);
  ellipse(320,38,10,15);

  fill(0,128,0)
  ellipse(300,145,85,90);

  fill(255,255,255)
  strokeJoin(ROUND)
  strokeWeight(0)
  
  fill(0,0,0)
  ellipse(300,70,10,10);




  fill(180,0,0)
  arc(300,85,35,65,radians(0),radians(180));
  
  fill(0,0,0)
  strokeJoin(ROUND)
  strokeWeight(10)
  line(240,120,265,130);
  line(360,120,335,130);
  line(285,185,285,200);
  line(315,185,315,200);
  ellipse(240,120,15,15);
  ellipse(360,120,15,15);

  strokeJoin(ROUND)
  strokeWeight(8)
  fill(0,128,0)
  arc(280,35,43,50,radians(180),radians(0));
  arc(320,35,43,50,radians(180),radians(0));
  
      strokeJoin(ROUND)
      strokeWeight(0)
      for (var i=0; i<=400; i++){
        x = i
        y = 260 + 5*Math.sin(PI*x/50)
        point(x,y)
      }
      var y = 75 + 5*Math.sin(PI*j/20)
      var r = 10 + 5*Math.sin(PI*j/20)
      var o = 20 + 5*Math.sin(PI*j/20)
      j += 1
      fill(219,112,147)
      ellipse(260,y,r,o);

      for (var i=0; i<=400; i++){
        x = i
        y = 340 + 5*Math.sin(PI*x/50)
        point(x,y)
      }
      var y = 75 + 5*Math.sin(PI*j/20)
      var r = 10 + 5*Math.sin(PI*j/20)
      var o = 20 + 5*Math.sin(PI*j/20)
      j += 1
      fill(219,112,147)
      ellipse(340,y,r,o);

}