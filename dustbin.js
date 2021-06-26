class Dustbin4{
constructor(x,y,width,height){
    var options2 = {
        isStatic : true,
        restitution : 0.3,
        friction : 0.5,
        density : 1.2
    }
    this.body = Bodies.rectangle(x,y,width,height,options2);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
}
display(){
rectMode(CENTER);
rect(this.body.position.x,this.body.position.y,this.body.position.width,this.body.position.height);
}
}
