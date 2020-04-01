let Food=function (width,height) {
    this.x=Math.floor(Math.random()*cavas.clientWidth);
    this.y=Math.floor(Math.random()*cavas.clientHeight);
    this.width=width;
    this.height=height;

    this.pickLocation=function () {
        this.x=Math.floor(Math.random()*cavas.clientWidth);
        this.y=Math.floor(Math.random()*cavas.clientHeight);

    }

    this.draw=function () {
        ctx.fillStyle="#FFFFFF";
        ctx.fillRect(this.x,this.y,this.width,this.height);

    }

}