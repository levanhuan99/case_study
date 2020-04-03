let Food=function (width,height) {
    this.x=Math.floor(Math.random()*cavas.clientWidth);
    this.y=Math.floor(Math.random()*cavas.clientHeight);
    this.width=width;
    this.height=height;

    //chon vị trí để vẽ lại food
    this.pickNewLocation=function () {
        this.x=Math.floor(Math.random()*cavas.clientWidth);
        this.y=Math.floor(Math.random()*cavas.clientHeight);

    }


    //vẽ food
    this.draw=function () {
        ctx.src="#E6E016";
        ctx.fillRect(this.x,this.y,this.width,this.height);

    }

}