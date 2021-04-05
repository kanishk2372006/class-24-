class bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 40;
      this.height = 40;
      console.log(this.body);
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      this.body.position.x = mouseX;
    this.body.position.y = mouseY;
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("yellow");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  