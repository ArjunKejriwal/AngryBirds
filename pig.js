class Pig {
    constructor(x, y){
        var options = {
            restitution:1
        }
        this.body = Matter.Bodies.rectangle(x, y, 50,50, options)
        Matter.World.add(world, this.body)
        this.w = 50;
        this.h = 50
    }

    display(){
        var a = this.body.angle
        push ()
        translate (this.body.position.x, this.body.position.y)
        rotate (a);
        fill("green");
        rectMode(CENTER)
        rect(0, 0, this.w, this.h)
        pop ()
    }
}
