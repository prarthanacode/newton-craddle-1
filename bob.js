class bob {
    constructor(x,y) {
      var options = {
          restitution:0.2,
          friction:0.4,
          density:0.6

      }
      this.body = Bodies.circle(x,y,50,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      push();
      translate(this.body.position.x,this.body.position.y)
      rectMode(CENTER)
      fill("pink");
      pop();
      ellipse(pos.x, pos.y, this.radius);
    }
    }; 