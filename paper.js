class Paper{
    constructor(x,y,radius){
    var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
   }
    this.body=Bodies.circle(x,y,radius,options);
   this.radius=radius;
   this.paper=loadImage("paper.png");
    World.add(world,this.body)

    }
    display(){
        image(this.paper,200,100);
        var pos=this.body.position;        
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius);

   }

}

