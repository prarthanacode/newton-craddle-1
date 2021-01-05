class rope
{
    constructor(body1,point1){

       this.pointB = point1;
        var options=
        {
            bodyA:body1,
            pointB:point1,
            stiffness:0.05,
            length : 300
        }
        this.rope=Constraint.create(options)
        World.add(world,this.rope)

    }
    display()
    {
        var pos = this.rope.bodyA.position;
        fill("white");
        line(pos.x,pos.y,this.pointB.x,this.pointB.y)
    }
} 