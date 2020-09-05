class Plinko{
    constructor(x,y,radius){
        var options = {
            restitution:1,
            friction:0,
            isStatic:true
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill("white");
        ellipse(0,0, this.radius, this.radius)
        pop();
    }
}