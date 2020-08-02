class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 0,
        inertia: 0,
        restitution: 1.0,
        static: false
        
    }
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;
    Matter.Body.setStatic(this.body, false);
   
    console.log(options);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius,this.radius);
    pop();
    
    
  }
}
