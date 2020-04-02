let Snake=function (width,height) {
    this.x=10;
    this.y=10;
    this.width=width;
    this.height=height;
    this.total=0;
    this.tail=[];
    this.score=0;
    this.xSpeed=10;
    this.ySpeed=0;

    this.draw=function () {
        ctx.fillStyle="#169EE6";
        for (let i=0;i<this.tail.length;i++){

            ctx.fillRect(this.tail[i].x, this.tail[i].y, this.width,this.height);
        }
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }

    this.update = function () {

        for (let i=0;i<this.tail.length-1;i++){
            this.tail[i]=this.tail[i+1];
        }
        this.tail[this.total-1]={
            x:this.x,
            y:this.y
        }
        this.x+= this.xSpeed;
        this.y+= this.ySpeed;

    }
    this.hitTail=function () {
        for (let i=0;i<this.tail.length;i++){
            if (this.x < this.tail[i].x +  this.tail[i].width &&
                this.x + this.width >  this.tail[i].x &&
                this.y <  this.tail[i].y +  this.tail[i].height &&
                this.y + this.height >  this.tail[i].y){
                console.log("hit tail");
            }
        }
    }

    this.hitWall=function () {
        if (snake.x===300||snake.y===300||snake.x===-10||snake.y===-10) {
            return true
        }
        return false;
    }



    let flag;
    this.changeDirection=function (direction) {
        if (direction === "Up" && flag!=="down" ){
            flag ="up";
            if (flag==="up"){
                this.xSpeed= 0;
                this.ySpeed= -10;
            }
        }

        else if (direction === "Down" && flag !== "up") {
            flag = "down";
            if (flag==="down"){
                this.xSpeed = 0;
                this.ySpeed = 10;
            }
        }

        else if (direction === "Right" && flag !== "left"){
            flag ="right";
            if (flag==="right"){
                this.xSpeed= 10;
                this.ySpeed= 0;
            }
        }

        else if (direction === "Left" && flag !== "right"){
            flag ="left";
            if (flag==="left"){
                this.xSpeed= - 10;
                this.ySpeed= 0;
            }
        }
    }

    this.eat=function (food) {
        if ( this.x < food.x + food.width &&
            this.x + this.width > food.x &&
            this.y < food.y + food.height &&
            this.y + this.height > food.y) {
            this.total++;
            this.score++;
            return true;
        }
        return false;
    }

}