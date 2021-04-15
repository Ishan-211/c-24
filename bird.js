class Bird{
    constructor(x,y){
        //declare the property
        var options={
         
           restitution:0.8,
            density:1,
            friction:0.3
        }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.width=50;
    this.height=50;
    World.add(world,this.body);
    }
    display(){
    this.body.position.x=mouseX;
    this.body.position.y=mouseY;
     
    var pos=this.body.position;
    var angle=this.body.angle;
    push ()
    translate (pos.x,pos.y)
rotate (angle)
strokeWeight(3)
stroke("blue")
fill ("red")
   rect(0,0,this.width,this.height);
   pop ()
      
    }
}