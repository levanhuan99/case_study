let Snake=function (width,height) {
    this.x=0;
    this.y=0;
    this.width=width;
    this.height=height;
    this.total=0;
    this.tail=[];

    this.xSpeed=10;
    this.ySpeed=0;

    this.draw=function () {
        ctx.fillStyle="#FFFFFF";
        for (let i=0;i<this.tail.length;i++){

            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.width,this.height);
        }
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    this.update=function () {
        this.x+= this.xSpeed;
        this.y+= this.ySpeed;
        for (let i=0;i<this.tail.length-1;i++){
            this.tail[i]=this.tail[i+1];
        }
        this.tail[this.total-1]={
            x:this.x,
            y:this.y
        }
        // if (this.x > cavas.width){
        //     this.x=0;
        // }
        // if (this.y < cavas.height){
        //     this.y=0;
        // }
        // if (this.x < 0){
        //     this.x = cavas.width;
        // }
        // if (this.y<0){
        //     this.y = cavas.height;
        // }
    }

    this.changeDirection=function (direction) {
        switch (direction) {
            case "Up":
                this.xSpeed= 0;
                this.ySpeed= -10;
                break;
            case "Down":
                this.xSpeed= 0;
                this.ySpeed= 10;
                break;
            case "Right":
                this.xSpeed= 10;
                this.ySpeed= 0;
                break;
            case "Left":
                this.xSpeed= - 10;
                this.ySpeed= 0;
                break;
        }
    }
    this.eat=function (food) {
        if ( this.x < food.x + food.width &&
            this.x + snake.width > food.x &&
            this.y < food.y + food.height &&
            this.y + this.height > food.y) {
            this.total++;
            return true;
        }
        return false;
    }

}