class Slingshot{
    constructor(bodyA,bodyB){
        var options={
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.04,
          length:10
        }
        this.Slinghot = Constraint.create(options);
        this.pointB=bodyB;
        World.add(world, this.Slingshot);
        
        
    }
    display(){
      var pos=this.Slingshot.bodyA.position;
      var posB=this.pointB;
      line(pos.x,pos.y,posB.x,posB.y);
    }
}
  