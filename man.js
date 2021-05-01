

class Man{
    constructor(x,y, width, height){
    var manOptions = {
        isStatic:true
    }; 
    this.image = loadImage("walking_1.png");
    this.width = width;
    this.height = height
    this.body = Bodies.rectangle(x, y, width, height, manOptions)
    World.add(world, this.body);
    }
    
    display(){  
        var mangoPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(mangoPos.x, mangoPos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
    
}
