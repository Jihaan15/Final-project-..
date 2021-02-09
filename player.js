class Player{
    constructor(x,y,width,height){
var options = {
    restitution : 0.04,
    friction : 2.5,
density : 1.0,
    }
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width;
this.height = height;
this.image= loadImage("samurai.png")

World.add(world,this.body)
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
    }
}