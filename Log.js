class log {
    constructor(x, y, width ,angle) {
      var options = {
          'restitution':0.1,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, 20, options);
      this.width = width;
      this.height = 20;
      console.log(this.body);
    Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("yellow");
      fill("brown");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  