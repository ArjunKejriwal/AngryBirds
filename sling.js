class SlingShot{

constructor(a,b){

    var options  = {

        bodyA : a,
        pointB : b,
        stiffness: 0.04,
        length:10

    }
    this.sling = Matter.Constraint.create(options) ;
    Matter.World.add(world, this.sling);

}

display(){

  var pointA  = this.sling.bodyA.position;
  var pointB  = this.sling.pointB;

  strokeWeight(4);
  line(pointA.x , pointA.y , pointB.x , pointB.y)

}

}