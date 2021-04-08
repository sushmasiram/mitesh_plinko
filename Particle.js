class Particle {

    constructor(x,y,r){
        var options = {
            restitutions:0.4,
        }
        this.r=r;

        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(myworld, this.body);

    }
    display(){
// rotate and translate not needed

        var pos = this.body.position;
        push()        
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
    }

}