class Ground{
    constructor(x,y,w,h){
        var options = {
            density:1,
            isStatic: true,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.rectangle(x,y,w,h,options)
          World.add(myworld, this.body) 
          this.w = w
          this.h = h

        }

    display(){

        push()
        
        fill("white")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)

        pop()
    
    }
      
}
