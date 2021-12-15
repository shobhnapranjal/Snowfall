class snow {
    constructor(x,y) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,10,10,options);
      
      World.add(world, this.body);
      this.image= loadImage("snow4.webp")
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x, pos.y, 10,10);
    }
  };
 