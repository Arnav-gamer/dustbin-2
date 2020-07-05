class Dustbin{
    constructor(x,y,width,height){
    var options={
       isStatic:true
   }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;

    this.dustbingreen=loadImage("dustbingreen.png");
    World.add(world,this.body)

    }
    display(){
        image(this.dustbingreen,600,250);

        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
   }

}