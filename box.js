class Box{
    constructor(x,y,width,height){
        //declare the property
        var options={
            
            restitution:0.8,
            density:1,
            friction:0.3
        }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push ()
        translate (pos.x,pos.y)
    rotate (angle)
    strokeWeight(3)
    fill ("brown")
       rect(0,0,this.width,this.height);
       pop ()
    }
}