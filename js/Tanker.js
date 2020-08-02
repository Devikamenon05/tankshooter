class Tanker {
  constructor(x, y, width, height,angle) {
      var options = {
      isStatic: true
     }
     this.body = Bodies.rectangle(x,y,width,height,options);
     Matter.Body.setAngle(this.body, angle);
     this.width = width;
     this.height = height;
     
    
    
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
     var pos = this.body.position;
     var angle = this.body.angle;

     
    push();
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width,this.height);
     translate(pos.x,pos.y);
     rotate(angle);
     pop();
     
    
    }

     
    };

