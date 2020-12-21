

class Bin {
  constructor(x, y, width, height) {
   var options = {
 //       'restitution':0.8,
 //       'friction':1.0,
 //       'density':1.0,
       isStatic:true
   }
   // this.image=loadImage("dustbin.png");
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
   //var angle = this.body.angle;
  //push();
   // translate(pos.x, pos.y);
    rectMode(CENTER);
   // imageMode(CENTER); 
    fill("green");
    rect(pos.x,pos.y, this.width, this.height);
    //image(this.image,0,0,this.width,this.height);
    //pop();
  }
}
