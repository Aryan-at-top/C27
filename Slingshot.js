class Slingshot{
constructor(bird,log){
var options={
    bodyA:bird,
    bodyB:log,
    length:5,
    stiffness:0.5
}
this. constraint=Matter.Constraint.create(options)
World.add(world,this.constraint)
}
display(){
console.log(this.constraint);
strokeWeight(10)
line(this.constraint.bodyA.position.x,this.constraint.bodyA.position.
y,this.constraint.bodyB.position.x,this.constraint.bodyB.position.y)
strokeWeight()
}
}