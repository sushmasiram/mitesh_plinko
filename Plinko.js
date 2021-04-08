class Plinko{
      
      constructor(x,y,r){
        var options = {
            density:1,
            isStatic: true,
            restitution:0.8,
            friction:1
          }
          this.body = Bodies.circle(x,y,r,options)
          World.add(myworld, this.body)
          this.r=r

        }

        display(){

          var pos = this.body.position;
          push()
          noStroke();
          ellipseMode(RADIUS);
          ellipse(pos.x,pos.y,this.r,this.r);
          pop()
      }

    }
 