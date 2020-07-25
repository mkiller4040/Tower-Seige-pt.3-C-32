class Box
{
    constructor(x, y, width, height) 
    {
        var options = 
        {
            'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visibility = 255;
        World.add(world, this.body);
      }
      
      score()
      {
        if(this.visibility < 0 && this.visibility >- 105)
        {
          score ++;
        }
      }

      display()
      {
        if(this.body.speed < 4)
    {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("blue")
        rect(0, 0, this.width, this.height);
        pop();
    }
    else
    {
        World.remove(world,this.body);
        push();
        translate(this.body.position.x, this.body.position.y);
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        rect(0, 0, this.width, this.height);
        pop();
    }
      }
};
